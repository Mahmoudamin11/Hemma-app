import { Colors } from "@/constants/theme/theme";

// ── Derived directly from the Colors object — always in sync, no manual typing ─
export type ColorScheme = "light" | "dark";

export type AppColors = (typeof Colors)[ColorScheme];

// Convenience: the full Colors map shape
export type AppColorTokens = typeof Colors;