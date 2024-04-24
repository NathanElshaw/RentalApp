import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { Controller, useForm } from "react-hook-form";
import Spinner from "../globals/Spinner";
import { useState } from "react";
import Footer from "../globals/Footer";
import Header from "../globals/Header";

const screenWidth = Dimensions.get("window").width;

const screenHeight = Dimensions.get("window").height;

interface HomePageProps {
  user: user;
  navigation: any;
}

interface issuesType {
  name: string;
  issue: string;
  date: string;
  state: string;
}

interface user {
  name: string;
  username: string;
  housingInfo: {
    unitNumber?: number;
    address: string;
    rent: number;
    paid: number;
  };
  issues?: issuesType[];
}

const dummyUser: user = {
  name: "Nathan",
  username: "Coolname",
  housingInfo: {
    unitNumber: 12,
    address: "1234 Example Ave",
    rent: 1000,
    paid: 1000,
  },
  issues: [
    {
      name: "basic",
      issue: "some issue",
      date: "March 31 2024",
      state: "Seen",
    },
  ],
};

function Home({ navigation }: any) {
  const [menuItem, setMenuItem] = useState<number>(3);

  return (
    <View style={homeStyles.container}>
      <Header navigation={navigation} />
      <View style={homeStyles.mainContainer}>
        {/* <NoUnitCta /> */}
        <UserHomePage user={dummyUser} navigation={navigation} />
      </View>
      <Footer defaultIcon={3} navigation={navigation} />
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

const UserHomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  const user = props.user;
  const navigation = props.navigation;
  const rentalInfo = user.housingInfo;

  return (
    <ScrollView style={homeStyles.userPageContainer}>
      <View style={homeStyles.userGreeting}>
        <View style={homeStyles.userGreetingItemsContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Welcome, {user.name}!
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginBottom: 1,
            }}
          >
            Unit: {rentalInfo.unitNumber} at {rentalInfo.address}
          </Text>
        </View>
      </View>

      <View style={homeStyles.userPaymentInfoContainer}>
        <View style={homeStyles.userPaymentHeaderContainer}>
          <Text>You currently owe:</Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
            }}
          >
            $ {rentalInfo.rent}
          </Text>
        </View>
        <View
          style={{
            marginVertical: screenHeight * 0.01,
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: screenWidth * 0.85,
              alignItems: "center",
              backgroundColor: "green",
              paddingVertical: screenHeight * 0.015,
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate("MakePayment");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: stylesUtil.mainWhite,
              }}
            >
              Make Payment
            </Text>
          </Pressable>
        </View>
        <View style={homeStyles.userPaymentRecentChargesContainer}>
          {/*Add rendering of all current unapid charges here*/}
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
                    color: "green",
                  }}
                >
                  Paid
                </Text>
                <Text
                  style={{
                    color: "green",
                    textDecorationLine: "line-through",
                  }}
                >
                  ${"1100"}
                </Text>
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
                <Text
                  style={{
                    color: "red",
                  }}
                >
                  ${"400"}
                </Text>
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
                <Text
                  style={{
                    color: "red",
                  }}
                >
                  ${"600"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: screenHeight * 0.015,
          }}
        >
          <Pressable
            style={{
              ...homeStyles.homeButton,
              backgroundColor: stylesUtil.mainColor,
            }}
          >
            <Text
              style={{
                color: stylesUtil.mainWhite,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              View All
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={homeStyles.issuesContainer}>
        <View style={homeStyles.issuesHeaderContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Issues:
          </Text>
        </View>
        <View style={homeStyles.issuesItemsContainer}>
          {user.issues != null ? (
            user.issues.map((issues: issuesType, index: number) => {
              return (
                <View
                  key={index}
                  style={{
                    borderWidth: 1,
                    width: screenWidth * 0.75,
                    borderRadius: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: screenWidth * 0.05,
                    paddingVertical: screenHeight * 0.02,
                  }}
                >
                  <View
                    style={{
                      alignContent: "center",
                    }}
                  >
                    <Text>Issue:</Text>
                    <Text>{issues.name}</Text>
                  </View>
                  <View>
                    <Text>{issues.date}</Text>
                    <Text>{issues.state}</Text>
                  </View>
                </View>
              );
            })
          ) : (
            <View style={homeStyles.issuesNoItemsContainer}>
              <Text
                style={{
                  color: "grey",
                }}
              >
                No current issues
              </Text>
            </View>
          )}
        </View>
        <View style={homeStyles.issuesCtaFooter}>
          <Pressable
            style={{
              ...homeStyles.homeButton,
              backgroundColor: "green",
            }}
          >
            <Text
              style={{
                color: stylesUtil.mainWhite,
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Create request
            </Text>
          </Pressable>
          <Pressable
            style={{
              ...homeStyles.homeButton,
              backgroundColor: stylesUtil.mainColor,
            }}
            onPress={() => {
              navigation.navigate("Requests");
            }}
          >
            <Text
              style={{
                color: stylesUtil.mainWhite,
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              View all
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const PrivUserHomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  return <View></View>;
};

const homeStyles = StyleSheet.create({
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
    alignSelf: "center",
    borderWidth: 2,
    borderColor: stylesUtil.mainWhite,
    borderBottomColor: "black",
    borderRadius: 20,
    width: screenWidth + screenWidth * 0.03,
  },
  userGreetingItemsContainer: {
    marginHorizontal: screenWidth * 0.05,
  },
  userPaymentInfoContainer: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: stylesUtil.mainWhite,
    borderBottomColor: "black",
    borderRadius: 20,
    width: screenWidth + screenWidth * 0.03,
  },
  userPaymentHeaderContainer: {
    marginTop: screenHeight * 0.015,
    marginHorizontal: screenWidth * 0.03,
    flexDirection: "column",
    alignItems: "center",
  },
  userPaymentRecentChargesContainer: {
    flexDirection: "column",
    marginHorizontal: screenWidth * 0.05,
    rowGap: screenHeight * 0.02,
  },
  homeButton: {
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: screenHeight * 0.02,
    borderRadius: 10,
    alignItems: "center",
  },
  issuesContainer: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: stylesUtil.mainWhite,
    borderBottomColor: "black",
    borderRadius: 20,
    width: screenWidth + screenWidth * 0.03,
  },
  issuesHeaderContainer: {
    marginHorizontal: screenWidth * 0.05,
  },
  issuesItemsContainer: {
    alignItems: "center",
    marginVertical: screenHeight * 0.02,
  },
  issuesNoItemsContainer: {
    height: screenHeight * 0.1,
    justifyContent: "center",
  },
  issuesCtaFooter: {
    marginHorizontal: screenWidth * 0.1,
    marginVertical: screenHeight * 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Home;
