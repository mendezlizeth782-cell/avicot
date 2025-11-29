import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const [diseaseName, setDiseaseName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cost, setCost] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = () => {
    if (!diseaseName) return Alert.alert('Error', 'Por favor complete el nombre de la enfermedad.');
    setLoading(true);
    // TODO: reemplazar por lógica real de guardado
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
          Registre una Enfermedad
        </ThemedText>
      </ThemedView>

      <View style={styles.form}>
        <Input label="Nombre de la enfermedad" value={diseaseName} onChangeText={setDiseaseName} placeholder="Ej. fiebre aftosa" accessibilityLabel="Nombre de la enfermedad" />
        <Input label="Síntomas" value={symptoms} onChangeText={setSymptoms} placeholder="Ej. pérdida de peso" accessibilityLabel="Síntomas" />
        <Input label="Fecha de inicio" value={startDate} onChangeText={setStartDate} placeholder="dd/mm/año" accessibilityLabel="Fecha de inicio" />
        <Input label="Fecha de finalización" value={endDate} onChangeText={setEndDate} placeholder="dd/mm/año" accessibilityLabel="Fecha de finalización" />

        <Input label="Costo (COP)" value={cost} onChangeText={setCost} placeholder="Ej. 50000" keyboardType="numeric" accessibilityLabel="Costo" />

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
  headerImage: {
    color: '#13dd3bff',
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
    alignItems: 'center',
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
