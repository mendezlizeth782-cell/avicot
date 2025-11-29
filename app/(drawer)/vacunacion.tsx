import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const [cantidadAves, setCantidadAves] = useState('');
  const [fechaEncargado, setFechaEncargado] = useState('');
  const [tipoVacuna, setTipoVacuna] = useState('');
  const [cantidadVacunas, setCantidadVacunas] = useState('');
  const [costo, setCosto] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = () => {
    if (!cantidadAves) return Alert.alert('Error', 'Por favor indique la cantidad de aves.');
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
          Registro vacunación
        </ThemedText>
      </ThemedView>

      <View style={styles.form}>
        <Input label="Cantidad de aves" value={cantidadAves} onChangeText={setCantidadAves} placeholder="Ej. 500 aves" keyboardType="numeric" accessibilityLabel="Cantidad de aves" />
        <Input label="Fecha y encargado" value={fechaEncargado} onChangeText={setFechaEncargado} placeholder="dd/mm/año - Nombre" accessibilityLabel="Fecha y encargado" />
        <Input label="Tipo de vacuna" value={tipoVacuna} onChangeText={setTipoVacuna} placeholder="Ej. Marek" accessibilityLabel="Tipo de vacuna" />
        <Input label="Cantidad de vacunas" value={cantidadVacunas} onChangeText={setCantidadVacunas} placeholder="Ej. 500 dosis" keyboardType="numeric" accessibilityLabel="Cantidad de vacunas" />
        <Input label="Costo (COP)" value={costo} onChangeText={setCosto} placeholder="Ej. 50000" keyboardType="numeric" accessibilityLabel="Costo" />

        <PrimaryButton title={loading ? 'Cargando...' : 'Guardar'} onPress={handleSubmit} loading={loading} />

        <View style={styles.actionsRow}>
          <ExternalLink href="https://www.instagram.com/programadores_idemag/">
            <ThemedText type="link"></ThemedText>
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
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: 'black',
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#36e869ff',
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
