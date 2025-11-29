import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const [alimentoTipo, setAlimentoTipo] = useState('');
  const [cantidadBultos, setCantidadBultos] = useState('');
  const [fechaAlimentacion, setFechaAlimentacion] = useState('');
  const [galpon, setGalpon] = useState('');
  const [costo, setCosto] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = () => {
    if (!alimentoTipo) return Alert.alert('Error', 'Por favor ingrese el tipo de alimento.');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Éxito', 'Registro guardado.');
    }, 700);
  };

  return (

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts.rounded,
            }}>
            Alimentación
          </ThemedText>
        </ThemedView>

        <View style={styles.form}>
          <Input label="Tipo de alimento" value={alimentoTipo} onChangeText={setAlimentoTipo} placeholder="Ej. Concentrado, Maíz" accessibilityLabel="Tipo de alimento" />

          <Input label="Cantidad de bultos" value={cantidadBultos} onChangeText={setCantidadBultos} placeholder="Ej. 5 bultos" keyboardType="numeric" accessibilityLabel="Cantidad de bultos" />

          <Input label="Fecha de alimentación" value={fechaAlimentacion} onChangeText={setFechaAlimentacion} placeholder="dd/mm/yyyy" accessibilityLabel="Fecha de alimentación" />

          <Input label="Galpón" value={galpon} onChangeText={setGalpon} placeholder="Ej. Galpón 1" accessibilityLabel="Galpón" />

          <Input label="Costo (COP)" value={costo} onChangeText={setCosto} placeholder="Ej. 50000" keyboardType="numeric" accessibilityLabel="Costo" />

          <PrimaryButton title={loading ? 'Cargando...' : 'Guardar'} onPress={handleSubmit} loading={loading} />

          <View style={styles.actionsRow}>
            <ExternalLink href="https://www.instagram.com/programadores_idemag/">
              <ThemedText type="link">Ayuda</ThemedText>
            </ExternalLink>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    backgroundColor: 'transparent',
  },
  form: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    color: 'black',
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
  },
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
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showBtn: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  button: {
    marginTop: 22,
    backgroundColor: '#2f80ed',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: Fonts.rounded,
    fontSize: 16,
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
