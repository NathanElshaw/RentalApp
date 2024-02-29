import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./components/forgot-password-page/ForgotPassword";

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="forgotPassword"
                component={ForgotPassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;