import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import Header from "@/components/ui/Header";
import InputField from "@/components/ui/InputField";
import useLogin from "@/hooks/login/useLogin";
import React from "react";
import {
  ActivityIndicator,
  I18nManager,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

I18nManager.forceRTL(true);

// ── LoginScreen ───────────────────────────────────────────────────────────────
export default function LoginScreen() {
  const {
    phone,
    setPhone,
    password,
    setPassword,
    c,
    isDark,
    phoneError,
    passError,
    loading,
    handleLogin,
  } = useLogin();

  return (
    <View style={[styles.root, { backgroundColor: c.background }]}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={c.background}
      />

      <BackgroundBlobs c={c} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <Header iconSize={44} />

          {/* Card */}
          <View
            style={[
              styles.card,
              {
                backgroundColor: isDark
                  ? c.surfaceContainerHigh
                  : c.surfaceContainerLowest,
                borderColor: c.outlineVariant,
                borderWidth: isDark ? 1 : 0,
                shadowColor: isDark ? "transparent" : c.text,
                shadowOpacity: isDark ? 0 : 0.09,
              },
            ]}
          >
            <Text
              style={[
                styles.cardTitle,
                { color: c.text, fontFamily: "BeVietnamPro-Bold" },
              ]}
            >
              تسجيل الدخول
            </Text>

            <InputField
              label="رقم الهاتف"
              placeholder="01X XXXX XXXX"
              value={phone}
              onChangeText={setPhone}
              icon="phone"
              keyboardType="phone-pad"
              error={phoneError}
              c={c}
              isDark={isDark}
            />

            <InputField
              label="كلمة السر"
              placeholder="أدخل كلمة السر"
              value={password}
              onChangeText={setPassword}
              icon="lock"
              secureTextEntry
              error={passError}
              c={c}
              isDark={isDark}
            />

            <TouchableOpacity
              style={[styles.loginBtn, { backgroundColor: c.primary }]}
              onPress={handleLogin}
              activeOpacity={0.85}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={c.onPrimary} size="small" />
              ) : (
                <Text
                  style={[
                    styles.loginBtnText,
                    { color: c.onPrimary, fontFamily: "Tajawal-Bold" },
                  ]}
                >
                  دخول
                </Text>
              )}
            </TouchableOpacity>

            <View style={styles.divider}>
              <View
                style={[
                  styles.dividerLine,
                  { backgroundColor: c.outlineVariant },
                ]}
              />
              <Text
                style={[
                  styles.dividerText,
                  { color: c.outline, fontFamily: "Tajawal-Regular" },
                ]}
              >
                أو
              </Text>
              <View
                style={[
                  styles.dividerLine,
                  { backgroundColor: c.outlineVariant },
                ]}
              />
            </View>

            <View style={styles.registerRow}>
              <Text
                style={[
                  styles.registerText,
                  { color: c.textVariant, fontFamily: "Tajawal-Regular" },
                ]}
              >
                ليس لديك حساب؟{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.registerLink,
                    { color: c.primary, fontFamily: "Tajawal-Bold" },
                  ]}
                >
                  إنشاء حساب
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={[
              styles.ayah,
              { color: c.outline, fontFamily: "Tajawal-Regular" },
            ]}
          >
            ﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
  },

  logoArea: { alignItems: "center", marginBottom: 28 },
  logoEmblem: {
    width: 68,
    height: 68,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  logoText: { fontSize: 32, color: "#FFFFFF" },
  appName: { fontSize: 28, letterSpacing: 0.5 },
  appTagline: { fontSize: 13, marginTop: 4 },

  card: {
    width: "100%",
    maxWidth: 380,
    borderRadius: 24,
    padding: 24,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    elevation: 4,
  },
  cardTitle: { fontSize: 20, textAlign: "center", marginBottom: 24 },
  forgotWrap: { alignItems: "flex-start", marginBottom: 20, marginTop: -4 },
  forgotText: { fontSize: 13 },
  loginBtn: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  loginBtnText: { fontSize: 17, letterSpacing: 0.3 },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    gap: 10,
  },
  dividerLine: { flex: 1, height: 1 },
  dividerText: { fontSize: 13 },

  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: { fontSize: 14 },
  registerLink: { fontSize: 14 },

  ayah: { marginTop: 24, fontSize: 13, textAlign: "center", lineHeight: 22 },
});
