import { PressableProps, ViewStyle } from 'react-native';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  title?: string;
  loading?: boolean;
  style?: ViewStyle;
}
