import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Video from "react-native-video";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchVideos = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `http://192.168.12.184:5001/search?query=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setQuery(""); // Clear search when tab closes
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="🔎 Search for a sign..."
        placeholderTextColor="#aaa"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchVideos}
      />

      {/* Loading Indicator */}
      {loading && <ActivityIndicator size="large" color="#f05454" />}

      {/* Search Results List */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.resultItem}
            onPress={() => setSelectedVideo(item.path)}
          >
            <Text style={styles.resultText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          !loading && <Text style={styles.noResultsText}>No results found</Text>
        }
      />

      {/* Video Player */}
      {selectedVideo && (
        <View style={styles.videoOverlay}>
          <Video
            source={{
              uri: `http://192.168.12.184:5001/video/${selectedVideo}`,
            }}
            style={styles.videoPlayer}
            controls={true}
            resizeMode="contain"
            repeat
            onError={(error) => console.error("Video Error:", error)}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedVideo(null)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  searchBar: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    marginBottom: 16,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultItem: {
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultText: {
    fontSize: 16,
    color: "#333333",
  },
  noResultsText: {
    marginTop: 16,
    textAlign: "center",
    color: "#999999",
    fontSize: 14,
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  videoPlayer: {
    width: "90%",
    height: 300,
    backgroundColor: "#000000",
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#f05454",
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;
