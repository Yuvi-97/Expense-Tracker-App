import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";

const StackLayout = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default function AuthLayout() {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
}
