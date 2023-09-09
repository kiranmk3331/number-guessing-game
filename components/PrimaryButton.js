import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.pressableContainer}
        android_ripple={{ color: "#710b0b" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressableContainer: {
    backgroundColor: "#d42727",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
