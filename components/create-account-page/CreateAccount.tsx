import { Pressable, StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { useState } from "react";

function CreateAccount({ navigation }: any) {
  const [formType, setFormType] = useState<String>("Default");
  const [formStep, setFormStep] = useState<number>(0);

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
          <Text>Back</Text>
        </Pressable>
      </View>
      <View style={SignUpStyles.ctaContainer}>
        <Pressable onPress={proceedCreateAccount}>
          <Text>Create Account</Text>
        </Pressable>
        <Pressable onPress={proceedWithCode}>
          <Text>I have a code!</Text>
        </Pressable>
        <Text>
          {formType}
          {formStep}
        </Text>
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
});

export default CreateAccount;
