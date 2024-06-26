import { Pressable, StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import Footer from "../globals/Footer";
import Header from "../globals/Header";
import { screenWidth } from "../globals/Defaults";

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
  unitAddress: "123 test ave",
  beds: 1,
  baths: 1.5,
  unitNumber: 12,
  hasPets: false,
  renterAmount: 2,
  rentAmount: 1400,
  rentDue: 0,
  rentPaid: 1400,
  leaseStart: "2024-1-1",
  rentDueDate: 1,
  leaseEnd: "2025-1-1",
};

const Rental: React.FC<rentalProps> = (props: rentalProps) => {
  const navigation = props.navigation;
  const rental = dummyRental;

  if (!rental) {
    //fetch new rental info
  }

  return (
    <View style={rentalPage.container}>
      <Header navigation={navigation} />
      <View style={rentalPage.mainContainer}>
        <View style={rentalPage.detailContainer}>
          <Text>Address: {rental?.unitAddress}</Text>
          <Text>
            {!rental.unitNumber ? "" : `unit number: ${rental.unitNumber}`}
          </Text>
        </View>
        <View style={rentalPage.detailContainer}>
          <Text>Beds: {rental.beds}</Text>
          <Text>Baths: {rental.baths}</Text>
        </View>
        <View>
          <View style={rentalPage.detailContainer}>
            <Text>Rent amount: ${rental.rentAmount}</Text>
            <Text>Amount owed: ${rental.rentDue}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Pressable>
              <Text>
                {rental.rentDue === 0 ? "All caught up!" : "Make Payment"}
              </Text>
            </Pressable>
          </View>
        </View>
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

  detailContainer: {
    justifyContent: "center",
    flexDirection: "row",
    columnGap: screenWidth * 0.1,
  },
});

export { rentalData };
