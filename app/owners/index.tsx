// import { OwnerList } from '@/components';
import { OwnerList, ThemedText } from '@/components';
import { spacing } from '@/constants';
import { Colors } from '@/constants/theme';
import mockDB from '@/services/mockDB';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function CatOwnerHomeScreen() {
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
      // setUsers(response.data);
      // setPagination(response.pagination);
      console.log('Loaded users:', response.data);
    } else {
      console.error('Error loading users:', response.error);
    }
    setLoading(false);
  };

  // Reload when page or filters change
  useEffect(() => {
    loadUsers();
  }, [page, sortBy]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentHeader}>
        <ThemedText color={Colors.text.secondary}>Owners List</ThemedText>
        <View style={styles.sortContainer}>
          <ThemedText size={12}>Sort by: Name</ThemedText>
          <Image
            source={require('@/assets/images/icon/ic_dropdown.png')}
            style={styles.dropdownIcon}
          />
        </View>
      </View>

      <OwnerList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // gap: spacing._2xl,
    paddingVertical: spacing._2xl,
    backgroundColor: Colors.background,
  },
  contentHeader: {
    flexDirection: 'row',
    paddingHorizontal: spacing._2xl,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  sortContainer: {
    gap: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownIcon: {
    width: 16,
    height: 16,
  },
});
