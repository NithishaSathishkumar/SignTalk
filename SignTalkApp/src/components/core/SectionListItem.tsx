import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";

type SectionListItem = {
  id: string;
  name: string;
};

export default function SectionListItem({ id, name }: SectionListItem) {
  return (
    <Link href={`/${id}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#A8DADC",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#F1FAEE",
    borderRadius: 18,
  },

  text: {
    color: "#242423",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Inter",
  },
});
