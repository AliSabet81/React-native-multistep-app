import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";

const PersonalDetailsForm = () => {
  const onNext = () => {
    // the data is Valid

    // redirect next
    router.push("/checkout/payment");
  };

  return (
    <View style={styles.container}>
      <CustomTextInput name="fullName" label="Full name" placeholder="Joe do" />

      <CustomTextInput name="address" label="Address" placeholder="Address" />

      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          name="city"
          label="City"
          placeholder="City"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          name="postcode"
          label="Post code"
          placeholder="1234"
          containerStyle={{ flex: 1 }}
        />
      </View>

      <CustomTextInput
        name="phone"
        label="Phone number"
        placeholder="601234123123"
        inputMode="tel"
      />

      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
};
export default PersonalDetailsForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    gap: 5,
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
