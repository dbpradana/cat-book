import { Card, Chevron, ThemedText } from '@/components';
import { Colors, spacing } from '@/constants';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

interface CatListItemProps {
  data?: any;
}

export const CatListItem: React.FC<CatListItemProps> = ({ data }) => {
  const router = useRouter();

  return (
    <Pressable onPress={() => { }}>
      <Card style={styles.card}>
        <View style={styles.textContainer}>
          <ThemedText weight={'medium'}>{data?.name}</ThemedText>
          <ThemedText size={12} color={Colors.text.secondary}>{`Age: ${data?.age} years ${data?.month ?? '2'} months`}</ThemedText>
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
