import { Button, View } from "react-native";

function ForgotPassword({navigation}: any){

    return(
        <View>
            <Button
            title="Back"
            onPress={()=>{
                navigation.navigate("")
            }}/>
        </View>
    )
}

export default ForgotPassword;