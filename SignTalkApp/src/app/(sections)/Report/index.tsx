import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/Users/nithishasathishkumar/SignTalk/SignTalkApp/firebase"; // Ensure the path is correct for your project

export default function ReportIssue() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !description) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "reportedIssues"), {
        name,
        email,
        description,
        timestamp: new Date(),
      });

      Alert.alert("Thank You", "Your issue has been reported!");
      setName("");
      setEmail("");
      setDescription("");
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert(
        "Error",
        "Could not report the issue. Please try again later."
      );
    }
  };

  return (
    <Animated.View style={styles.container} entering={FadeInUp.duration(500)}>
      <Text style={styles.header}>Report an Issue</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#1D3557"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#1D3557"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe the issue..."
        placeholderTextColor="#1D3557"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F1FAEE",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1D3557",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#A8DADC",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    color: "#1D3557",
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#457B9D",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#F1FAEE",
    fontSize: 18,
    fontWeight: "bold",
  },
});
