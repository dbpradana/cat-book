import { Header } from '@/components/ui/Header';
import { Stack } from 'expo-router';

export default function OwnerLayout() {
  return (
    <Stack screenOptions={{ header: () => <Header /> }}>
      <Stack.Screen name='index' options={{ header: () => <Header showBackButton={false} /> }} />
      <Stack.Screen name='[id]' />
    </Stack>
  );
}
