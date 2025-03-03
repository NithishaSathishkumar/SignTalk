# V, W, x, B, C, H, G, i, L, S
from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import mediapipe as mp
import pickle

app = Flask(__name__)
CORS(app)

# Load the trained model
with open('SignTalkApp/model.p', 'rb') as f:
    model_dict = pickle.load(f)
    model = model_dict['model']

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.5)  # Adjust as needed

# Ensure labels_dict includes all possible classes predicted by your model
labels_dict = {
    0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I',
    9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P', 16: 'Q',
    17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X', 24: 'Y', 25: 'Z',   
}

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Read the image file
    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    # Process the image with Mediapipe Hands
    results = hands.process(img_rgb)
    data_aux = []
    x_ = []
    y_ = []

    if results.multi_hand_landmarks:
        print("Hand landmarks detected")
        for hand_landmarks in results.multi_hand_landmarks:
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                x_.append(x)
                y_.append(y)

            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                # Improved Normalization
                data_aux.append((x - min(x_)) / (max(x_) - min(x_) + 1e-6))
                data_aux.append((y - min(y_)) / (max(y_) - min(y_) + 1e-6))

        try:
            prediction = model.predict([np.asarray(data_aux)])
            predicted_index = int(prediction[0])

            # Check if prediction is within valid range
            if predicted_index in labels_dict:
                predicted_character = labels_dict[predicted_index]
                confidence = np.max(model.predict_proba([np.asarray(data_aux)]))
                print("Predicted character:", predicted_character, "| Confidence:", confidence)
                return jsonify({'prediction': predicted_character, 'confidence': float(confidence)})
            else:
                print("Prediction index out of range:", predicted_index)
                return jsonify({'error': f'Prediction index {predicted_index} out of range'})

        except Exception as e:
            print("Prediction error:", str(e))
            return jsonify({'error': str(e)})

    else:
        print("No hand landmarks detected")
        return jsonify({'error': 'No hand landmarks detected'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
