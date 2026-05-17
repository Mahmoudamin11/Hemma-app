import { AppColors } from "@/constants/theme/theme.types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  icon: "user" | "phone" | "lock";
  secureTextEntry?: boolean;
  keyboardType?: "default" | "phone-pad" | "email-address";
  error?: string;
  c: AppColors;
  isDark: boolean;
}

// ── Icon name map ─────────────────────────────────────────────────────────────
const ICON_MAP: Record<
  InputFieldProps["icon"],
  keyof typeof MaterialIcons.glyphMap
> = {
  user: "person",
  phone: "phone-android",
  lock: "lock",
};

function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  secureTextEntry = false,
  keyboardType = "default",
  error,
  c,
  isDark,
}: InputFieldProps) {
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(false);

  const fieldBg = isDark ? c.surfaceContainerHigh : c.surfaceContainerLowest;
  const iconColor = c.secondary;
  const idleBorderColor = isDark ? c.outlineVariant : "transparent";
  const idleBorderWidth = isDark ? 1 : 0;

  return (
    <View style={styles.fieldWrapper}>
      <Text
        style={[styles.label, { color: c.text, fontFamily: "Tajawal-Bold" }]}
      >
        {label}
      </Text>

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: fieldBg,
            borderColor: focused
              ? c.primary
              : error
                ? c.error
                : idleBorderColor,
            borderWidth: focused || !!error ? 1.5 : idleBorderWidth,
            shadowColor: isDark ? "transparent" : c.text,
            shadowOpacity: isDark ? 0 : 0.07,
          },
        ]}
      >
        {/* Leading icon */}
        <View style={styles.iconWrap}>
          <MaterialIcons name={ICON_MAP[icon]} size={22} color={iconColor} />
        </View>

        <TextInput
          style={[
            styles.input,
            {
              color: c.text,
              fontFamily: "Tajawal-Regular",
              textAlign: "right",
              writingDirection: "rtl",
            },
          ]}
          // and add these props:
          textAlign="right"
          textContentType="none"
          selection={
            focused ? undefined : { start: value.length, end: value.length }
          }
          textAlignVertical="center"
          placeholder={placeholder}
          placeholderTextColor={c.outlineVariant}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPass}
          keyboardType={keyboardType}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoCorrect={false}
        />

        {/* Eye toggle */}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPass((p) => !p)}
            style={styles.eyeBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            accessibilityLabel="إظهار أو إخفاء كلمة السر"
          >
            <MaterialIcons
              name={showPass ? "visibility" : "visibility-off"}
              size={20}
              color={c.outline}
            />
          </TouchableOpacity>
        )}
      </View>

      {error ? (
        <Text
          style={[
            styles.errorText,
            { color: c.error, fontFamily: "Tajawal-Regular" },
          ]}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  fieldWrapper: {
    marginBottom: 16,
    width: "100%", // Ensure the wrapper takes full width
  },
  label: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 8,
    width: "100%",
    alignSelf: "flex-end", // Explicitly push the component to the end (right)
    writingDirection: "rtl",
  },
  inputContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  iconWrap: {
    marginLeft: 10,
    width: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  input: { flex: 1, fontSize: 15, padding: 0, margin: 0 },
  eyeBtn: { marginRight: 8, opacity: 0.7 },
  errorText: { fontSize: 12, textAlign: "left", marginTop: 5, marginRight: 8 },
});
