import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import stylesUtil from './styling/MainStyles';
import LoginPage from './components/login-page/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
      <StatusBar style="auto" />
    </View>
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
