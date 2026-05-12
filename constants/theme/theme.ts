/**
 * Hemma Quran App — Design System Tokens
 * Primary: #386641 | Secondary: #A79277 | Tertiary: #F5EFE6 | Neutral: #79747E
 * Headline: Be Vietnam Pro | Body/Label: Plus Jakarta Sans | Arabic: Tajawal
 */

import { Platform } from "react-native";

export const Colors = {
  light: {
    // ── Surfaces ──────────────────────────────────────────────────────────────
    background: "#F5EFE6", // cream page background
    surface: "#F5EFE6",
    surfaceVariant: "#EDE7DC",
    surfaceContainer: "#EFE9E0",
    surfaceContainerLow: "#F5EFE6",
    surfaceContainerHigh: "#E4DED5",
    surfaceContainerLowest: "#FFFFFF",
    surfaceContainerHighest: "#D9D3CA",

    // ── Text ──────────────────────────────────────────────────────────────────
    text: "#1d1a22", // onSurface — primary text
    textVariant: "#40493d", // onSurfaceVariant — secondary text

    // ── Primary (green) ───────────────────────────────────────────────────────
    primary: "#386641",
    onPrimary: "#FFFFFF",
    primaryContainer: "#497851",
    onPrimaryContainer: "#002109",
    primaryFixed: "#bcefc0",
    tint: "#386641", // tab selected / links

    // ── Secondary (warm taupe) ────────────────────────────────────────────────
    secondary: "#A79277",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#C4AE97",
    onSecondaryContainer: "#261A0E",
    secondaryFixed: "#f8dfc0",

    // ── Neutral ───────────────────────────────────────────────────────────────
    outline: "#707a6c",
    outlineVariant: "#BFC9BB",

    // ── Icons / Tabs ──────────────────────────────────────────────────────────
    icon: "#707a6c",
    tabIconDefault: "#707a6c",
    tabIconSelected: "#386641",

    // ── Semantic ──────────────────────────────────────────────────────────────
    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
  },

  dark: {
    // ── Surfaces ──────────────────────────────────────────────────────────────
    background: "#161618", // pure dark, no green tint
    surface: "#161618",
    surfaceVariant: "#1F1F22",
    surfaceContainer: "#1C1C1F",
    surfaceContainerLow: "#191919",
    surfaceContainerHigh: "#242428",
    surfaceContainerLowest: "#111113",
    surfaceContainerHighest: "#2C2C30",

    // ── Text ──────────────────────────────────────────────────────────────────
    text: "#E8E8ED", // slightly cool white, matches screenshot
    textVariant: "#A0A0A8",

    // ── Primary (lightened green for dark bg) ─────────────────────────────────
    primary: "#a1d4a5",
    onPrimary: "#003A10",
    primaryContainer: "#2a4d2e",
    onPrimaryContainer: "#bcefc0",
    primaryFixed: "#2a4a2e",
    tint: "#a1d4a5",

    // ── Secondary ─────────────────────────────────────────────────────────────
    secondary: "#D4B99A",
    onSecondary: "#3E2D1C",
    secondaryContainer: "#3a2e1e",
    onSecondaryContainer: "#f8dfc0",
    secondaryFixed: "#3a2e1e",

    // ── Neutral ───────────────────────────────────────────────────────────────
    outline: "#8a9487",
    outlineVariant: "#3A3A3F",

    // ── Icons / Tabs ──────────────────────────────────────────────────────────
    icon: "#8A8A93",
    tabIconDefault: "#8A8A93",
    tabIconSelected: "#a1d4a5",

    // ── Semantic ──────────────────────────────────────────────────────────────
    error: "#F2B8B5",
    onError: "#601410",
    errorContainer: "#8C1D18",
  },
};

// ─── Typography ───────────────────────────────────────────────────────────────
export const Fonts = Platform.select({
  ios: {
    sans: "normal",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const AppFonts = {
  headline: "BeVietnamPro", // Be Vietnam Pro — Display & Headline
  body: "PlusJakartaSans", // Plus Jakarta Sans — Body & Labels
  arabic: "Tajawal", // Tajawal — Arabic / Quran content
} as const;

export const FontSizes = {
  displayLarge: 57,
  displayMedium: 45,
  displaySmall: 36,
  headlineLarge: 32,
  headlineMedium: 28,
  headlineSmall: 24,
  titleLarge: 22,
  titleMedium: 16,
  titleSmall: 14,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,
  labelLarge: 14,
  labelMedium: 12,
  labelSmall: 11,
} as const;

export const FontWeights = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
} as const;

// ─── Helper type for typed color access ───────────────────────────────────────
export type AppColors = typeof Colors.light;
