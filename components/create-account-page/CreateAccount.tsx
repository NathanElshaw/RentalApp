import { Pressable, StyleSheet, Text, View } from "react-native";
import stylesUtil from "../../styling/MainStyles";

function CreateAccount({ navigation }: any) {
  return (
    <View style={SignUpStyles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Back</Text>
      </Pressable>
    </View>
  );
}

const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateAccount;
