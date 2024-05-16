import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { StatusBar } from "expo-status-bar";
import { SplashScreen, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import { Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto";
import {
  RobotoSlab_800ExtraBold,
  RobotoSlab_700Bold,
  RobotoSlab_900Black,
} from "@expo-google-fonts/roboto-slab";

import "_/styles/global.css";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const queryClient = new QueryClient();

  const [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    RobotoSlab_800ExtraBold,
    RobotoSlab_700Bold,
    RobotoSlab_900Black,
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
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <StatusBar style="auto" hidden />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
