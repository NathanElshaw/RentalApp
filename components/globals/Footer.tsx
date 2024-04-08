import { View, Pressable, Text } from "react-native";

function Footer() {
  return (
    <View style={homeStyles.footerContainer}>
      <View style={homeStyles.footerMenuContainer}>
        <Pressable
          style={{
            ...homeStyles.footerMenuItem,
            backgroundColor:
              menuItem === 1 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            setMenuItem(1);
          }}
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
            ...homeStyles.footerMenuItem,
            backgroundColor:
              menuItem === 2 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            setMenuItem(2);
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
            ...homeStyles.footerMenuItem,
            backgroundColor:
              menuItem === 3 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            setMenuItem(3);
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
            ...homeStyles.footerMenuItem,
            backgroundColor:
              menuItem === 4 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            setMenuItem(4);
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
            ...homeStyles.footerMenuItem,
            backgroundColor:
              menuItem === 5 ? stylesUtil.mainColor : stylesUtil.mainWhite,
          }}
          onPress={() => {
            setMenuItem(5);
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
}
