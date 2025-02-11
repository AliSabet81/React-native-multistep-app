import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";

import CustomButton from "../../components/CustomButton";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const ConfirmForm = () => {
  const onNext = () => {
    // the data is Valid

    // redirect next
    router.dismissAll();
    router.back();
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Confirm form</Text>
      <CustomButton title="Submit" onPress={onNext} style={styles.button} />
    </KeyboardAwareScrollView>
  );
};
export default ConfirmForm;

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
