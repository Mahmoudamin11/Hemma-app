import { Colors } from "@/constants/theme/theme";
import { AppColors } from "@/constants/theme/theme.types";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import {
    Alert,
    useColorScheme
} from "react-native";

const useLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passError, setPassError] = useState("");
  const [loading, setLoading] = useState(false);

  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const c: AppColors = Colors[scheme ?? "light"];

  // ── Format phone to E.164 (Egyptian numbers → +20XXXXXXXXX) ──────────────
//   const formatPhoneToE164 = (raw: string): string => {
//     const digits = raw.replace(/\D/g, "");
//     if (digits.startsWith("0")) return `+20${digits.slice(1)}`;
//     if (digits.startsWith("20")) return `+${digits}`;
//     if (digits.startsWith("+20")) return digits;
//     return `+20${digits}`;
//   };

  const handleLogin = async () => {
    let valid = true;
    setPhoneError("");
    setPassError("");

    // ── Validation ────────────────────────────────────────────────────────
    if (phone.replace(/\D/g, "").length < 11 && !phone.startsWith("0")) {
      setPhoneError("يرجى إدخال رقم هاتف صحيح");
      valid = false;
    }
    if (password.length < 6) {
      setPassError("كلمة السر يجب أن تكون 6 أحرف على الأقل");
      valid = false;
    }
    if (!valid) return;

    setLoading(true);
    try {
      // Supabase expects an email for signInWithPassword.
      // If your project uses phone auth, swap to signInWithOtp or signInWithPhone.
      const email = `${phone}@phone.local`; // adapter pattern
      // ── OR use phone auth if enabled in your Supabase project: ──────────
      // const { error } = await supabase.auth.signInWithPassword({ phone: formatPhoneToE164(phone), password });

      const { data, error } = await supabase.auth.signInWithPassword({
        email, // replace with `phone` key if using phone auth
        password,
      });

      if (error) {
        // Map Supabase errors to Arabic messages
        if (error.message.includes("Invalid login credentials")) {
          setPhoneError("رقم الهاتف أو كلمة السر غير صحيحة");
        } else if (error.message.includes("Email not confirmed")) {
          Alert.alert("تنبيه", "يرجى تأكيد رقم الهاتف أولاً");
        } else {
          Alert.alert("خطأ", error.message);
        }
        return;
      }

      // ── Success: navigate or update auth context here ─────────────────
      console.log("Logged in:", data.user);
      console.log("Session:", data.session);
      // e.g. router.replace("/(tabs)/home");
    } catch (err) {
      Alert.alert("خطأ غير متوقع", "حدث خطأ، يرجى المحاولة مرة أخرى");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return { phone, setPhone, password,c, isDark, setPassword, phoneError, setPhoneError, passError, setPassError, loading, setLoading, handleLogin };
};

export default useLogin;
