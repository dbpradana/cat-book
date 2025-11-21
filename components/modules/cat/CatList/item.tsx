import { Card, Chevron, ThemedText } from '@/components';
import { Colors, spacing } from '@/constants';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

export const CatListItem: React.FC = ({ }) => {
  const router = useRouter();

  return (
    <Pressable onPress={() => { }}>
      <Card style={styles.card}>
        <View style={styles.textContainer}>
          <ThemedText weight={'medium'}>Kitty</ThemedText>
          <ThemedText size={12} color={Colors.text.secondary}>Age: 3 years 1 month</ThemedText>
        </View>

        <Chevron />
      </Card>
    </Pressable>
  );
}

CatListItem.displayName = 'CatListItem';

const styles = StyleSheet.create({
  card: {
    gap: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17.5,
    paddingHorizontal: spacing.lg,
  },
  textContainer: {
    flex: 1,
    gap: spacing.sm,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
