import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { Controller, useForm } from "react-hook-form";
import Spinner from "../globals/Spinner";

const screenWidth = Dimensions.get("window").width;

const screenHeight = Dimensions.get("window").height;

interface user {
  name: string;
  username: string;
  housingInfo: {
    unitNumber?: number;
    address: string;
    rent: number;
    paid: number;
  };
}

function Home({ navigation }: any) {
  const dummyUser: user = {
    name: "Nathan",
    username: "Coolname",
    housingInfo: {
      unitNumber: 12,
      address: "1234 Example Ave",
      rent: 1000,
      paid: 1000,
    },
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.headerContainer}>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: screenWidth * 0.125,
              height: screenWidth * 0.125,
              marginLeft: screenWidth * 0.325,
            }}
            source={require("../../assets/iconMain.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Pressable>
            <Text>Account</Text>
          </Pressable>
        </View>
      </View>
      <View style={homeStyles.mainContainer}>
        {/* <NoUnitCta /> */}
        <UserHomePage {...dummyUser} />
      </View>
      <View style={homeStyles.footerContainer}></View>
    </View>
  );
}

const NoUnitCta = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: {
      unitCode: "",
    },
  });

  const clearError = () => {
    if (errors.unitCode) errors.unitCode.type = "";
  };

  const onSubmit = (data: any) => {
    console.log(isSubmitting);
  };

  return (
    <View style={homeStyles.joinUnitCta}>
      {isSubmitted == false ? (
        <View>
          <Text
            style={{
              textAlign: "center",
              width: screenWidth - 100,
              fontSize: 26,
              fontWeight: "700",
              marginBottom: screenHeight * 0.01,
            }}
          >
            Join a Unit!
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: screenWidth - 100,
              fontSize: 14,
              fontWeight: "400",
              marginBottom: screenHeight * 0.01,
            }}
          >
            You currently arent apart of a unit, enter your unit code to join
            your unit
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: screenHeight * 0.01,
            }}
          >
            Code:
          </Text>
          <View style={homeStyles.formContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onFocus={clearError}
                  style={{
                    ...homeStyles.formInput,
                    borderColor:
                      errors.unitCode?.type === "required"
                        ? "red"
                        : stylesUtil.mainWhite,
                    borderBottomColor:
                      errors.unitCode?.type === "required" ? "red" : "black",
                  }}
                  value={value}
                  placeholder="Join code"
                />
              )}
              name={"unitCode"}
            />
            <View style={homeStyles.formErrorContainer}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "red",
                }}
              >
                {errors.unitCode?.type === "required"
                  ? "This field is required"
                  : ""}
              </Text>
            </View>
            <Pressable
              style={homeStyles.joinUnitButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text
                style={{
                  color: stylesUtil.mainWhite,
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Join
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Spinner color={stylesUtil.mainColor} />
      )}
    </View>
  );
};

const UserHomePage = (user: user) => {
  const rentalInfo = user.housingInfo;

  return (
    <View style={homeStyles.userPageContainer}>
      <View style={homeStyles.userGreeting}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Welcome, {user.name}!
        </Text>
        <Text>
          Unit: {rentalInfo.unitNumber} at {rentalInfo.address}
        </Text>
      </View>

      <View style={homeStyles.userPaymentInfoContainer}>
        <Text>Your currently rent: {rentalInfo.rent}</Text>
        <Text>You've paid: {rentalInfo.paid}</Text>
        <View
          style={{
            flexDirection: "column",
            marginHorizontal: screenWidth * 0.02,
            rowGap: screenHeight * 0.02,
          }}
        >
          {/*Added rendering of all current unapid charges here*/}
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: screenWidth * 0.05,
              paddingVertical: screenHeight * 0.02,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flex: 1,
                marginLeft: screenWidth * 0.02,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                }}
              >
                Date
              </Text>
              <Text>Reason for charge</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                marginLeft: screenWidth * 0.02,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10,
                  }}
                >
                  {""}
                </Text>
                <Text>${"1100"}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: screenWidth * 0.05,
              paddingVertical: screenHeight * 0.02,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flex: 1,
                marginLeft: screenWidth * 0.02,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                }}
              >
                Date
              </Text>
              <Text>Reason for charge</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                marginLeft: screenWidth * 0.02,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10,
                  }}
                >
                  {""}
                </Text>
                <Text>${"1100"}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: screenWidth * 0.05,
              paddingVertical: screenHeight * 0.02,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flex: 1,
                marginLeft: screenWidth * 0.02,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                }}
              >
                Date
              </Text>
              <Text>Reason for charge</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                marginLeft: screenWidth * 0.02,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10,
                  }}
                >
                  {""}
                </Text>
                <Text>${"1100"}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: screenHeight * 0.015,
          }}
        >
          <Pressable
            style={
              rentalInfo.rent - rentalInfo.paid !== 0
                ? homeStyles.userPaymentNeedPaymentButton
                : homeStyles.userPaymentAllPaidButton
            }
          >
            <Text
              style={{
                color:
                  rentalInfo.rent - rentalInfo.paid !== 0
                    ? stylesUtil.mainWhite
                    : "black",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {rentalInfo.rent - rentalInfo.paid !== 0
                ? "Make Payment"
                : "All caught up!"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: screenHeight * 0.05,
    marginHorizontal: screenWidth * 0.02,
  },
  mainContainer: {
    flex: 12,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
  },
  joinUnitCta: {
    flexDirection: "column",
    justifyContent: "center",
  },
  formContainer: {
    alignItems: "center",
  },
  formInput: {
    borderWidth: 1,
    borderBottomColor: "black",
    borderColor: stylesUtil.mainWhite,
    marginHorizontal: 10,
    width: screenWidth - 120,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 4,
    fontSize: 18,
  },
  formErrorContainer: {
    width: screenWidth - 120,
    height: screenHeight * 0.02,
    marginLeft: screenWidth * 0.05,
    marginVertical: -4,
  },
  joinUnitButton: {
    backgroundColor: stylesUtil.mainColor,
    alignItems: "center",
    justifyContent: "center",
    marginTop: screenHeight * 0.005,
    width: screenWidth - 250,
    height: screenHeight * 0.045,
    borderRadius: 15,
  },
  spinnerContainer: {
    justifyContent: "center",
  },
  //User Styles
  userPageContainer: {
    flex: 1,
  },
  userGreeting: {
    width: screenWidth,
    marginHorizontal: screenWidth * 0.02,
  },
  userPaymentInfoContainer: {
    borderWidth: 1,
    marginHorizontal: screenWidth * 0.02,
  },
  userPaymentNeedPaymentButton: {
    width: screenWidth * 0.45,
    backgroundColor: stylesUtil.mainColor,
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: screenHeight * 0.02,
    borderRadius: 10,
    alignItems: "center",
  },
  userPaymentAllPaidButton: {
    width: screenWidth * 0.45,
    backgroundColor: "lightgreen",
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: screenHeight * 0.02,
    borderRadius: 10,
    alignItems: "center",
  },
  footerContainer: {
    flex: 1.5,
    borderWidth: 1,
  },
});

export default Home;
