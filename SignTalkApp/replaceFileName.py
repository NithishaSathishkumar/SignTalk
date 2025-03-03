import os

# Path to the ASL video library
ASL_LIBRARY_PATH = "/Users/nithishasathishkumar/SignTalk/SignTalkApp/ASL_Library"

def rename_files_based_on_folder(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith('.mp4'):
                # Get the folder name
                folder_name = os.path.basename(root)
                
                # Construct the current file path
                current_file_path = os.path.join(root, file)
                
                # Construct the new file name and path
                new_file_name = f"{folder_name}.mp4"
                new_file_path = os.path.join(root, new_file_name)

                # Check if the new file name already exists to avoid overwriting
                if os.path.exists(new_file_path):
                    print(f"File {new_file_name} already exists in {root}. Skipping...")
                else:
                    # Rename the file
                    os.rename(current_file_path, new_file_path)
                    print(f"Renamed: {current_file_path} -> {new_file_path}")

# Run the function
rename_files_based_on_folder(ASL_LIBRARY_PATH)
