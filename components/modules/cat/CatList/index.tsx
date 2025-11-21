import { spacing } from '@/constants';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { CatListItem } from './item';

interface CatListProps {
  data?: any;
}

export const CatList: React.FC<CatListProps> = ({ data }) => {
  const router = useRouter();
  const catList = data?.cats ?? [];

  return (
    <FlatList
      data={catList}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => <CatListItem data={item} />}
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
