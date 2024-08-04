import os

def rename_png_files():
    # Get the current directory
    current_directory = os.getcwd()

    # Iterate over all files in the current directory
    for filename in os.listdir(current_directory):
        # Check if the file is a PNG file
        if filename.endswith('.png'):
            # Remove the first 4 characters from the file name
            new_filename = filename[4:]
            
            # Construct full file paths
            old_file = os.path.join(current_directory, filename)
            new_file = os.path.join(current_directory, new_filename)
            
            # Rename the file
            os.rename(old_file, new_file)
            print(f'Renamed: {filename} -> {new_filename}')

if __name__ == "__main__":
    rename_png_files()
