import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";

interface HeaderProps {
  navigation: any;
  isAccountPage?: boolean;
}

const screenHeight: number = Dimensions.get("screen").height;
const screenWidth: number = Dimensions.get("screen").width;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const navigation = props.navigation;
  const isAccountPage = props.isAccountPage;

  return (
    <View style={header.container}>
      <View
        style={{
          marginTop: -5,
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: isAccountPage != null || false ? "flex" : "none",
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Home"); //possibly pass prop from page it came from?
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Back
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{
              width: screenWidth * 0.125,
              height: screenWidth * 0.125,
              marginLeft: isAccountPage === true ? 0 : screenWidth * 0.325,
              marginRight: isAccountPage === true ? screenWidth * 0.42 : 0,
            }}
            source={require("../../assets/iconMain.png")}
          />
        </Pressable>
      </View>
      <View
        style={{
          display: isAccountPage != null || false ? "none" : "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Account");
          }}
        >
          <Text>Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const header = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: screenHeight * 0.05,
    paddingHorizontal: screenWidth * 0.025,
    width: screenWidth * 1.02,
    borderWidth: 1.5,
    borderColor: stylesUtil.mainWhite,
    borderBottomColor: "black",
    borderRadius: 10,
  },
});
