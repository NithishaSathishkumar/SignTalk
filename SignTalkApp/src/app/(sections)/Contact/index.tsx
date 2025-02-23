import { View, Text, StyleSheet, Linking, Pressable } from "react-native";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";

export default function ContactUs() {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <Animated.View style={styles.container} entering={FadeInUp.duration(500)}>
      <Text style={styles.header}>Contact Us</Text>

      {/* Phone Call */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handlePress("tel:+1234567890")}
      >
        <FontAwesome name="phone" size={24} color="#1D3557" />
        <Text style={styles.contactText}>+1 (234) 567-890</Text>
      </Pressable>

      {/* Email */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handlePress("mailto:support@signtalk.com")}
      >
        <Entypo name="email" size={24} color="#1D3557" />
        <Text style={styles.contactText}>support@signtalk.com</Text>
      </Pressable>

      {/* Instagram */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handlePress("https://instagram.com/")}
      >
        <Entypo name="instagram" size={24} color="#1D3557" />
        <Text style={styles.contactText}>@signtalk</Text>
      </Pressable>

      {/* Facebook */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handlePress("https://facebook.com/")}
      >
        <Entypo name="facebook" size={24} color="#1D3557" />
        <Text style={styles.contactText}>SignTalk</Text>
      </Pressable>

      {/* Website */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handlePress("https://www.youtube.com")}
      >
        <MaterialIcons name="language" size={24} color="#1D3557" />
        <Text style={styles.contactText}>www.signtalk.com</Text>
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
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#A8DADC",
  },
  contactText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#1D3557",
  },
});
