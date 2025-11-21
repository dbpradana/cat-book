import { TextProps } from 'react-native';

export interface ThemedTextProps extends TextProps {
  weight?: 'book' | 'medium';
  color?: string;
  size?: number;
}
