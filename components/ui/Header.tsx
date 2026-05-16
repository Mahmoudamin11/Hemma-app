import { Colors } from "@/constants/theme/theme";
import { PRJOECT_NAME } from "@/constants/names";
import { StyleSheet, Text, useColorScheme } from "react-native";
import Logo from "@/components/ui/Logo";

export default function Header({iconSize = 72}: {iconSize?: number}) {
  const scheme = useColorScheme();
  const colors = Colors[scheme ?? "light"];

  return (
    <>
      <Logo size={iconSize} />

      <Text style={[styles.brandName, { color: colors.primary }]}>
        {PRJOECT_NAME}
      </Text>

      <Text style={[styles.tagline, { color: colors.textVariant }]}>
        رحلتك في رحاب القرآن
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  brandName: {
    fontFamily: "Tajawal",
    fontWeight: "700",
    fontSize: 44,
    textAlign: "center",
    letterSpacing: -1,
    marginBottom: 0,
    includeFontPadding: false,
    writingDirection: "rtl",
},
tagline: {
    fontFamily: "Tajawal",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    opacity: 0.8,
    writingDirection: "rtl",
    marginTop: -8,
    marginBottom: 24,

  },
});