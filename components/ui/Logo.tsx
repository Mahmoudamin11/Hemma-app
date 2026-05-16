import { Colors } from "@/constants/theme/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, useColorScheme, View } from "react-native";

export default function Logo({size = 72}: {size?: number}) {
  const scheme = useColorScheme();
  const colors = Colors[scheme ?? "light"];

  return (
    <View style={styles.iconCard}>
      <View
        style={[
          styles.iconInner,
          {
            backgroundColor: colors.surfaceContainerLowest,
            shadowColor: colors.text,
          },
        ]}
      >
        <MaterialIcons name="menu-book" size={size} color={colors.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconCard: {
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  iconInner: {
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
    elevation: 4,
  },
});