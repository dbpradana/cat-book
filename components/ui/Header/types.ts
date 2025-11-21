import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface HeaderProps extends ViewProps {
  showBackButton?: boolean;
  onBackButtonPress?: () => void;
  additionalBackButtonAction?: () => void;
  additionalTopPadding?: number;
  containerStyle?: StyleProp<ViewStyle>;
}
