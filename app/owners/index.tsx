// import { OwnerList } from '@/components';
import { OwnerList, ThemedText } from '@/components';
import { spacing } from '@/constants';
import { Colors } from '@/constants/theme';
import { Image, StyleSheet, View } from 'react-native';

export default function CatOwnerHomeScreen() {
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
