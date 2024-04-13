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

const tempBalance: number = 1250.0;

function PaymentPage({ navigation }: any) {
  const [payType, setPayType] = useState<number>(0);
  //Make this a popup
  return (
    <View style={paymentPage.container}>
      <Header navigation={navigation} />
      <View style={paymentPage.mainContainer}>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginVertical: screenHeight * 0.02,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Select a payment option:
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              rowGap: 15,
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
              <View
                style={{
                  marginHorizontal: screenWidth * 0.02,
                  marginTop: screenHeight * 0.005,
                }}
              >
                <Text>Amount due</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft: screenWidth * 0.01,
                  }}
                >
                  ${tempBalance * 0.75}
                </Text>
              </View>
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
              <View
                style={{
                  marginHorizontal: screenWidth * 0.02,
                  marginTop: screenHeight * 0.005,
                }}
              >
                <Text>Minimum payment:</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft: screenWidth * 0.01,
                  }}
                >
                  ${tempBalance * 0.31}
                </Text>
              </View>
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
              <View
                style={{
                  marginHorizontal: screenWidth * 0.02,
                  marginTop: screenHeight * 0.005,
                }}
              >
                <Text>Total balance:</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft: screenWidth * 0.01,
                  }}
                >
                  ${tempBalance}
                </Text>
              </View>
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
              <View
                style={{
                  marginHorizontal: screenWidth * 0.02,
                  marginTop: screenHeight * 0.005,
                }}
              >
                <Text>Custom amount</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: stylesUtil.mainWhite,
                    borderBottomColor: "black",
                    borderRadius: 5,
                    paddingHorizontal: screenWidth * 0.025,
                    fontSize: 16,
                    marginTop: screenHeight * 0.005,
                  }}
                  placeholder="$1000.00"
                  autoFocus={payType === 4 ? true : false}
                  editable={payType === 4 ? true : false}
                />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              alignItems: "center",
              marginVertical: screenHeight * 0.02,
            }}
          >
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "green",
                width: screenWidth * 0.7,
                height: screenHeight * 0.05,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: stylesUtil.mainWhite,
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Make payment
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Footer defaultIcon={2} navigation={navigation} />
    </View>
  );
}

export default PaymentPage;

const paymentPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
    zIndex: 1,
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
