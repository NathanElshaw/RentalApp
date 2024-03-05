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
import React from "react";

interface LoginData {
  username: String;
  password: String;
}

function LoginPage({ navigation }: any) {
  const forgotPasswordPress = () => {
    navigation.navigate("forgotPassword");
  };

  const [hasFormError, setFormError] = React.useState<boolean>(false);

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
                }}
                value={value}
                placeholder="Password"
                secureTextEntry
              />
            )}
            name="password"
          />
        </View>
      </View>
      <Text>{errors.password?.message}</Text>

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
    rowGap: 5,
    width: 260,
  },
  inputBoxTop: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "Black",
    padding: 4,
  },
  inputBoxBottom: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "Black",
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
