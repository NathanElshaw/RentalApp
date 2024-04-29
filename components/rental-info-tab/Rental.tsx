import { StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Footer from "../globals/Footer";
import Header from "../globals/Header";

interface rentalProps {
  navigation: any;
}

interface rentalData {
  unitAddress: string;
  beds: number;
  baths: number;
  unitNumber: number;
  hasPets: boolean;
  renterAmount: number;
  rentAmount: number;
  rentDue: number;
  rentPaid: number;
  leaseStart: string;
  rentDueDate: string;
  leaseEnd: string;
}

const Rental: React.FC<rentalProps> = (props: rentalProps) => {
  const navigation = props.navigation;

  return (
    <View style={rentalPage.container}>
      <Header navigation={navigation} />
      <View style={rentalPage.mainContainer}>
        <Text>Rental</Text>
      </View>
      <Footer defaultIcon={1} navigation={navigation} />
    </View>
  );
};

export default Rental;

const rentalPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
  },

  mainContainer: {
    flex: 12,
  },
});
