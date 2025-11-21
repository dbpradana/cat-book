import { CatList, OwnerDetailCard, ThemedText } from '@/components';
import { Button } from '@/components/common/Button';
import { Colors, spacing } from '@/constants';
import mockDB from '@/services/mockDB';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function CatOwnerDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [user, setUser] = useState(null);

  const loadUserDetail = async () => {
    const response = await mockDB.loadUserDetail(Number(id));

    if (response.success) {
      setUser(response.data);
      console.log('Loaded user:', response.data);
    } else {
      console.error('Error loading users:', response.error);
    }
  };

  useEffect(() => {
    console.log(id)
    loadUserDetail();
  }, [id]);

  const setMaster = async () => {
    await AsyncStorage.setItem('MASTER', JSON.stringify(user));
  }

  return (
    <View style={styles.mainContainer}>
      <ThemedText style={styles.headerLabel}>Owner Card</ThemedText>
      <OwnerDetailCard style={styles.ownerCard} data={user} />

      <ThemedText style={styles.headerLabel}>Cats</ThemedText>
      <CatList data={user} />

      <Button
        title={'Make Master'}
        style={styles.button}
        onPress={() => setMaster()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: spacing._2xl,
    backgroundColor: Colors.background,
  },
  headerLabel: {
    paddingHorizontal: spacing._2xl,
    color: Colors.text.secondary,
  },
  ownerCard: {
    marginTop: spacing.lg,
    marginBottom: spacing._2xl,
  },
  button: {
    marginBottom: spacing.xl,
    marginHorizontal: spacing._6xl,
  },
});
