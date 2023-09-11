import { StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

export default function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    backgroundColor: Colors.primary500,
    padding: 16,
    borderRadius: 8,
    elevation: 8,
  },
});
