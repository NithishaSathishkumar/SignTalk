import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function Tutorial() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to SignTalk! 👋</Text>
      <Text style={styles.subheader}>Let's get you started step by step.</Text>

      {/* Step 1: Set Up */}
      <Animated.View style={styles.stepCard} entering={FadeInUp.delay(100)}>
        <FontAwesome5 name="user-cog" size={24} color="#457B9D" />
        <Text style={styles.stepTitle}>1. Set Up Your Profile</Text>
        <Text style={styles.stepText}>
          Create your personal profile by adding your name, email, and
          preferences.
        </Text>
      </Animated.View>

      {/* Step 2: Learn Signs */}
      <Animated.View style={styles.stepCard} entering={FadeInUp.delay(200)}>
        <MaterialIcons name="school" size={24} color="#457B9D" />
        <Text style={styles.stepTitle}>2. Learn Basic Signs</Text>
        <Text style={styles.stepText}>
          Explore the ASL dictionary with videos and descriptions for each sign.
        </Text>
      </Animated.View>

      {/* Step 3: Real-Time Translation */}
      <Animated.View style={styles.stepCard} entering={FadeInUp.delay(300)}>
        <FontAwesome5 name="hands" size={24} color="#457B9D" />
        <Text style={styles.stepTitle}>3. Use Real-Time Translation</Text>
        <Text style={styles.stepText}>
          Use the camera feature to translate signs instantly into text or
          audio.
        </Text>
      </Animated.View>

      {/* Step 4: Practice Makes Perfect */}
      <Animated.View style={styles.stepCard} entering={FadeInUp.delay(400)}>
        <FontAwesome5 name="chalkboard-teacher" size={24} color="#457B9D" />
        <Text style={styles.stepTitle}>4. Practice and Test</Text>
        <Text style={styles.stepText}>
          Take quizzes and challenges to sharpen your skills and track your
          progress.
        </Text>
      </Animated.View>

      {/* Step 5: Community */}
      <Animated.View style={styles.stepCard} entering={FadeInUp.delay(500)}>
        <FontAwesome5 name="users" size={24} color="#457B9D" />
        <Text style={styles.stepTitle}>5. Connect with the Community</Text>
        <Text style={styles.stepText}>
          Join discussions, ask questions, and share your progress with others.
        </Text>
      </Animated.View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FAEE",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1D3557",
    textAlign: "center",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    color: "#457B9D",
    textAlign: "center",
    marginBottom: 20,
  },
  stepCard: {
    backgroundColor: "#A8DADC",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    color: "#1D3557",
  },
  stepText: {
    fontSize: 16,
    marginTop: 5,
    color: "#457B9D",
  },
  button: {
    backgroundColor: "#457B9D",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#F1FAEE",
    fontSize: 18,
    fontWeight: "bold",
  },
});
