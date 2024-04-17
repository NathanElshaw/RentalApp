import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Footer from "../globals/Footer";
import Header from "../globals/Header";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { settingsType } from "./settingsConfig";
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

  const [settingConfig, setSettingConfig] = useState<settingsType>();
  useEffect(() => {
    const getSettings = async () => {
      let settings: string | null = await SecureStore.getItemAsync(
        "defaultSettings"
      );
      if (settings && settingConfig == null) {
        const parsedSettings = await JSON.parse(settings);
        setSettingConfig(parsedSettings);
      }
    };
    getSettings();
  }, [settingConfig]);

  const [darkMode, setDarkMode] = useState<boolean>(false);

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
          {settingConfig != null
            ? Object.keys(settingConfig).map((id: string, value: number) => {
                return (
                  <View
                    key={id}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      width: screenWidth * 0.85,
                      height: screenHeight * 0.075,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: screenHeight * 0.01,
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
                        {id}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "center",
                        marginHorizontal: screenWidth * 0.05,
                      }}
                    >
                      {value == typeof Boolean ? (
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
                                darkMode == true
                                  ? stylesUtil.mainColor
                                  : "black",
                              backgroundColor:
                                darkMode == true
                                  ? stylesUtil.mainColor
                                  : stylesUtil.mainWhite,
                            }}
                          ></View>
                        </Pressable>
                      ) : (
                        <Text>{value}</Text>
                      )}
                    </View>
                  </View>
                );
              })
            : ""}
          <Text
            style={{
              color: "grey",
            }}
          >
            Version: {settingConfig != null ? settingConfig.version : "1.1.0"}
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
