import { StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Header from "../globals/Header";

interface accountProps {
  navigation: any;
}

const Account: React.FC<accountProps> = (props: accountProps) => {
  const navigation = props.navigation;

  return (
    <View style={accountPage.container}>
      <Header navigation={navigation} isAccountPage={true} />
      <View style={accountPage.mainContainer}>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          I
        </Text>
      </View>
    </View>
  );
};

export default Account;

const accountPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
  },

  mainContainer: {
    flex: 12,
  },
});
