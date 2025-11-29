import { ThemedText } from '@/components/themed-text';
import { Fonts } from '@/constants/theme';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type InputProps = {
  label?: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  accessibilityLabel?: string;
};

export function Input(props: InputProps) {
  return (
    <View style={styles.field}>
      {props.label ? <ThemedText style={styles.label}>{props.label}</ThemedText> : null}
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="#9AA0A6"
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        autoCapitalize="none"
        style={styles.input}
        accessibilityLabel={props.accessibilityLabel}
      />
    </View>
  );
}

export function PrimaryButton({ title, onPress, loading }: { title: string; onPress: () => void; loading?: boolean }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && { opacity: 0.85 }]} disabled={loading}>
      <Text style={styles.buttonText}>{loading ? 'Cargando...' : title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  field: { marginBottom: 12 },
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
  button: {
    marginTop: 12,
    backgroundColor: '#2f80ed',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontFamily: Fonts.rounded, fontSize: 16, marginHorizontal: 10},
});
