import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface CardProps extends ViewProps {
  /**
   * Style overrides that replaces original `style` prop.
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
}
