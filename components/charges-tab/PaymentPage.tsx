import { Pressable, StyleSheet, Text, View } from "react-native";
import Header from "../globals/Header";
import Footer from "../globals/Footer";
import stylesUtil from "../../styling/MainStyles";

// payment due, balance, custom

function PaymentPage({ navigation }: any) {
  return (
    <View style={paymentPage.container}>
      <Header />
      <View style={paymentPage.mainContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Back</Text>
        </Pressable>
        <Footer />
      </View>
    </View>
  );
}

export default PaymentPage;

const paymentPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
  },

  mainContainer: {
    flex: 12,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
  },
});
