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
}

const screenHeight: number = Dimensions.get("screen").height;
const screenWidth: number = Dimensions.get("screen").width;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const navigation = props.navigation;

  return (
    <View style={header.container}>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
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
        </Pressable>
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
