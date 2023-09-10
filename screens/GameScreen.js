import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";

const GameScreen = () => {
  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
  },
});
