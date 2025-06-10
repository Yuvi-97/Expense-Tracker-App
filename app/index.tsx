import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/splashImage.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
