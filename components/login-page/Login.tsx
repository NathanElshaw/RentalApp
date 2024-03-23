import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
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

const windowWidth: number = Dimensions.get("window").width;
const windowHeight: number = Dimensions.get("window").height;

function LoginPage({ navigation }: any) {
  const [loginError, setLoginError] = useState<String>();

  const forgotPasswordPress = () => {
    navigation.navigate("forgotPassword");
  };

  const createAccountPress = () => {
    navigation.navigate("createAccount");
  };

  const clearLoginError = () => {
    loginError != null ? setLoginError(null as unknown as String) : "";
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

  const login = (data: LoginData) => {
    // setLoginError("Invalid username or password.");
    navigation.navigate("Home");
  };

  return (
    <View style={loginStyles.container}>
      <View
        style={{
          flex: 1,
          marginTop: 30,
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{ width: 75, height: 75 }}
          source={require("../../assets/iconMain.png")}
        />
      </View>
      <View style={loginStyles.loginContainer}>
        <Text>Username:</Text>
        <View
          style={{
            ...loginStyles.inputBox,
            borderColor:
              errors.username?.type === "required" || loginError != null
                ? "red"
                : stylesUtil.mainWhite,
            borderBottomColor:
              errors.username?.type === "required" || loginError != null
                ? "red"
                : "black",
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                onFocus={clearLoginError}
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
        <View
          style={{
            ...loginStyles.inputBox,
            borderColor:
              errors.password?.type === "required" || loginError != null
                ? "red"
                : stylesUtil.mainWhite,
            borderBottomColor:
              errors.password?.type === "required" || loginError != null
                ? "red"
                : "black",
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                onFocus={clearLoginError}
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

        <View style={loginStyles.fpContainer}>
          <Text
            style={{
              fontSize: 10,
              color: "red",
            }}
          >
            {errors.password?.type === "required" ||
            errors.username?.type === "required"
              ? "The fields are required"
              : loginError != null
              ? loginError
              : ""}
          </Text>

          <Pressable onPress={forgotPasswordPress}>
            <Text
              style={{
                fontSize: 14,
                color: "blue",
              }}
            >
              Forgot password?
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            marginTop: 5,
            alignItems: "center",
          }}
        >
          <Pressable
            style={loginStyles.loginButton}
            onPress={handleSubmit(login)}
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
      </View>
      <View style={loginStyles.createAccCta}>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Don't have an Account?
        </Text>
        <Pressable onPress={createAccountPress}>
          <Text
            style={{
              color: "blue",
              fontSize: 16,
            }}
          >
            Register
          </Text>
        </Pressable>
      </View>
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
    flex: 3,
    paddingHorizontal: 5,
    alignContent: "center",
    justifyContent: "center",
    width: windowWidth - 80,
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
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: windowWidth - 90,
    marginTop: -1,
  },
  loginButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: stylesUtil.mainColor,
  },
  createAccCta: {
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: 4,
    paddingBottom: 40,
  },
});

export default LoginPage;
