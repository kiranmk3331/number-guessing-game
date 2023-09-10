import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/color";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.pressableContainer}
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
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
    backgroundColor: Colors.primary400,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
