import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Fonts } from '@/constants/theme';
import { useRouter } from 'expo-router';

export default function RegistroScreen() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const router = useRouter();

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = () => {
    // Directly navigate to role screen for visualization (no validation or sign-up performed)
    router.push('/auth/rol');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Registro
        </ThemedText>
      </ThemedView>

      <View style={styles.form}>
        <Input label="Nombre" value={name} onChangeText={setName} placeholder="Ej. Juan Perez" accessibilityLabel="Nombre" />
        <Input label="Teléfono" value={phone} onChangeText={setPhone} placeholder="Ej. 3106934973" keyboardType="phone-pad" accessibilityLabel="Teléfono" />
        <Input label="Correo electrónico" value={email} onChangeText={setEmail} placeholder="tu@correo.com" keyboardType="email-address" accessibilityLabel="Correo electrónico" />
        <Input label="Contraseña" value={password} onChangeText={setPassword} placeholder="Ingrese una contraseña" secureTextEntry />

        <PrimaryButton title="Registrarse" onPress={handleSubmit} />
          {/* loading={loading}  */}
        <View style={styles.actionsRow}>
          <ExternalLink href="https://your-app-info.example">
            <ThemedText type="link"></ThemedText>
          </ExternalLink>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerImage: { color: '#808080', bottom: -70, left: -10, position: 'absolute' },
  container: { paddingHorizontal: 20, paddingTop: 40, paddingBottom: 60 },
  titleContainer: { flexDirection: 'row', gap: 8, marginBottom: 18 },
  form: { backgroundColor: 'transparent', borderRadius: 8 },
  label: { marginBottom: 6, fontSize: 14, color: 'black' },
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
