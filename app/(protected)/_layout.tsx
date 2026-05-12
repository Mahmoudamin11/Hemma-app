import { Redirect, Stack } from "expo-router";
import SplashScreen from "@/components/SplashScreen";
import { useAuth } from "@/context/AuthContext";

export const unstable_settings = {
  anchor: "(tabs)",
};


export default function ProtectedLayout() {
  const { session, loading } = useAuth()

  

  if (loading) {
    return <SplashScreen />;
  }
  if (!session) return <Redirect href="/login" />;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}
