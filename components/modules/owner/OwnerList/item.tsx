import { Card, Chevron, OwnersInitialView, ThemedText } from '@/components';
import { spacing } from '@/constants';
import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, View } from 'react-native';

interface OwnerData {
  data: any;
}

export const OwnerListItem: React.FC<OwnerData> = ({ data }) => {
  const router = useRouter();

  return (
    <Pressable onPress={() => {
      router.push(`/owners/${data?.id ?? ''}`)
    }}>
      <Card style={styles.card}>
        <OwnersInitialView data={data}/>

        <ThemedText style={styles.flex}>
          {`${data?.firstName} ${data?.lastName}`}
        </ThemedText>

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
