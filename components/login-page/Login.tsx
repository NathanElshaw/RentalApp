import { Text, StyleSheet, View, TextInput, Button, Image } from "react-native";
import stylesUtil from "../../styling/MainStyles";

function LoginPage(){
return  (
<View style={loginStyles.container}>
    <Text>JNE</Text>
    <View style={loginStyles.loginContainer}>   
        <TextInput 
            id="Username"
            placeholder="Username"
            style={loginStyles.inputBoxTop}/>
        <TextInput 
            id="Password"
            placeholder="Password"
            secureTextEntry={true}
            style={loginStyles.inputBoxBottom}/>
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
    height: 90,
    width: 260
  },
  inputBoxTop: {
    flex: 1,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: stylesUtil.mainColor,
    padding: 4
  },
  inputBoxBottom: {
    flex: 1,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: stylesUtil.mainColor,
    padding: 4,
  }
});

export default LoginPage;