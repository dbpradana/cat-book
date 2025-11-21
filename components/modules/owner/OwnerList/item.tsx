import { Card, Chevron, OwnersInitialView, ThemedText } from '@/components';
import { spacing } from '@/constants';
import mockDB from '@/services/mockDB';
import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export const OwnerListItem: React.FC = ({ }) => {
  const router = useRouter();

  const test = async () => {
    
    await mockDB.init();
  }

  return (
    <Pressable onPress={() => {
      router.push('/owners/123')
      test()
    }}>
      <Card style={styles.card}>
        <OwnersInitialView />

        <ThemedText style={styles.flex}>Roman Pearce</ThemedText>

        <View style={styles.actionContainer}>
          <Image
            source={require('@/assets/images/icon/ic_star.png')}
            style={styles.icon}
          />
          <Chevron />
        </View>
      </Card>
    </Pressable>
  );
}

OwnerListItem.displayName = 'OwnerListItem';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  card: {
    gap: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  actionContainer: {
    gap: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
