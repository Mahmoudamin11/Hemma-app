// app/_layout.tsx
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

// ── Separate component so it can consume AuthContext ──────────────────────────
function RootNavigator() {
  const { session, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (loading) return;

    const inProtected = segments[0] === "(protected)";

    if (session && !inProtected) {
      router.replace("/(protected)/(tabs)");   // logged in → go to app
    } else if (!session && inProtected) {
      router.replace("/login");                // logged out → go to login
    }
  }, [session, loading, segments]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <Stack >
        <Stack.Screen name="(protected)" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}