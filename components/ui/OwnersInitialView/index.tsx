import { ThemedText } from '@/components/common';
import { Colors } from '@/constants';
import { StyleSheet, View } from 'react-native';
import { OwnersInitialViewProps } from './types';

export const OwnersInitialView: React.FC<OwnersInitialViewProps> = ({
  data,
  size = 'default',
  preset = 'default',
}) => {
  const initials = `${data?.firstName[0]}${data?.lastName[0]}`.toUpperCase();

  const containerStyle = StyleSheet.flatten({
    ...styles.mainContainer,
    width: size === 'default' ? 40 : 56,
    height: size === 'default' ? 40 : 56,
    borderWidth: size === 'default' ? 1 : 1.5,
    backgroundColor: preset === 'default' ? Colors.gray : Colors.sand,
    borderColor: preset === 'default' ? Colors.lightGray : Colors.green,
  });

  const labelStyle = StyleSheet.flatten({
    color: preset === 'default' ? Colors.white : Colors.green,
    fontSize: size === 'default' ? 14 : 20,
  });

  return (
    <View style={containerStyle}>
      <ThemedText style={labelStyle}>{initials}</ThemedText>
    </View>
  );
};

OwnersInitialView.displayName = 'OwnersInitialView';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
});
