import { ComponentProps } from "react";
import { View, Text } from "react-native";
import { useController } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";

type CustomPicker = {
  name: string;
  label?: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;

const CustomPicker = ({ name, label, ...pickerProps }: CustomPicker) => {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={{ marginVertical: 4 }}>
      {label && (
        <Text
          style={{
            fontWeight: "600",
            color: "dimgray",
          }}
        >
          {label}
        </Text>
      )}
      <RNPickerSelect
        {...pickerProps}
        value={value}
        onValueChange={onChange}
        onClose={onBlur}
        style={{
          viewContainer: {
            marginTop: 4,
            marginBottom: 4,
          },
          inputIOS: {
            borderColor: error ? "crimson" : "gainsboro",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 5,
          },
        }}
      />
      <Text style={{ color: "crimson", height: 17 }} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
};
export default CustomPicker;
