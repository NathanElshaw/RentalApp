import { StyleSheet, View } from "react-native";
import Header from "../globals/Header";
import Footer from "../globals/Footer";
import stylesUtil from "../../styling/MainStyles";

interface requestsProps {
  navigation: any;
}

const Requests: React.FC<requestsProps> = (props: requestsProps) => {
  const navigation = props.navigation;

  return (
    <View style={requestsPage.container}>
      <Header navigation={navigation} />
      <View style={requestsPage.mainContainer}></View>
      <Footer defaultIcon={4} navigation={navigation} />
    </View>
  );
};

export default Requests;

const requestsPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
  },
  mainContainer: {
    flex: 12,
  },
});
