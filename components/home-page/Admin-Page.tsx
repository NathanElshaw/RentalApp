import { View } from "react-native";

interface HomePageProps {
  user: user;
  navigation: any;
}

interface issuesType {
  name: string;
  issue: string;
  date: string;
  state: string;
}

interface user {
  name: string;
  username: string;
  housingInfo: {
    unitNumber?: number;
    address: string;
    rent: number;
    paid: number;
  };
  issues?: issuesType[];
}

const AdminHomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  return <View></View>;
};
