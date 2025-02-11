import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const PaymentDetailsForm = () => {
  const onNext = () => {
    // the data is Valid

    // redirect next
    router.push("/checkout/confirm");
  };

  return (
    <View style={styles.container}>
      <Text>Payment Details</Text>
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
};
export default PaymentDetailsForm;

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
