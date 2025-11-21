import mockDB from '@/services/mockDB';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  useEffect(() => {
    const initDB = async () => {
      try {
        await mockDB.init();
      } catch (error) {
        console.error('Failed to initialize database:', error);
      }
    };

    initDB();
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name='owners' options={{ headerShown: false }} />
      </Stack>
      <StatusBar style='dark' />
    </>
  );
}
