// ─── Hemma Quran App — Design System Colors ───────────────────────────────────
// Based on DESIGN.md / Figma design system
// Primary: #386641 | Secondary: #A79277 | Tertiary: #F5EFE6 | Neutral: #79747E

// ─── Light Mode ───────────────────────────────────────────────────────────────
export const lightColors = {
  // Primary (green ramp)
  primary:              '#386641', // main brand green
  onPrimary:            '#FFFFFF', // text/icons on primary
  primaryContainer:     '#497851', // elevated green surfaces
  onPrimaryContainer:   '#002109', // text on primary containers
  primaryFixed:         '#bcefc0', // subtle green tint (chips, tags)
  onPrimaryFixed:       '#002109',

  // Secondary (warm brown/taupe ramp)
  secondary:            '#A79277', // main secondary
  onSecondary:          '#FFFFFF',
  secondaryContainer:   '#C4AE97', // elevated secondary surfaces
  onSecondaryContainer: '#261A0E',
  secondaryFixed:       '#f8dfc0', // subtle warm tint

  // Tertiary (cream/background ramp)
  tertiary:             '#F5EFE6', // page background / surface
  onTertiary:           '#1C1B1F',
  tertiaryContainer:    '#EDE7DC',

  // Neutral (gray ramp)
  neutral:              '#79747E',
  neutralContainer:     '#E6E0E9',

  // Surfaces
  surface:              '#F5EFE6', // main background (cream)
  surfaceVariant:       '#EDE7DC',
  surfaceContainer:     '#EFE9E0',
  surfaceContainerLow:  '#F5EFE6',
  surfaceContainerHigh: '#E4DED5',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerHighest: '#D9D3CA',

  // Text
  onSurface:            '#1d1a22', // primary text
  onSurfaceVariant:     '#40493d', // secondary text / subtitles

  // Outline / Dividers
  outline:              '#707a6c',
  outlineVariant:       '#BFC9BB',

  // Semantic
  error:                '#B3261E',
  onError:              '#FFFFFF',
  errorContainer:       '#F9DEDC',

  // Typography
  // Headline font: Be Vietnam Pro
  // Body / Label font: Plus Jakarta Sans
} as const;

// ─── Dark Mode ────────────────────────────────────────────────────────────────
export const darkColors = {
  // Primary (light green for dark bg)
  primary:              '#a1d4a5', // lightened for dark mode visibility
  onPrimary:            '#003A10',
  primaryContainer:     '#2a4d2e',
  onPrimaryContainer:   '#bcefc0',
  primaryFixed:         '#2a4a2e',
  onPrimaryFixed:       '#bcefc0',

  // Secondary (muted warm for dark)
  secondary:            '#D4B99A', // lighter taupe for dark bg
  onSecondary:          '#3E2D1C',
  secondaryContainer:   '#3a2e1e',
  onSecondaryContainer: '#f8dfc0',
  secondaryFixed:       '#3a2e1e',

  // Tertiary
  tertiary:             '#F5EFE6', // kept same (color swatch doesn't change)
  onTertiary:           '#1C1B1F',
  tertiaryContainer:    '#2C2B2F',

  // Neutral
  neutral:              '#938F99',
  neutralContainer:     '#49454F',

  // Surfaces (very dark, near-black with green tint)
  surface:              '#121712', // main dark background
  surfaceVariant:       '#1E231F',
  surfaceContainer:     '#1A1F1B',
  surfaceContainerLow:  '#161B17',
  surfaceContainerHigh: '#252A26',
  surfaceContainerLowest: '#0D120E',
  surfaceContainerHighest: '#2F342F',

  // Text
  onSurface:            '#e4e1e9', // primary text on dark
  onSurfaceVariant:     '#b9c4b5', // secondary text on dark

  // Outline / Dividers
  outline:              '#8a9487',
  outlineVariant:       '#3A4A3C',

  // Semantic
  error:                '#F2B8B5',
  onError:              '#601410',
  errorContainer:       '#8C1D18',

} as const;

// ─── Type Export ──────────────────────────────────────────────────────────────
export type AppColors = typeof lightColors;

// ─── Typography ───────────────────────────────────────────────────────────────
export const fonts = {
  headline: 'BeVietnamPro',       // Headline / Display
  body:     'PlusJakartaSans',    // Body text
  label:    'PlusJakartaSans',    // Labels, captions
  arabic:   'Tajawal',            // Arabic text (Quran content)
} as const;

export const fontSizes = {
  displayLarge:  57,
  displayMedium: 45,
  displaySmall:  36,
  headlineLarge: 32,
  headlineMedium:28,
  headlineSmall: 24,
  titleLarge:    22,
  titleMedium:   16,
  titleSmall:    14,
  bodyLarge:     16,
  bodyMedium:    14,
  bodySmall:     12,
  labelLarge:    14,
  labelMedium:   12,
  labelSmall:    11,
} as const;

export const fontWeights = {
  regular:  '400' as const,
  medium:   '500' as const,
  semibold: '600' as const,
  bold:     '700' as const,
} as const;
