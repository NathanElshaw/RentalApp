import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface signUpForm {}

const windowWidth = Dimensions.get("window").width;

function CreateAccount({ navigation }: any) {
  const [formType, setFormType] = useState<String>("Default");
  const [formStep, setFormStep] = useState<number>(0);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const apiCreateAccount = (data: signUpForm) => {
    formType == "Default" ? "Api req no code" : "Api req with code";
  };

  const proceedCreateAccount = () => {
    setFormType("Default");
    setFormStep(formStep + 1);
  };

  const proceedWithCode = () => {
    setFormType("With Code");
    setFormStep(formStep + 1);
  };

  return (
    <View style={SignUpStyles.container}>
      <View style={SignUpStyles.headerContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "blue",
            }}
          >
            Back
          </Text>
        </Pressable>
      </View>
      <View style={SignUpStyles.formContainer}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Sign up
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            marginBottom: 10,
            textAlign: "center",
            width: windowWidth - 110,
          }}
        >
          Lets get started. Take control of owning your rental with all the info
          you'll need.
        </Text>
        <Text>Name:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              style={SignUpStyles.formInput}
              value={value}
              placeholder="Marvin Mcfadden"
            />
          )}
          name="name"
        />
        <Text>Email:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              style={SignUpStyles.formInput}
              value={value}
              placeholder="Email@example.com"
            />
          )}
          name="email"
        />
        <Text>Username:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              style={SignUpStyles.formInput}
              value={value}
              placeholder="Username"
            />
          )}
          name="username"
        />
        <Text>Password:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              style={SignUpStyles.formInput}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          )}
          name="password"
        />
        <Text>Confirm password:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              style={SignUpStyles.formInput}
              value={value}
              placeholder="Confirm Password"
              secureTextEntry
            />
          )}
          name="confirmPassword"
        />
      </View>
      <View style={SignUpStyles.ctaContainer}>
        <Pressable
          style={SignUpStyles.proceedButton}
          onPress={proceedCreateAccount}
        >
          <Text style={SignUpStyles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const SignUpStyles = StyleSheet.create({
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
  ctaContainer: {
    flex: 4,
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  formContainer: {
    flex: 8,
    flexDirection: "column",
    rowGap: 6,
    justifyContent: "flex-end",
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
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: stylesUtil.mainColor,
    width: 260,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
  },
});

export default CreateAccount;
