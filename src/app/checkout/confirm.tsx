import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const ConfirmForm = () => {
  const onNext = () => {
    // the data is Valid

    // redirect next
    router.dismissAll();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Confirm form</Text>
      <CustomButton title="Submit" onPress={onNext} style={styles.button} />
    </View>
  );
};
export default ConfirmForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
