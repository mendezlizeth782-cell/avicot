import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Fonts } from '@/constants/theme';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { useAuth } from '../_context/AuthContext';

export default function RoleScreen() {
  const [role, setRole] = useState('');
  const [roleAlt, setRoleAlt] = useState('');
  const [loading, setLoadingLocal] = useState(false);
  const { updateRole } = useAuth();
  const router = useRouter();

  /* const handleSubmit = async () => {
    if (!role) return Alert.alert('Error', 'Por favor ingrese un rol.');
    setLoadingLocal(true);
    try {
      await updateRole(role);
      // after saving role, go to main app root
      router.replace('/');
    } catch (err: any) {
      Alert.alert('Error', err?.message ?? 'No se pudo guardar el rol');
    } finally {
      setLoadingLocal(false);
    }
  }; */

    const handleSubmit = () => {
        // Directly navigate to role screen for visualization (no validation or sign-up performed)
        router.push('/principal');
    };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#feeacf' }}
      headerImage={
        <Image
          source={require('@/assets/images/avicot.png')}
          style={styles.reactLogo}
        />
      }>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
            Tu rol
          </ThemedText>
        </ThemedView>

        <View style={styles.form}>
          <Input label="¿Cuál es su rol?" value={role} onChangeText={setRole} placeholder="Ej. administrador" accessibilityLabel="Rol" />
          <Input label="Otro rol (opcional)" value={roleAlt} onChangeText={setRoleAlt} placeholder="Ej. dueño" accessibilityLabel="Otro rol" />

          <PrimaryButton title={loading ? 'Cargando...' : 'Guardar rol'} onPress={handleSubmit} loading={loading} />

          <View style={styles.actionsRow}>
            <ExternalLink href="https://your-app-info.example">
              <ThemedText type="link">Ayuda</ThemedText>
            </ExternalLink>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -70,
    left: -10,
    position: 'absolute',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 18,
  },
  form: {
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  actionsRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reactLogo: {
    height: 200,
    width: 170,
    bottom: 42,
    left: '30%',
    position: 'absolute',
  },
});
