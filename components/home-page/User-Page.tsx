import { Pressable, ScrollView, Text, View } from "react-native";
import { HomePageProps, homeStyles, issuesType } from "./Home-Page";
import { screenHeight, screenWidth } from "../globals/Defaults";
import stylesUtil from "../../styling/MainStyles";

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

export default UserHomePage;
