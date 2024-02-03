import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import stylesUtil from "../../styling/MainStyles";

function LoginPage(){
return  (
<View style={loginStyles.container}>
    <Text>Jne Placeholder</Text>
    <View style={loginStyles.loginContainer}>   
        <TextInput 
            id="Username"
            placeholder="Username"
            style={loginStyles.inputBox}/>
        <TextInput 
            id="Password"
            placeholder="Password"
            secureTextEntry={true}
            style={loginStyles.inputBox}/>
        </View>
        <Button 
        title="Login"
        onPress={()=>{
            //Something
        }}/>
</View>
    )
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer : {
    height: 70,
    width: 160
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderCurve: "continuous",
    borderColor: stylesUtil.mainColor
  }
});

export default LoginPage;