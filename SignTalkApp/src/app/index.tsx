import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import SectionListItem from "../components/core/SectionListItem";

const sections = [
  { id: "about", name: "About Our App" },
  { id: "rtt", name: "Real-Time Translation" },
  { id: "ASL_Library", name: "ASL Library" },
  { id: "Tutorials", name: "Tutorials" },
  { id: "Contact", name: "Contact Us" },
  { id: "Report", name: "Report Issues" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* App Title */}
      {/* <View style={styles.appTitle}>
        <Text style={styles.titleText}>SignTalk</Text>
      </View> */}

      {/* Section Grid */}
      <FlatList
        data={sections}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => (
          <SectionListItem id={item.id} name={item.name} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FAEE", // Matches About Page background
    gap: 10,
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
    gap: 10,
  },

  appTitle: {
    flexDirection: "row",
    padding: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#457B9D", // Matches the navigation bar color
  },

  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#F1FAEE", // Light text for contrast
  },
});
