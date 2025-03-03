from flask import Flask, request, jsonify, send_from_directory
import os

app = Flask(__name__)

# Path to your ASL video library
ASL_LIBRARY_PATH = "/Users/nithishasathishkumar/SignTalk/SignTalkApp/ASL_Library"

@app.route('/search', methods=['GET'])
def search_video():
    # Get the search query from the request
    query = request.args.get('query', '').lower()
    print("Search query received:", query)

    # Search for matching videos
    results = []
    for root, dirs, files in os.walk(ASL_LIBRARY_PATH):
        for file in files:
            print("Checking file:", file)
            if query in file.lower() and file.endswith('.mp4'):
                print("Match found:", file)
                results.append({
                    "name": file,
                    "path": os.path.relpath(os.path.join(root, file), ASL_LIBRARY_PATH)
                })

    print("Results:", results)
    return jsonify(results)

@app.route('/video/<path:filename>', methods=['GET'])
def get_video(filename):
    file_path = os.path.join(ASL_LIBRARY_PATH, filename)
    print("Requested file path:", file_path)
    if os.path.exists(file_path):
        return send_from_directory(ASL_LIBRARY_PATH, filename)
    else:
        print("File not found:", file_path)
        return "File not found", 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)


