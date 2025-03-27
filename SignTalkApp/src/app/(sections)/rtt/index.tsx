import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "../../../components/core/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

const description = `
### 📸 Real-Time ASL Translation
Our real-time translation feature allows you to:
- Use your camera to detect and translate American Sign Language (ASL) alphabet signs instantly.
- Receive live text translations of hand signs.
- Convert signs into audio for seamless communication.

### 💡 How It Works:
1. Open the camera using the button below.
2. Point your camera towards a hand showing an ASL sign.
3. Instantly see the translated letter or word on your screen.
4. Optionally, enable audio output for spoken translation.

### 🎯 Why Use This Feature?
- Facilitates better communication for non-ASL speakers.
- Helps ASL learners practice recognizing signs.
- A convenient tool for real-time conversations.
`;

const RTT = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <Stack.Screen
        options={{
          title: "Real-Time Translation Page",
          headerShown: false,
        }}
      />

      <Text style={styles.header}>Real-Time ASL Translation</Text>

      {/* Markdown description section */}
      <MarkdownDisplay>{description}</MarkdownDisplay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F1FAEE",
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    backgroundColor: "#F1FAEE",
    color: "#1D3557",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default RTT;
