import mediapipe as mp
import os
import cv2
import matplotlib.pyplot as plt
import pickle

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

#Change the dir based on where you stored the code
DATA_DIR = '/Users/nithishasathishkumar/SignTalk/src/data'

data = []
labels = []

if not os.path.exists(DATA_DIR):
    raise FileNotFoundError(f"The directory {DATA_DIR} does not exist. Please check the path.")

# Process images in the dataset directory
for dir_ in os.listdir(DATA_DIR):
    dir_path = os.path.join(DATA_DIR, dir_)
    if os.path.isdir(dir_path):  # Check if it is a directory
        for img_path in os.listdir(dir_path):
            data_aux = []
            img = cv2.imread(os.path.join(dir_path, img_path))
            img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

            result = hands.process(img_rgb)
            if result.multi_hand_landmarks:
                for hand_landmarks in result.multi_hand_landmarks:

                    for i in range(len(hand_landmarks.landmark)):
                        # print(hand_landmarks.landmark[i])
                        x = hand_landmarks.landmark[i].x
                        y = hand_landmarks.landmark[i].y

                        data_aux.append(x)
                        data_aux.append(y)
                if (len(data_aux) == 42):
                    data.append(data_aux)
                    labels.append(dir_)

            # Display the image
#             plt.figure()
#             plt.imshow(img_rgb)

# plt.show()
f = open('data.pickle', 'wb')
pickle.dump({'data':data, 'labels':labels}, f)
f.close()