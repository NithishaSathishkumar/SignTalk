import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

export function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        title: "SignTalk",
        headerStyle: { backgroundColor: "#f28482" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "SignTalk" }} />
    </Stack>
  );
}

// Ensure that RootLayout is the default export
export default RootLayout;
