import { Colors } from '@/constants';
import { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { ThemedTextProps } from './types';

export const ThemedText: React.FC<PropsWithChildren<ThemedTextProps>> = ({
  color = Colors.text.primary,
  weight = 'book',
  size = 14,
  children,
  style: propStyle,
  ...restOfTextProps
}) => {
  const computedTextStyle: TextStyle = StyleSheet.flatten({
    ...styles.text,
    fontFamily: weight === 'medium' ? 'CircularStd-Medium' : 'CircularStd-Book',
    textAlignVertical: 'center',
    includeFontPadding: false,
    fontSize: size,
    color: color,
  });

  return (
    <Text
      {...restOfTextProps}
      style={[computedTextStyle, propStyle]}
    >
      {children}
    </Text>
  );
};


const styles = StyleSheet.create({
  text: {
    // flex: 1,
  },
});
