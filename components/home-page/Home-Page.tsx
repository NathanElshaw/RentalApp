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
            flex: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            borderWidth: 1,
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/iconMain.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          <Pressable>
            <Text>Account</Text>
          </Pressable>
        </View>
      </View>
      <View style={homeStyles.mainContainer}></View>
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
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: screenHeight * 0.05,
    marginHorizontal: screenWidth * 0.02,
  },
  mainContainer: {
    flex: 10,
  },
});

export default Home;
