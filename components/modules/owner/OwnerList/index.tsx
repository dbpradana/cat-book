import { spacing } from '@/constants';
import mockDB from '@/services/mockDB';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { OwnerListItem } from './item';

export const OwnerList: React.FC = ({ }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const [sortBy, setSortBy] = useState<'name' | 'cats'>('name');

  const loadUsers = async () => {
    setLoading(true);
    const response = await mockDB.loadUserList({
      page,
      sortBy,
      limit: 10,
    });

    if (response.success) {
      setUsers(response.data);
      setPagination(response.pagination);
      console.log('Loaded users:', response.data);
    } else {
      console.error('Error loading users:', response.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, [page, sortBy]);

  return (
    <FlatList
      data={users}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => <OwnerListItem data={item} />}
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
