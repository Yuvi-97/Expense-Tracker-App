import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { CustomTabs } from "@/components/CustomTabs";

const _layout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="expenses" />
      <Tabs.Screen name="settings" />
      <Tabs.Screen name="statistics" />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
