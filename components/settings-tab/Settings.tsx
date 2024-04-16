import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Footer from "../globals/Footer";
import Header from "../globals/Header";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
interface settingProps {
  navigation: any;
}

const settings = async () => {
  SecureStore.getItemAsync("defaultSettings");
};

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const Settings: React.FC<settingProps> = (props: settingProps) => {
  const navigation = props.navigation;

  const [settingConfig, setSettingConfig] = useState<string>();

  const getSettings = async () => {
    let settings: string | null = await SecureStore.getItemAsync(
      "defaultSettings"
    );
    if (settings) {
      setSettingConfig(settings);
    }
  };

  const [darkMode, setDarkMode] = useState<boolean>(false);

  console.log(settingConfig);
  return (
    <View style={settingsPage.container}>
      <Header navigation={navigation} />
      <View style={settingsPage.mainContainer}>
        <View
          style={{
            alignItems: "center",
            marginTop: screenHeight * 0.025,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              width: screenWidth * 0.85,
              height: screenHeight * 0.075,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                marginHorizontal: screenWidth * 0.05,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Setting id
              </Text>
            </View>
            <View
              style={{
                alignSelf: "center",
                marginHorizontal: screenWidth * 0.05,
              }}
            >
              <Pressable
                onPress={() => {
                  setDarkMode(!darkMode);
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 25,
                    width: screenWidth * 0.05,
                    height: screenWidth * 0.05,
                    borderColor:
                      darkMode == true ? stylesUtil.mainColor : "black",
                    backgroundColor:
                      darkMode == true
                        ? stylesUtil.mainColor
                        : stylesUtil.mainWhite,
                  }}
                ></View>
              </Pressable>
            </View>
          </View>
          <Text
            style={{
              color: "grey",
            }}
          >
            Version: {"1.0.0"}
          </Text>
        </View>
      </View>
      <Footer defaultIcon={5} navigation={navigation} />
    </View>
  );
};

export default Settings;

const settingsPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
  },

  mainContainer: {
    flex: 12,
  },
});
