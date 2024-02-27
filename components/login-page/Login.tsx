import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useForm, Controller} from "react-hook-form"

interface LoginData{
    username: String,
    password: String
}

function LoginPage(){

const {
  control,
  handleSubmit,
  formState:{errors}
} = useForm({
    defaultValues: {
        username: "",
        password: ""
    }
});

const onSubmit = (data: LoginData) => {
    console.log(data)
}

return  (
<View style={loginStyles.container}>
    <Text>JNE</Text>
    <View style={loginStyles.loginContainer}>
   <Controller
   control={control}
   rules={{
    required: true
   }}
   render={({ field: {onChange, onBlur, value} }) => (
    <TextInput
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
    style={loginStyles.inputBoxTop}
    placeholder="Username"
    />
   )}
   name="username"
  />
  <View
  style={loginStyles.inputBoxBottom}>
  <Controller
   control={control}
   rules={{
    required: true
   }}
   render={({ field: {onChange, onBlur, value} }) => (
    <TextInput
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
    placeholder="Password"
    secureTextEntry
    />
   )}
   name="password"
  />
  {errors.password && <Text>This is required</Text>}
  </View>
  </View>
  <View>
   <Button 
   title="Submit"
   onPress={handleSubmit(onSubmit)}
   />
  </View>
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