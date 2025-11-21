import { spacing } from '@/constants';
import { FlatList, StyleSheet, View } from 'react-native';
import { OwnerListItem } from './item';

export const OwnerList: React.FC = ({ }) => {
  return (
    <FlatList
      data={Array.from({ length: 10 })}
      keyExtractor={(_, index) => `${index}`}
      renderItem={() => <OwnerListItem />}
      contentContainerStyle={styles.listContentContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

OwnerList.displayName = 'OwnerList';

const styles = StyleSheet.create({
  listContentContainer: {
    padding: spacing._2xl,
  },
  separator: {
    height: spacing.lg,
  },
});
