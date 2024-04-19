import { StyleSheet } from "react-native";
import stylesUtil from "./styling/MainStyles";
import LoginPage from "./components/login-page/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForgotPassword from "./components/forgot-password-page/ForgotPassword";
import Home from "./components/home-page/Home-Page";
import CreateAccount from "./components/create-account-page/CreateAccount";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentPage from "./components/charges-tab/PaymentPage";
import Requests from "./components/request-tab/Requests";
import Settings from "./components/settings-tab/Settings";
import Rental from "./components/rental-info-tab/Rental";
import Account from "./components/account-tab/Account";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
          <Stack.Screen name="createAccount" component={CreateAccount} />

          <Tab.Screen name="Rental" component={Rental} />
          <Tab.Screen name="MakePayment" component={PaymentPage} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Requests" component={Requests} />
          <Tab.Screen name="SettingsPage" component={Settings} />

          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
