# import os
# import pickle
# import mediapipe as mp
# import cv2
# import matplotlib.pyplot as plt

# mp_hands = mp.solutions.hands
# mp_drawing = mp.solutions.drawing_utils
# mp_drawing_styles = mp.solutions.drawing_styles

# hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.6)

# DATA_DIR = 'SignTalkApp/data'

# data = []
# labels = []
# for dir_ in os.listdir(DATA_DIR):
#     for img_path in os.listdir(os.path.join(DATA_DIR, dir_)):
#         data_aux = []

#         x_ = []
#         y_ = []

#         img = cv2.imread(os.path.join(DATA_DIR, dir_, img_path))
#         img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

#         results = hands.process(img_rgb)
#         if results.multi_hand_landmarks:
#             for hand_landmarks in results.multi_hand_landmarks:
#                 for i in range(len(hand_landmarks.landmark)):
#                     x = hand_landmarks.landmark[i].x
#                     y = hand_landmarks.landmark[i].y

#                     x_.append(x)
#                     y_.append(y)

#                 print("Length of x_:", len(x_))
#                 print("Length of y_:", len(y_))

#                 for i in range(len(hand_landmarks.landmark)):
#                     x = hand_landmarks.landmark[i].x
#                     y = hand_landmarks.landmark[i].y
#                     data_aux.append(x - min(x_))
#                     data_aux.append(y - min(y_))

#             data.append(data_aux)
#             labels.append(dir_)

# f = open('SignTalkApp/data.pickle', 'wb')
# pickle.dump({'data': data, 'labels': labels}, f)
# f.close()

import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load data from the pickle file
data_dict = pickle.load(open('SignTalkApp/data.pickle', 'rb'))

# Extract data and labels
data = np.asarray(data_dict['data'])
labels = np.asarray(data_dict['labels'])

# Check the distribution of labels
unique_labels, counts = np.unique(labels, return_counts=True)
print("Label distribution before:", dict(zip(unique_labels, counts)))

# Remove samples with labels that have fewer than 2 samples
min_samples = 2
indices_to_keep = [i for i, label in enumerate(labels) if counts[unique_labels.tolist().index(label)] >= min_samples]

data = data[indices_to_keep]
labels = labels[indices_to_keep]

# Flatten the data and ensure landmarks are structured as arrays
data_flattened = []
for d in data:
    flattened_landmarks = np.concatenate([landmark.reshape(-1) for landmark in d])
    data_flattened.append(flattened_landmarks)

# Convert the flattened data to a numpy array
data_flattened = np.array(data_flattened)

# Split data into training and testing sets
x_train, x_test, y_train, y_test = train_test_split(data_flattened, labels, test_size=0.2, shuffle=True, stratify=labels)

# Initialize the RandomForestClassifier
model = RandomForestClassifier()

# Train the model
model.fit(x_train, y_train)

# Make predictions
y_predict = model.predict(x_test)

# Calculate accuracy
score = accuracy_score(y_predict, y_test)

print('{}% of samples were classified correctly!'.format(score * 100))

# Save the trained model
with open('SignTalkApp/model.p', 'wb') as f:
    pickle.dump({'model': model}, f)
