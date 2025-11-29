import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/form';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f6f6f6ff', dark: '#feeacf' }}
      headerImage={
        <Image
          source={require('@/assets/images/avicot.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Produce con eficiencia gestiona con avicot</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
        })}
          </ThemedText>{' '}

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Accede a tu cuenta</ThemedText>
        <ThemedText>Inicia sesión o crea una cuenta para usar la app.</ThemedText>
        <PrimaryButton title="Iniciar sesión" onPress={() => router.push('/auth/login')} />
        <PrimaryButton title="Registrarse" onPress={() => router.push('/auth/registro')} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 170,
    bottom: 30,
    left: '30%',
    position: 'absolute',
  },
});
