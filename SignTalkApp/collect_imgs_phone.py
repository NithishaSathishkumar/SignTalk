import os
import cv2

# Directory containing the photos
PHOTO_DIR = 'SignTalkApp/photos'  # Directory where your photos are stored
DATA_DIR = 'SignTalkApp/data'     # Directory to save the processed dataset

# Ensure the data directory exists
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

number_of_classes = 26  # Number of classes (e.g., hand signs)
dataset_size = 180    # Number of images per class

# Loop through each class
for j in range(number_of_classes):
    class_dir = os.path.join(DATA_DIR, str(j))
    if not os.path.exists(class_dir):
        os.makedirs(class_dir)

    print(f'Processing photos for class {j}')

    # Assuming photos for each class are stored in separate subdirectories
    photo_class_dir = os.path.join(PHOTO_DIR, str(j))
    if not os.path.exists(photo_class_dir):
        print(f"No photos found for class {j} in {photo_class_dir}")
        continue

    # List all photos in the class directory
    photo_files = [f for f in os.listdir(photo_class_dir) if f.endswith(('.jpg', '.png', '.jpeg', '.JPG'))]
    if len(photo_files) < dataset_size:
        print(f"Not enough photos for class {j}. Found {len(photo_files)}, required {dataset_size}.")
        continue

    # Process each photo
    counter = 0
    for photo_file in photo_files[:dataset_size]:  # Use only the first `dataset_size` photos
        photo_path = os.path.join(photo_class_dir, photo_file)
        frame = cv2.imread(photo_path)

        if frame is None:
            print(f"Failed to read image: {photo_path}")
            continue

        print(f"Processing photo: {photo_path} | Shape: {frame.shape}")

        # Save the processed image to the dataset directory
        output_path = os.path.join(class_dir, f'{counter}.jpg')
        cv2.imwrite(output_path, frame)
        counter += 1

print("Dataset creation complete!")

# import os
# import cv2

# # Directory containing the photos
# PHOTO_DIR = 'SignTalkApp/photos'  # Directory where your photos are stored
# DATA_DIR = 'SignTalkApp/data1'    # Directory to save the processed dataset

# # Ensure the data directory exists
# if not os.path.exists(DATA_DIR):
#     os.makedirs(DATA_DIR)

# number_of_classes = 25  # Number of classes (e.g., hand signs)
# dataset_size = 10      # Number of images per class

# # Target image size
# target_size = (224, 224)  # Resize images to 224x224

# # Loop through each class
# for j in range(number_of_classes):
#     class_dir = os.path.join(DATA_DIR, str(j))
#     if not os.path.exists(class_dir):
#         os.makedirs(class_dir)

#     print(f'Processing photos for class {j}')

#     # Assuming photos for each class are stored in separate subdirectories
#     photo_class_dir = os.path.join(PHOTO_DIR, str(j))
#     if not os.path.exists(photo_class_dir):
#         print(f"No photos found for class {j} in {photo_class_dir}")
#         continue

#     # Debug: Print the directory being searched
#     print(f"Looking for photos in: {photo_class_dir}")

#     # List all photos in the class directory
#     photo_files = [f for f in os.listdir(photo_class_dir) if f.endswith(('.jpg', '.png', '.jpeg', '.JPG'))]
#     print(f"Found photos: {photo_files}")

#     if len(photo_files) < dataset_size:
#         print(f"Not enough photos for class {j}. Found {len(photo_files)}, required {dataset_size}.")
#         continue

#     # Process each photo
#     counter = 0
#     for photo_file in photo_files[:dataset_size]:  # Use only the first `dataset_size` photos
#         photo_path = os.path.join(photo_class_dir, photo_file)
#         frame = cv2.imread(photo_path)

#         if frame is None:
#             print(f"Failed to read image: {photo_path}")
#             continue

#         # Resize the image
#         resized_frame = cv2.resize(frame, target_size)
#         print(f"Processing photo: {photo_path} | Original Shape: {frame.shape} | Resized Shape: {resized_frame.shape}")

#         # Save the resized image to the dataset directory
#         output_path = os.path.join(class_dir, f'{counter}.jpg')
#         cv2.imwrite(output_path, resized_frame)
#         counter += 1

# print("Dataset creation complete!")