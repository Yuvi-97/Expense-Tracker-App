import { Alert, Pressable, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import BackButton from "@/components/BackButton";
import { colors, spacingX, spacingY } from "@/constants/theme";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import { verticalScale } from "@/utils/styling";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/authContext";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const { login: loginUser } = useAuth();
  const HandleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all the fields");
      return;
    }
    setisLoading(true);
    const res = await loginUser(emailRef.current, passwordRef.current);
    setisLoading(false);
    if (!res.success) {
      Alert.alert("Login", res.msg || "Something went wrong");
      return;
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Welcome Back,
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Login Now to track all you expenses
          </Typo>

          <Input
            placeholder="Enter your email"
            onChangeText={(val) => (emailRef.current = val)}
            icon={
              <Icons.At
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            placeholder="Enter your Password"
            onChangeText={(val) => (passwordRef.current = val)}
            icon={
              <Icons.Lock
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
            secureTextEntry={true}
          />
          <Typo size={14} color={colors.text} style={{ alignSelf: "flex-end" }}>
            Froget Password?
          </Typo>
          <Button loading={isLoading} onPress={HandleSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>
              Login
            </Typo>
          </Button>
        </View>

        {/* footer*/}
        <View style={styles.footer}>
          <Typo size={15}>Dont have an account?</Typo>
          <Pressable onPress={() => router.navigate("/(auth)/register")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              Sign up
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  form: {
    gap: spacingY._20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
