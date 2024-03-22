import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";

const screenWidth = Dimensions.get("window").width;

const screenHeight = Dimensions.get("window").height;

function Home({ navigation }: any) {
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
        <Text>hi</Text>
      </View>
      <View style={homeStyles.footerContainer}></View>
    </View>
  );
}

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
  footerContainer: {
    flex: 2,
    borderWidth: 1,
  },
});

export default Home;
