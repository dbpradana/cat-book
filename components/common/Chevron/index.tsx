import { Image, StyleSheet } from 'react-native';

export const Chevron: React.FC = () => {
  return (
    <Image
      source={require('@/assets/images/icon/ic_chevron_right.png')}
      style={styles.icon}
    />
  );
}

Chevron.displayName = 'Chevron';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
