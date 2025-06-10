import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import ScreenWrapper from "@/components/ScreenWrapper";

export default function Home() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}>Logout</Typo>
      </Button>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
