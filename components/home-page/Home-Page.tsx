import { StyleSheet, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Footer from "../globals/Footer";
import Header from "../globals/Header";
import { screenHeight, screenWidth } from "../globals/Defaults";
import UserHomePage from "./User-Page";

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
export { homeStyles, HomePageProps, issuesType, user };
