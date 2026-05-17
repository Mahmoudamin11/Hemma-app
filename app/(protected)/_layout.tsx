// app/(protected)/_layout.tsx
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import SplashScreen from "@/components/SplashScreen";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function ProtectedLayout() {
  const { session, loading } = useAuth();

  if (loading) return <SplashScreen />; 

  if (!loading && !session) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
    </Stack>
  );
}