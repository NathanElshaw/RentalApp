import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../globals/Header";
import Footer from "../globals/Footer";
import stylesUtil from "../../styling/MainStyles";
import { useState } from "react";

// payment due, balance, custom

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const tempBalance: number = 1250;

function PaymentPage({ navigation }: any) {
  const [payType, setPayType] = useState<number>(0);

  return (
    <View style={paymentPage.container}>
      <Header />
      <View style={paymentPage.mainContainer}>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Text>Payment Options:</Text>
          <View
            style={{
              alignItems: "center",
              rowGap: 10,
            }}
          >
            <Pressable
              onPress={() => {
                setPayType(1);
              }}
              style={{
                ...paymentPage.paymentTypeItem,
                borderColor: payType === 1 ? stylesUtil.mainColor : "black",
                borderWidth: payType === 1 ? 3 : 1,
              }}
            >
              <Text>Amount due</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setPayType(2);
              }}
              style={{
                ...paymentPage.paymentTypeItem,
                borderColor: payType === 2 ? stylesUtil.mainColor : "black",
                borderWidth: payType === 2 ? 3 : 1,
              }}
            >
              <Text>Minimum payment</Text>
              <Text>${tempBalance * 0.31}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setPayType(3);
              }}
              style={{
                ...paymentPage.paymentTypeItem,
                borderColor: payType === 3 ? stylesUtil.mainColor : "black",
                borderWidth: payType === 3 ? 3 : 1,
              }}
            >
              <Text>Total balance</Text>
              <Text>${tempBalance}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setPayType(4);
              }}
              style={{
                ...paymentPage.paymentTypeItem,
                borderColor: payType === 4 ? stylesUtil.mainColor : "black",
                borderWidth: payType === 4 ? 3 : 1,
              }}
            >
              <Text>Custom amount</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: stylesUtil.mainWhite,
                  borderBottomColor: "black",
                  borderRadius: 5,
                }}
                autoFocus={payType === 4 ? true : false}
                editable={payType === 4 ? true : false}
              />
            </Pressable>
          </View>
          <Pressable>
            <Text>Make payment</Text>
          </Pressable>
        </View>
      </View>
      <Footer />
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

  paymentTypeItem: {
    borderRadius: 10,
    borderWidth: 1,
    width: screenWidth * 0.75,
    height: screenHeight * 0.08,
  },
});
