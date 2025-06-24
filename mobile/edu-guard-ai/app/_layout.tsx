import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
