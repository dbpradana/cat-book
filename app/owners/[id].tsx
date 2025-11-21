import { CatList, OwnerDetailCard, ThemedText } from '@/components';
import { Button } from '@/components/common/Button';
import { Colors, spacing } from '@/constants';
import { StyleSheet, View } from 'react-native';

export default function CatOwnerDetailScreen() {
  return (
    <View style={styles.mainContainer}>
      <ThemedText style={styles.headerLabel}>Owner Card</ThemedText>
      <OwnerDetailCard style={styles.ownerCard} />

      <ThemedText style={styles.headerLabel}>Cats</ThemedText>
      <CatList />

      <Button title={'Make Master'} style={styles.button} />
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
