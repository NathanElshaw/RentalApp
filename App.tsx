import { StyleSheet} from 'react-native';
import stylesUtil from './styling/MainStyles';
import LoginPage from './components/login-page/Login';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={LoginPage}
                />
                <Stack.Screen
                name="forgotPassword"
                component={ForgotPassword}
                />
                <Stack.Screen
                name="Home"
                component={Home}
                />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
