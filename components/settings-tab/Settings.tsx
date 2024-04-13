import { StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Footer from "../globals/Footer";
import Header from "../globals/Header";

interface settingProps {
  navigation: any;
}

const Settings: React.FC<settingProps> = (props: settingProps) => {
  const navigation = props.navigation;

  return (
    <View style={settingsPage.container}>
      <Header navigation={navigation} />
      <View style={settingsPage.mainContainer}>
        <Text>Settings</Text>
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
