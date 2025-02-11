import * as z from "zod";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export const PaymentInfoSchema = z.object({
  cardNumber: z.string().length(16),
  expireDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Please use the MM/YY format"),
  cvv: z.coerce.number().min(100).max(999),
});
export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

const PaymentDetailsForm = () => {
  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const onNext: SubmitHandler<PaymentInfo> = () => {
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          label="Card number"
          placeholder="1234123141234123"
        />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expireDate"
            label="Expire date"
            placeholder="01/23"
            containerStyle={{ flex: 1 }}
          />

          <CustomTextInput
            name="cvv"
            label="Cvv"
            placeholder="123"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <CustomButton
          title="Next"
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};
export default PaymentDetailsForm;

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});
