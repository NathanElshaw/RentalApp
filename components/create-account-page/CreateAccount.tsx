import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface signUpForm {}

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

  const goBack = () => {
    formStep > 0 ? setFormStep(formStep - 1) : null;
  };

  return (
    <View style={SignUpStyles.container}>
      <View
        style={{
          marginLeft: 5,
          marginBottom: 50,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Return
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "400",
            fontSize: 24,
            marginBottom: 10,
          }}
        >
          Start creating an account!
        </Text>
        <View style={SignUpStyles.formContainer}>
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
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={SignUpStyles.formContainer}>
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
      </View>
      <View
        style={{
          marginTop: 5,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: 10,
        }}
      >
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
  },
  ctaContainer: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "space-between",
  },
  formContainer: {
    flexDirection: "column",
    rowGap: 5,
  },
  formInput: {
    borderWidth: 1,
    borderBottomColor: "black",
    borderColor: stylesUtil.mainWhite,
    marginHorizontal: 10,
    width: 250,
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
