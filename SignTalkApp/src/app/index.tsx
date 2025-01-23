// "main": "index.ts",
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

import SectionListItem from "../components/core/SectionListItem";

const sections = [
  { id: "about", name: "About" },
  { id: "rtt", name: "Real-Time Translation" },
  { id: "3", name: "Section 3" },
  { id: "4", name: "Section 4" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.appTitle}>
        <Text style={styles.titleText}>SignTalk</Text>
      </View> */}

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
    backgroundColor: "#fff",
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
    // borderRadius: 60,
    padding: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f28482",
  },

  titleText: {
    fontSize: 60,
  },
});
