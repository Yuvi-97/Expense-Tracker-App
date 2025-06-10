import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingX, spacingY } from "@/constants/theme";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/authContext";
import Typo from "@/components/Typo";
import { verticalScale } from "@/utils/styling";

const Profile = () => {
  const { user } = useAuth();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Profile" style={{ marginVertical: spacingY._10 }} />
        <View style={styles.userInfo}>
          {/* avatar */}
          <View></View>
          {/* user details */}
          <View style={styles.nameContainer}>
            <Typo size={24} fontWeight={"600"} color={colors.neutral100}>
              {user?.name}
            </Typo>
            <Typo size={24} fontWeight={"600"} color={colors.neutral100}>
              {user?.email}
            </Typo>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
  userInfo: {
    marginTop: verticalScale(30),
    alignItems: "center",
    gap: spacingY._15,
  },
  nameContainer: {
    gap: verticalScale(4),
    alignItems: "center",
  },
});
