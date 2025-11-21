import { Colors } from '@/constants/theme';
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { CardProps } from './types';

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  style,
  children,
  ...restOfViewProps
}) => {
  return (
    <View style={[styles.container, style]} {...restOfViewProps}>
      {children}
    </View>
  );
};

Card.displayName = 'Card';

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    borderRadius: 12,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 8,
  },
});
