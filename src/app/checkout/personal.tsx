import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import {
  PersonalInfo,
  PersonalInfoSchema,
  useCheckoutForm,
} from "../../contexts/CheckoutFormProvider";
import countries from "../../../assets/countries.json";
import CustomButton from "../../components/CustomButton";
import CustomPicker from "../../components/CustomPicker";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const PersonalDetailsForm = () => {
  const { setPersonalInfo, personalInfo } = useCheckoutForm();

  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo,
  });

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    setPersonalInfo(data);

    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
          label="Full name"
          placeholder="Joe do"
        />

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

        <CustomPicker
          name="country"
          label="Country"
          placeholder={{ label: "Select country" }}
          items={countries.map((country) => ({
            label: country.name,
            value: country.code,
          }))}
        />

        <CustomButton
          title="Next"
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};
export default PersonalDetailsForm;

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});
