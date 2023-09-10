import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/color";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputHandler = (inputNumber) => {
    setEnteredNumber(inputNumber);
  };

  const inputConfirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Input number has to be Between 0 and 99", [
        { text: "Ok", style: "destructive", onPress: inputResetHandler },
      ]);
    }

    onPickNumber(chosenNumber);
  };

  const inputResetHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.startContainer}>
      <TextInput
        value={enteredNumber}
        onChangeText={inputHandler}
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={inputResetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={inputConfirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    backgroundColor: Colors.primary500,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 8,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
