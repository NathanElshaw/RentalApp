import { Text, StyleSheet, View, TextInput } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useForm, Controller} from "react-hook-form"

function LoginPage(){

const {
  control,
  handleSubmit,
  formState:{errors}
} = useForm();

return  (
<View style={loginStyles.container}>
    <Text>JNE</Text>
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
    />
   )}
   name="firstName"
  />
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