// // import React from "react";
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   StyleSheet,
// //   TouchableOpacity,
// // } from "react-native";
// // import { Stack, useRouter } from "expo-router";
// // import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
// // import { LinearGradient } from "expo-linear-gradient";
// // import * as Animatable from "react-native-animatable";

// // const About = () => {
// //   const router = useRouter();

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Stack.Screen
// //         options={{
// //           title: "About Our App",
// //           headerTintColor: "#FFFFFF", // Text and icon color
// //           headerStyle: {
// //             backgroundColor: "#457B9D", // Navigation bar background color
// //           },
// //           navigationBarColor: "#457B9D", // For Android navbar color
// //         }}
// //       />

// //       <Text style={styles.heading}>Welcome to SignTalk</Text>
// //       <Text style={styles.paragraph}>
// //         Your go-to resource for learning and understanding American Sign
// //         Language (ASL). Our app bridges the communication gap between deaf
// //         individuals and those unfamiliar with sign language.
// //       </Text>

// //       <Text style={styles.subheading}>What We Offer:</Text>

// //       {/* Features List with Animations */}
// //       <Animatable.View
// //         animation="fadeInUp"
// //         delay={100}
// //         style={styles.featureCard}
// //       >
// //         <FontAwesome5 name="book" size={24} color="#457B9D" />
// //         <Text style={styles.featureTitle}>Comprehensive ASL Dictionary</Text>
// //         <Text style={styles.featureText}>
// //           Explore an extensive library of ASL vocabulary with clear text
// //           descriptions, images, and video demonstrations.
// //         </Text>
// //       </Animatable.View>

// //       <Animatable.View
// //         animation="fadeInUp"
// //         delay={200}
// //         style={styles.featureCard}
// //       >
// //         <MaterialIcons name="translate" size={24} color="#457B9D" />
// //         <Text style={styles.featureTitle}>Real-Time ASL Translation</Text>
// //         <Text style={styles.featureText}>
// //           Instantly translate finger-spelled signs using our real-time alphabet
// //           translation feature.
// //         </Text>
// //       </Animatable.View>

// //       <Animatable.View
// //         animation="fadeInUp"
// //         delay={300}
// //         style={styles.featureCard}
// //       >
// //         <FontAwesome5 name="video" size={24} color="#457B9D" />
// //         <Text style={styles.featureTitle}>Interactive Media</Text>
// //         <Text style={styles.featureText}>
// //           Watch engaging videos and images that demonstrate proper sign
// //           execution.
// //         </Text>
// //       </Animatable.View>

// //       <Animatable.View
// //         animation="fadeInUp"
// //         delay={400}
// //         style={styles.featureCard}
// //       >
// //         <FontAwesome5 name="hands-helping" size={24} color="#457B9D" />
// //         <Text style={styles.featureTitle}>Inclusive Communication</Text>
// //         <Text style={styles.featureText}>
// //           Foster better communication between the deaf community and those who
// //           don’t know ASL.
// //         </Text>
// //       </Animatable.View>

// //       {/* Call-to-Action Button with Gradient */}
// //       {/* <TouchableOpacity onPress={() => router.push("/home")}>
// //         <LinearGradient colors={["#E63946", "#F1FAEE"]} style={styles.button}>
// //           <Text style={styles.buttonText}>Get Started</Text>
// //         </LinearGradient>
// //       </TouchableOpacity> */}
// //       <View style={{ height: 50 }} />
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: "#F1FAEE",
// //   },
// //   heading: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     color: "#1D3557",
// //     marginBottom: 10,
// //   },
// //   subheading: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "#1D3557",
// //     marginVertical: 10,
// //   },
// //   paragraph: {
// //     fontSize: 16,
// //     color: "#457B9D",
// //     marginBottom: 10,
// //   },
// //   featureCard: {
// //     backgroundColor: "#A8DADC",
// //     padding: 15,
// //     borderRadius: 12,
// //     marginBottom: 10,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 5, // For Android
// //   },
// //   featureTitle: {
// //     fontSize: 18,
// //     fontWeight: "600",
// //     marginTop: 5,
// //   },
// //   featureText: {
// //     fontSize: 14,
// //     marginTop: 5,
// //   },
// //   button: {
// //     padding: 15,
// //     borderRadius: 12,
// //     alignItems: "center",
// //     marginVertical: 20,
// //   },
// //   buttonText: {
// //     color: "#FFF",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// // });

// // export default About;

// import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
// import React, { useState } from "react";
// import Animated, { FadeInUp } from "react-native-reanimated";

// export default function ReportIssue() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = () => {
//     if (!name || !email || !description) {
//       Alert.alert("Error", "Please fill all fields.");
//       return;
//     }
//     Alert.alert("Thank You", "Your issue has been reported!");
//     // Clear the form
//     setName("");
//     setEmail("");
//     setDescription("");
//   };

//   return (
//     <Animated.View style={styles.container} entering={FadeInUp.duration(500)}>
//       <Text style={styles.header}>Report an Issue</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Your Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       <TextInput
//         style={[styles.input, styles.textArea]}
//         placeholder="Describe the issue..."
//         value={description}
//         onChangeText={setDescription}
//         multiline
//       />

//       <Pressable style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </Pressable>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#F1FAEE",
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#1D3557",
//     textAlign: "center",
//   },
//   input: {
//     backgroundColor: "#A8DADC",
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   textArea: {
//     height: 120,
//     textAlignVertical: "top",
//   },
//   button: {
//     backgroundColor: "#457B9D",
//     paddingVertical: 15,
//     borderRadius: 12,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: {
//     color: "#F1FAEE",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

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
