import { ComponentProps } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";

type CustomTextInput = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
} & ComponentProps<typeof TextInput>;

export default function CustomTextInput({
  label,
  containerStyle,
  name,
  ...textInputProps
}: CustomTextInput) {
  const error = { message: "error" };
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={styles.error} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 5,

    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "crimson",
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },
  error: {
    color: "crimson",
    height: 17,
  },
});
