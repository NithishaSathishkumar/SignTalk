// import React, { useState } from "react";
// import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
// import Video from "react-native-video";

// const App = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const searchVideos = async () => {
//     try {
//       console.log("Search query:", query); // Log query
//       const response = await fetch(
//         `http://192.168.12.184:5001/search?query=${query}`
//       );
//       console.log("Response status:", response.status); // Log status
//       const data = await response.json();
//       console.log("Response data:", data); // Log data
//       setResults(data);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search for a sign..."
//         value={query}
//         onChangeText={setQuery}
//         onSubmitEditing={searchVideos}
//       />
//       <FlatList
//         data={results}
//         keyExtractor={(item) => item.path}
//         renderItem={({ item }) => (
//           <Text
//             style={styles.resultItem}
//             onPress={() => setSelectedVideo(item.path)}
//           >
//             {item.name}
//           </Text>
//         )}
//       />
//       {selectedVideo && (
//         <Video
//           source={{ uri: `http://192.168.12.184:5001/video/${selectedVideo}` }}
//           style={styles.videoPlayer}
//           controls={true}
//           onError={(error) => console.error("Video Error:", error)}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
//   resultItem: {
//     padding: 8,
//     fontSize: 16,
//   },
//   videoPlayer: {
//     width: "100%",
//     height: 300,
//   },
// });

// export default App;

import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Video from "react-native-video";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchVideos = async () => {
    try {
      console.log("Search query:", query);
      const response = await fetch(
        `http://192.168.12.184:5001/search?query=${query}`
      );
      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);
      setResults(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="🔎 Search for a sign..."
        placeholderTextColor="gray"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchVideos}
      />
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
          <Text style={styles.noResultsText}>No results found</Text>
        }
      />
      {/* Video Player */}
      {selectedVideo && (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: `http://192.168.12.184:5001/video/${selectedVideo}` }}
            style={styles.videoPlayer}
            controls={true}
            resizeMode="contain"
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    marginBottom: 16,
    fontSize: 16,
  },
  resultItem: {
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    marginBottom: 8,
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
  videoContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  videoPlayer: {
    width: "100%",
    height: 300,
    backgroundColor: "#000000",
    borderRadius: 8,
  },
  closeButton: {
    marginTop: 8,
    padding: 10,
    backgroundColor: "#f05454",
    borderRadius: 6,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default App;

