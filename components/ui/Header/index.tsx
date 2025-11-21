import { ThemedText } from '@/components/common';
import { Colors, spacing } from '@/constants';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OwnersInitialView } from '../OwnersInitialView';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  showBackButton = true,
  onBackButtonPress,
  additionalBackButtonAction,
  containerStyle,
}) => {
  const router = useRouter();

  const backButtonPressHandler = () => {
    if (!!onBackButtonPress) return onBackButtonPress();
    if (!!additionalBackButtonAction) {
      additionalBackButtonAction();
    }

    router.back();
  };

  const masterContainerStyle = StyleSheet.flatten({
    ...styles.masterContainer,
    ...(showBackButton && { marginRight: 24 }),
  });

  return (
    <SafeAreaView edges={['top']} style={[styles.container, containerStyle]} >
      <View style={styles.contentContainer} >
        {!!showBackButton && (
          <TouchableOpacity
            activeOpacity={0.7}
            hitSlop={spacing.md}
            onPress={backButtonPressHandler}
          >
            <Image
              source={require('@/assets/images/icon/ic_back.png')}
              style={styles.backButton}
            />
          </TouchableOpacity>
        )}

        <View style={masterContainerStyle}>
          <OwnersInitialView />
          <ThemedText weight={'medium'}>
            Master: Roman Pearce
          </ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 24,
    height: 24,
  },
  container: {
    backgroundColor: Colors.background,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
  },
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  masterContainer: {
    flex: 1,
    gap: spacing.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
