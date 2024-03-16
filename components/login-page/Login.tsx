import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

/*
Todo:
add logo image
Api fetch for login
add background items
*/

interface LoginData {
  username: String;
  password: String;
}

function LoginPage({ navigation }: any) {
  const [loginError, setLoginError] = useState<String>();

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
        <Text>Username:</Text>
        <View style={loginStyles.inputBox}>
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
        <Text>Password:</Text>
        <View style={loginStyles.inputBox}>
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
        {loginError != null ? (
          <Text
            style={{
              fontSize: 10,
              color: "red",
            }}
          >
            {loginError}
          </Text>
        ) : (
          ""
        )}
      </View>

      <View style={loginStyles.fpContainer}>
        <Pressable onPress={forgotPasswordPress}>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Forgot password?
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          marginTop: 5,
        }}
      >
        <Pressable
          style={loginStyles.loginButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Log in
          </Text>
        </Pressable>
      </View>
      <View style={loginStyles.createAccCta}></View>
    </View>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 5,
    alignContent: "center",
    justifyContent: "center",
    width: 260,
  },
  inputBox: {
    borderWidth: 1,
    borderBottomColor: "black",
    borderColor: stylesUtil.mainWhite,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 4,
    fontSize: 18,
  },
  inputBoxErrorContainer: {
    margin: 0,
    padding: 0,
  },
  fpContainer: {
    borderWidth: 1,
    width: 250,
    marginTop: -1,
    alignItems: "flex-end",
  },
  loginButton: {
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: stylesUtil.mainColor,
  },
  createAccCta: {
    flex: 1,
    borderWidth: 1,
  },
});

export default LoginPage;
