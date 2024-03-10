import { Pressable, StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
          borderWidth: 1,
          alignContent: "flex-start",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>{"<"}</Text>
        </Pressable>
      </View>
      {formStep == 0 ? (
        <View>
          <Text>Start creating an account!</Text>
          <View style={SignUpStyles.ctaContainer}></View>
        </View>
      ) : formStep == 1 ? (
        ""
      ) : (
        ""
      )}
      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
        }}
      >
        {formStep >= 1 ? (
          <Pressable onPress={goBack} style={SignUpStyles.goBackButton}>
            <Text
              style={{
                color: "white",
              }}
            >
              Back
            </Text>
          </Pressable>
        ) : (
          ""
        )}
        {formStep <= 6 ? (
          <Pressable
            style={SignUpStyles.proceedButton}
            onPress={proceedCreateAccount}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Next
            </Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  ctaContainer: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "space-between",
  },
  proceedButton: {
    backgroundColor: "#39e75f",
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 5,
  },
  goBackButton: {
    backgroundColor: "blue",
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 5,
  },
});

export default CreateAccount;
