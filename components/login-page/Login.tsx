import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useForm, Controller } from "react-hook-form";
import { ParamListBase, StackNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface LoginData {
  username: String;
  password: String;
}

function LoginPage({ navigation }: any) {
  const forgotPasswordPress = () => {
    navigation.navigate("forgotPassword");
  };

  const createAccountPress = () => {
    navigation.navigate("createAccount");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <View style={loginStyles.container}>
      <Text>JNE</Text>
      <View style={loginStyles.loginContainer}>
        <View style={loginStyles.inputBoxTop}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                style={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  fontSize: 18,
                }}
                value={value}
                placeholder="Username"
              />
            )}
            name="username"
          />
        </View>
        <View style={loginStyles.inputBoxBottom}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                style={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  fontSize: 18,
                  width: 250,
                }}
                value={value}
                placeholder="Password"
                secureTextEntry
              />
            )}
            name="password"
          />
          {errors.password == null ? (
            ""
          ) : (
            <View style={loginStyles.inputBoxErrorContainer}>
              <Text
                style={{
                  fontSize: 12,
                  margin: 0,
                  padding: 0,
                  color: "red",
                }}
              >
                {errors.password && (
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 12,
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    This is required
                  </Text>
                )}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={loginStyles.ctaContainer}>
        <Pressable onPress={forgotPasswordPress}>
          <Text>Forgot password</Text>
        </Pressable>

        <Pressable onPress={createAccountPress}>
          <Text>Create Account</Text>
        </Pressable>
      </View>

      <View>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    height: 90,
    width: 260,
  },
  inputBoxTop: {
    flex: 1,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: stylesUtil.mainColor,
    padding: 4,
  },
  inputBoxBottom: {
    flex: 1,
    flexWrap: "wrap",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: stylesUtil.mainColor,
    padding: 4,
  },
  inputBoxErrorContainer: {
    margin: 0,
    padding: 0,
  },
  ctaContainer: {
    columnGap: 20,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LoginPage;
