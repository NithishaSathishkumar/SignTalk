import os
import cv2

# Directory to store the collected dataset
DATA_DIR = '/Users/nithishasathishkumar/SignTalk/src/data'

# Create the main dataset directory if it doesn't exist
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

# Parameters for dataset collection
number_of_classes = 3  # Number of classes to collect data for
dataset_size = 100  # Number of images per class

# Initialize webcam capture
# if the opencv is not opening the camera try 0, 1, or 2 
cap = cv2.VideoCapture(0) 

# Loop through the number of classes to collect data for each class
for j in range(number_of_classes):
    # Create a subdirectory for each class if it doesn't exist
    if not os.path.exists(os.path.join(DATA_DIR, str(j))):
        os.makedirs(os.path.join(DATA_DIR, str(j)))

    print('Collecting data for class {}'.format(j))

    # Wait for user readiness to start collecting data for the class
    while True:
        ret, frame = cap.read()
        cv2.putText(frame, 'Ready? Press "Q" ! :)', (100, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3,
                    cv2.LINE_AA)
        cv2.imshow('frame', frame)
        if cv2.waitKey(25) == ord('q'):  # Press 'Q' to begin collection
            break

    # Capture dataset_size number of images for the current class
    counter = 0
    while counter < dataset_size:
        ret, frame = cap.read()
        cv2.imshow('frame', frame)
        cv2.waitKey(25)
        
        # Save the captured frame in the respective class directory
        cv2.imwrite(os.path.join(DATA_DIR, str(j), '{}.jpg'.format(counter)), frame)
        counter += 1

# Release webcam and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()