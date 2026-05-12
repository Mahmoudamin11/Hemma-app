// theme/useColors.ts
import { useColorScheme } from 'react-native';
import { Colors , type AppColors } from '../constants/theme/theme';

export function useColors(): AppColors {
  const scheme = useColorScheme();
  return scheme === 'dark' ? Colors.dark : Colors.light;
}