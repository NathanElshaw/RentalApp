import { StyleSheet } from "react-native";
import stylesUtil from "./styling/MainStyles";
import LoginPage from "./components/login-page/Login";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForgotPassword from "./components/forgot-password-page/ForgotPassword";
import Home from "./components/home-page/Home-Page";
import CreateAccount from "./components/create-account-page/CreateAccount";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentPage from "./components/charges-tab/PaymentPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
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

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MakePayment" component={PaymentPage} />
      </Tab.Navigator>
    </NavigationContainer>
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
