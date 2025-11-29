import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const [cantidadGalpones, setCantidadAves] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoEncargado, setTipoVacuna] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = () => {
    if (!cantidadGalpones) return Alert.alert('Error', 'Por favor indique la cantidad de aves.');
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
          Galpon
        </ThemedText>
      </ThemedView>

      <View style={styles.form}>
      <Input label="Galpon" value={cantidadGalpones} onChangeText={setCantidadAves} placeholder="Ej.1,2,3" keyboardType="numeric" accessibilityLabel="Galpon" />
      <Input label="Fecha inicio" value={cantidadGalpones} onChangeText={setCantidadAves} placeholder="dd/mm/año" keyboardType="numeric" accessibilityLabel="Fechas" />
      <Input label="Encargado " value={tipoEncargado} onChangeText={setTipoVacuna} placeholder="Ej. Manuel" accessibilityLabel="Encargado" />
      <Input label="Fecha Finalización" value={cantidadGalpones} onChangeText={setCantidadAves} placeholder="dd/mm/año" keyboardType="numeric" accessibilityLabel="Fechas" />

        <PrimaryButton title={loading ? 'Cargando...' : 'Guardar'} onPress={handleSubmit} loading={loading} />

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
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  actionsRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
