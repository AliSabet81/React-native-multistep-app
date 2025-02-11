import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const personalInfo = {
  fullName: "Joe do",
  address: "Address",
  city: "City",
  postcode: "1234",
  phone: "601234123123",
  country: "US",
};

const paymentInfo = {
  cardNumber: "1234123412341234",
  expireDate: "01/23",
  cvv: 123,
};

const ConfirmForm = () => {
  const onNext = () => {
    // the data is Valid

    // redirect next
    router.dismissAll();
    router.back();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{ gap: 10, flex: 1 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={"/checkout"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value?.toString()}
              </Text>
            ))}
          </View>
        )}

        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={"/checkout/payment"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value?.toString()}
              </Text>
            ))}
          </View>
        )}

        <CustomButton title="Submit" onPress={onNext} style={styles.button} />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default ConfirmForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  button: {
    marginTop: "auto",
  },
});
