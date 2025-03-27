import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: "About Our App",
          headerTintColor: "#FFFFFF", // Text and icon color
          headerStyle: {
            backgroundColor: "#457B9D", // Navigation bar background color
          },
          navigationBarColor: "#457B9D", // For Android navbar color
        }}
      />

      <Text style={styles.heading}>Welcome to SignTalk</Text>
      <Text style={styles.paragraph}>
        Your go-to resource for learning and understanding American Sign
        Language (ASL). Our app bridges the communication gap between deaf
        individuals and those unfamiliar with sign language.
      </Text>

      <Text style={styles.subheading}>What We Offer:</Text>

      {/* Features List with Animations */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={styles.featureCard}
      >
        <FontAwesome5 name="book" size={24} color="#457B9D" />
        <Text style={styles.featureTitle}>Comprehensive ASL Dictionary</Text>
        <Text style={styles.featureText}>
          Explore an extensive library of ASL vocabulary with clear text
          descriptions, images, and video demonstrations.
        </Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={200}
        style={styles.featureCard}
      >
        <MaterialIcons name="translate" size={24} color="#457B9D" />
        <Text style={styles.featureTitle}>Real-Time ASL Translation</Text>
        <Text style={styles.featureText}>
          Instantly translate finger-spelled signs using our real-time alphabet
          translation feature.
        </Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={300}
        style={styles.featureCard}
      >
        <FontAwesome5 name="video" size={24} color="#457B9D" />
        <Text style={styles.featureTitle}>Interactive Media</Text>
        <Text style={styles.featureText}>
          Watch engaging videos and images that demonstrate proper sign
          execution.
        </Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={400}
        style={styles.featureCard}
      >
        <FontAwesome5 name="hands-helping" size={24} color="#457B9D" />
        <Text style={styles.featureTitle}>Inclusive Communication</Text>
        <Text style={styles.featureText}>
          Foster better communication between the deaf community and those who
          don’t know ASL.
        </Text>
      </Animatable.View>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F1FAEE",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1D3557",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1D3557",
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#457B9D",
    marginBottom: 10,
  },
  featureCard: {
    backgroundColor: "#A8DADC",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },
  featureText: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default About;
