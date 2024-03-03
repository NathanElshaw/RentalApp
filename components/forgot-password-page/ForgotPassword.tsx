import { Button, View } from "react-native";

function ForgotPassword({ navigation }: any) {
  return (
    <View>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

export default ForgotPassword;
