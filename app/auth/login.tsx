import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Fonts } from '@/constants/theme';
import { useAuth } from '../_context/AuthContext';
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const { loading, signIn } = useAuth();
  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) return Alert.alert('Error', 'Por favor complete todos los campos.');
    if (!validateEmail(email)) return Alert.alert('Error', 'Ingrese un correo válido.');

    try {
      await signIn(email.trim(), password);
    } catch (err: any) {
      // signIn already shows an Alert in context, but ensure we catch here as well
      Alert.alert('Error', err?.message ?? 'No se pudo iniciar sesión');
    }
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
            Iniciar sesión
          </ThemedText>
        </ThemedView>

        <View style={styles.form}>
          <Input label="Correo electrónico" value={email} onChangeText={setEmail} placeholder="tu@correo.com" keyboardType="email-address" accessibilityLabel="Correo electrónico" />

          <Input label="Contraseña" value={password} onChangeText={setPassword} placeholder="Ingrese su contraseña" secureTextEntry />

          <PrimaryButton title="Iniciar sesión" onPress={() => router.push('/(drawer)/principal')}/>

          <View style={styles.actionsRow}>
            <TouchableOpacity onPress={() => Alert.alert('Recuperar', 'Función de recuperar contraseña.')}> 
              <ThemedText type="link">¿Olvidaste tu contraseña?</ThemedText>
            </TouchableOpacity>

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
  headerImage: { color: '#808080', bottom: -70, left: -10, position: 'absolute' },
  container: { paddingHorizontal: 20, paddingTop: 40, paddingBottom: 60 },
  titleContainer: { flexDirection: 'row', gap: 8, marginBottom: 18 },
  form: { backgroundColor: 'transparent', borderRadius: 8 },
  label: { marginBottom: 6, fontSize: 14 },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#111111',
  },
  passwordRow: { flexDirection: 'row', alignItems: 'center' },
  showBtn: { marginLeft: 8, paddingHorizontal: 8, paddingVertical: 6 },
  button: { marginTop: 22, backgroundColor: '#2f80ed', height: 48, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  buttonPressed: { opacity: 0.85 },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: '#ffffff', fontFamily: Fonts.rounded, fontSize: 16 },
  actionsRow: { marginTop: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  reactLogo: { height: 200, width: 170, bottom: 42, left: '30%', position: 'absolute' },
});
