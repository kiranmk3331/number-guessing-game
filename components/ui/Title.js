import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
