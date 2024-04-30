import { StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Footer from "../globals/Footer";
import Header from "../globals/Header";

interface rentalProps {
  navigation: any;
  rental?: rentalData;
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
  rentDueDate: number;
  leaseEnd: string;
}

const dummyRental: rentalData = {
  unitAddress: "123 testing avg",
  beds: 2,
  baths: 1.5,
  unitNumber: 12,
  hasPets: true,
  renterAmount: 2,
  rentAmount: 1400,
  rentDue: 0,
  rentPaid: 1400,
  leaseStart: "2024-1-1",
  rentDueDate: 4,
  leaseEnd: "2025-1-1",
};

const Rental: React.FC<rentalProps> = (props: rentalProps) => {
  const navigation = props.navigation;
  const rental = props.rental;

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
