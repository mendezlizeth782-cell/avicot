import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function App() {
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
          Tabla de Datos
        </ThemedText>
      </ThemedView>
      <View>
        <DataTable>
          <DataTable.Header >
            <DataTable.Title><Text style={styles.cellText}>Lote</Text></DataTable.Title>
            <DataTable.Title><Text style={styles.cellText}>teBultos</Text></DataTable.Title>
            <DataTable.Title><Text style={styles.cellText}>Cantidad</Text></DataTable.Title>
            <DataTable.Title><Text style={styles.cellText}>Cantidad unitaria</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={styles.cellText}>Total</Text></DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell><Text style={styles.cellText}>1</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.cellText}>15</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.cellText}>15</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.cellText}>15.000</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={styles.cellText}>350,000</Text></DataTable.Cell>
          </DataTable.Row>

        </DataTable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cellText: {
    color: '#ffffff',},
});
