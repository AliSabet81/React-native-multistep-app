import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const PersonalDetailsForm = () => {
  const onNext = () => {
    // the data is Valid

    // redirect next
    router.push("/checkout/payment");
  };

  return (
    <View style={styles.container}>
      <Text>PersonalDetailsForm</Text>
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
};
export default PersonalDetailsForm;

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
