import { StyleSheet} from 'react-native';
import stylesUtil from './styling/MainStyles';
import LoginPage from './components/login-page/Login';
import {NavigationContainer} from '@react-navigation/native'
import MyStack from './Stack';

export default function App() {
  return (
    <NavigationContainer>
        <MyStack/>
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
