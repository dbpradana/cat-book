import { Colors } from '@/constants';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  title,
  style,
  loading,
  onPress,
  disabled,
  ...restOfPressableProps
}) => {
  const computedContainerStyle = StyleSheet.flatten({
    ...styles.buttonContainer,
    ...style,
    opacity: disabled ? 0.8 : 1,
  });

  return (
    <Pressable
      role={'button'}
      disabled={disabled}
      style={computedContainerStyle}
      {...restOfPressableProps}
    >
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <ThemedText size={18} color={Colors.offWhite}>
          {title}
        </ThemedText>
      )}
    </Pressable >
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
  },
});
