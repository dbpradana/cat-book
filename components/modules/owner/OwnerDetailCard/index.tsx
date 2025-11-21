import { Card, OwnersInitialView, ThemedText } from '@/components';
import { Colors, spacing } from '@/constants';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import { OwnerDetailCardProps } from './types';

export const OwnerDetailCard: React.FC<OwnerDetailCardProps> = ({ data, style }) => {
  const router = useRouter();

  return (
    <Card style={[styles.card, style]}>
      <OwnersInitialView size={'large'} data={data} />

      <View style={styles.flex}>
        <View style={{ gap: 8 }}>
          <ThemedText size={12} color={Colors.text.secondary}>First Name</ThemedText>
          <ThemedText>{data?.firstName}</ThemedText>
        </View>
        <View style={{ gap: 8 }}>
          <ThemedText size={12} color={Colors.text.secondary}>Last Name</ThemedText>
          <ThemedText>{data?.lastName}</ThemedText>
        </View>
      </View>

      <Image
        source={require('@/assets/images/icon/ic_star.png')}
        style={styles.icon}
      />
    </Card>
  );
}

OwnerDetailCard.displayName = 'OwnerDetailCard';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    gap: spacing.md,
  },
  card: {
    gap: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginHorizontal: spacing._2xl,
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
