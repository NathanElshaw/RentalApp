import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import stylesUtil from "../../styling/MainStyles";
import { Controller, useForm } from "react-hook-form";
import Spinner from "../globals/Spinner";

const screenWidth = Dimensions.get("window").width;

const screenHeight = Dimensions.get("window").height;

function Home({ navigation }: any) {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.headerContainer}>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: screenWidth * 0.125,
              height: screenWidth * 0.125,
              marginLeft: screenWidth * 0.325,
            }}
            source={require("../../assets/iconMain.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Pressable>
            <Text>Account</Text>
          </Pressable>
        </View>
      </View>
      <View style={homeStyles.mainContainer}>
        <NoUnitCta />
      </View>
      <View style={homeStyles.footerContainer}></View>
    </View>
  );
}

const NoUnitCta = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: {
      unitCode: "",
    },
  });

  const clearError = () => {
    if (errors.unitCode) errors.unitCode.type = "";
  };

  const onSubmit = (data: any) => {
    console.log(isSubmitting);
  };

  return (
    <View style={homeStyles.joinUnitCta}>
      {isSubmitted == false ? (
        <View>
          <Text
            style={{
              textAlign: "center",
              width: screenWidth - 100,
              fontSize: 26,
              fontWeight: "700",
              marginBottom: screenHeight * 0.01,
            }}
          >
            Join a Unit!
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: screenWidth - 100,
              fontSize: 14,
              fontWeight: "400",
              marginBottom: screenHeight * 0.01,
            }}
          >
            You currently arent apart of a unit, enter your unit code to join
            your unit
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: screenHeight * 0.01,
            }}
          >
            Code:
          </Text>
          <View style={homeStyles.formContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onFocus={clearError}
                  style={{
                    ...homeStyles.formInput,
                    borderColor:
                      errors.unitCode?.type === "required"
                        ? "red"
                        : stylesUtil.mainWhite,
                    borderBottomColor:
                      errors.unitCode?.type === "required" ? "red" : "black",
                  }}
                  value={value}
                  placeholder="Join code"
                />
              )}
              name={"unitCode"}
            />
            <View style={homeStyles.formErrorContainer}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "red",
                }}
              >
                {errors.unitCode?.type === "required"
                  ? "This field is required"
                  : ""}
              </Text>
            </View>
            <Pressable
              style={homeStyles.joinUnitButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text
                style={{
                  color: stylesUtil.mainWhite,
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Join
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Spinner color={stylesUtil.mainColor} />
      )}
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesUtil.mainWhite,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: screenHeight * 0.05,
    marginHorizontal: screenWidth * 0.02,
  },
  mainContainer: {
    flex: 12,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
  },
  joinUnitCta: {
    flexDirection: "column",
    justifyContent: "center",
  },
  formContainer: {
    alignItems: "center",
  },
  formInput: {
    borderWidth: 1,
    borderBottomColor: "black",
    borderColor: stylesUtil.mainWhite,
    marginHorizontal: 10,
    width: screenWidth - 120,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 4,
    fontSize: 18,
  },
  formErrorContainer: {
    width: screenWidth - 120,
    height: screenHeight * 0.02,
    marginLeft: screenWidth * 0.05,
    marginVertical: -4,
  },
  joinUnitButton: {
    backgroundColor: stylesUtil.mainColor,
    alignItems: "center",
    justifyContent: "center",
    marginTop: screenHeight * 0.005,
    width: screenWidth - 250,
    height: screenHeight * 0.045,
    borderRadius: 15,
  },
  spinnerContainer: {
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1.5,
    borderWidth: 1,
  },
});

export default Home;
