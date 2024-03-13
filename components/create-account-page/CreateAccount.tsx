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
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Back</Text>
        </Pressable>
      </View>
      {formStep == 0 ? (
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
                  placeholder="First name"
                />
              )}
              name="firstName"
            />
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
                  placeholder="Last name"
                />
              )}
              name="lastName"
            />
          </View>
        </View>
      ) : formStep == 1 ? (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={SignUpStyles.formContainer}>
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
                />
              )}
              name="password"
            />
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
                />
              )}
              name="confirmPassword"
            />
          </View>
        </View>
      ) : (
        ""
      )}
      <View
        style={{
          marginTop: 5,
          justifyContent: "center",
          flexDirection: "row",
          columnGap: 10,
        }}
      >
        {formStep >= 1 ? (
          <Pressable onPress={goBack} style={SignUpStyles.goBackButton}>
            <Text style={SignUpStyles.buttonText}>Back</Text>
          </Pressable>
        ) : formStep == 1 ? (
          ""
        ) : (
          ""
        )}
        {formStep <= 6 ? (
          <Pressable
            style={SignUpStyles.proceedButton}
            onPress={proceedCreateAccount}
          >
            <Text style={SignUpStyles.buttonText}>Next</Text>
          </Pressable>
        ) : (
          ""
        )}
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
    paddingTop: 4,
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
    backgroundColor: "#39e75f",
    paddingHorizontal: 56,
    paddingVertical: 6,
    borderRadius: 5,
  },
  goBackButton: {
    backgroundColor: "blue",
    paddingHorizontal: 56,
    paddingVertical: 6,
    borderRadius: 5,
  },
});

export default CreateAccount;
