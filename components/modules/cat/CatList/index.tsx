import { spacing } from '@/constants';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { CatListItem } from './item';

export const CatList: React.FC = ({ }) => {
  const router = useRouter();

  return (
    <FlatList
      data={Array.from({ length: 3 })}
      keyExtractor={(_, index) => `${index}`}
      renderItem={() => <CatListItem />}
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

CatList.displayName = 'CatList';

const styles = StyleSheet.create({
  contentContainer: {
    padding: spacing._2xl,
    paddingTop: spacing.sm,
  },
  separator: {
    height: spacing.sm,
  },
});
