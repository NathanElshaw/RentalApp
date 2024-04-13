import { useState } from "react";
import { View, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import stylesUtil from "../../styling/MainStyles";

interface footerProps {
  defaultIcon: number;
  navigation: any;
}

const screenHeight: number = Dimensions.get("screen").height;
const screenWidth: number = Dimensions.get("screen").width;

//todo: get crruent tab selection and reflect it on the footer

const Footer: React.FC<footerProps> = (props: footerProps) => {
  const iconInt: number = props.defaultIcon;
  const navigation = props.navigation;

  const [menuItem, setMenuItem] = useState<number>(iconInt);

  return (
    <View style={footer.container}>
      <View style={footer.menuContainer}>
        <Pressable
          style={{
            ...footer.menuItem,
            backgroundColor:
              menuItem === 1 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              color: menuItem === 1 ? stylesUtil.mainWhite : "black",
            }}
          >
            1
          </Text>
        </Pressable>
        <Pressable
          style={{
            ...footer.menuItem,
            backgroundColor:
              menuItem === 2 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            navigation.navigate("MakePayment");
          }}
        >
          <Text
            style={{
              color: menuItem === 2 ? stylesUtil.mainWhite : "black",
            }}
          >
            2
          </Text>
        </Pressable>
        <Pressable
          style={{
            ...footer.menuItem,
            backgroundColor:
              menuItem === 3 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text
            style={{
              color: menuItem === 3 ? stylesUtil.mainWhite : "black",
            }}
          >
            3
          </Text>
        </Pressable>
        <Pressable
          style={{
            ...footer.menuItem,
            backgroundColor:
              menuItem === 4 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            navigation.navigate("Requests");
          }}
        >
          <Text
            style={{
              color: menuItem === 4 ? stylesUtil.mainWhite : "black",
            }}
          >
            4
          </Text>
        </Pressable>
        <Pressable
          style={{
            ...footer.menuItem,
            backgroundColor:
              menuItem === 5 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            navigation.navigate("SettingsPage");
          }}
        >
          <Text
            style={{
              color: menuItem === 5 ? stylesUtil.mainWhite : "black",
            }}
          >
            5
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const footer = StyleSheet.create({
  container: {
    flex: 1.5,
    marginHorizontal: screenWidth * 0.075,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: screenHeight * 0.01,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: (screenWidth * 0.12) / 2,
  },
});

export default Footer;
