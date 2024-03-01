import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./components/forgot-password-page/ForgotPassword";
import LoginPage from "./components/login-page/Login";

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={LoginPage}
                />
                <Stack.Screen
                name="forgotPassword"
                component={ForgotPassword}
                />
            </Stack.Navigator>
    )
}

export default MyStack;