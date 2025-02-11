import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";

import CustomButton from "../../components/CustomButton";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const PaymentDetailsForm = () => {
  const onNext = () => {
    // the data is Valid

    // redirect next
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Payment Details</Text>
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </KeyboardAwareScrollView>
  );
};
export default PaymentDetailsForm;

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
