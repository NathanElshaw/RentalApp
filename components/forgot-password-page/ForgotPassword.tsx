import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { Controller, useForm } from "react-hook-form";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ForgotPassword({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    navigation.goBack();
  };

  const createAccountPress = () => {
    navigation.navigate("createAccount");
  };

  return (
    <View style={fpStyle.container}>
      <View style={fpStyle.headerContainer}>
        <Pressable onPress={goBack}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "blue",
            }}
          >
            Back
          </Text>
        </Pressable>
      </View>
      <View style={fpStyle.formContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "600",
            marginVertical: 4,
          }}
        >
          Forgot Password
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: 275,
            marginBottom: 10,
          }}
        >
          Enter the email address associated with your account and we'll send
          you a link to reset your password
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            marginBottom: 4,
          }}
        >
          Email:
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              style={fpStyle.formInput}
              value={value}
              placeholder="Email@example.com"
            />
          )}
          name="email"
        />
        <Text
          style={{
            fontSize: 12,
          }}
        ></Text>
        <Pressable style={fpStyle.ctaButton}>
          <Text
            style={{
              color: stylesUtil.mainWhite,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Reset password
          </Text>
        </Pressable>
      </View>

      <View style={fpStyle.createAccCta}>
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

const fpStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: stylesUtil.mainWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: windowWidth - 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  formContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  formInput: {
    borderWidth: 1,
    borderBottomColor: "black",
    borderColor: stylesUtil.mainWhite,
    marginHorizontal: 10,
    width: windowWidth - 120,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 4,
    fontSize: 18,
  },
  ctaButton: {
    backgroundColor: stylesUtil.mainColor,
    width: windowWidth - 100,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
  },
  createAccCta: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: 4,
    paddingBottom: 40,
  },
});

export default ForgotPassword;
