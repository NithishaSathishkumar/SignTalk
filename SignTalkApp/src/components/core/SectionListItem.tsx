import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";
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
    backgroundColor: "#f5cac3",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f28482",
    borderRadius: 18,
  },

  text: {
    color: "#242423",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Inter",
  },
});
