import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Input, PrimaryButton } from '@/components/ui/form';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, View } from 'react-native';

export default function ConfiguracionesScreen() {
    const colorScheme = useColorScheme();
    const theme = colorScheme ?? 'dark';

    const [notif, setNotif] = useState(true);
    const [autoSync, setAutoSync] = useState(false);
    const [biometric, setBiometric] = useState(false);
    const [analytics, setAnalytics] = useState(true);
    const [language, setLanguage] = useState<'es' | 'en'>('es');
    const [email, setEmail] = useState('usuario@ejemplo.com');
    const [password, setPassword] = useState('');

    function onSave() {
        Alert.alert('Configuraciones', 'Cambios guardados (sólo visual en esta demo)');
    }

    return (
        <ThemedView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>

                <View style={styles.section}>
                    <ThemedText type="subtitle">Apariencia</ThemedText>
                    <View style={styles.row}>{/* Theme selector visual */}
                        <PrimaryButton title={language === 'es' ? 'Español' : 'English'} onPress={() => setLanguage(language === 'es' ? 'en' : 'es')} />
                    </View>
                    <View style={styles.row}>
                        <PrimaryButton title="Tema: Claro" onPress={() => { }} />
                        <PrimaryButton title="Tema: Oscuro" onPress={() => { }} />
                    </View>
                </View>

                <View style={styles.section}>
                    <ThemedText type="subtitle">Notificaciones</ThemedText>
                    <View style={styles.rowRight}>
                        <ThemedText>Recibir notificaciones</ThemedText>
                        <Switch value={notif} onValueChange={setNotif} thumbColor={Colors[theme].tint} />
                    </View>
                    <View style={styles.rowRight}>
                        <ThemedText>Auto-sincronización</ThemedText>
                        <Switch value={autoSync} onValueChange={setAutoSync} thumbColor={Colors[theme].tint} />
                    </View>
                </View>

                <View style={styles.section}>
                    <ThemedText type="subtitle">Seguridad</ThemedText>
                    <View style={styles.rowRight}>
                        <ThemedText>Biométrico</ThemedText>
                        <Switch value={biometric} onValueChange={setBiometric} thumbColor={Colors[theme].tint} />
                    </View>
                    <View style={styles.rowRight}>
                        <ThemedText>Enviar datos de uso anónimos</ThemedText>
                        <Switch value={analytics} onValueChange={setAnalytics} thumbColor={Colors[theme].tint} />
                    </View>
                </View>

                <View style={styles.section}>
                    <ThemedText type="subtitle">Cuenta</ThemedText>
                    <Input label="Correo" value={email} onChangeText={setEmail} placeholder="Correo" />
                    <Input label="Contraseña" value={password} onChangeText={setPassword} placeholder="Nueva contraseña" secureTextEntry />
                    <View style={styles.row}>
                        <PrimaryButton title="Cambiar contraseña" onPress={() => Alert.alert('Cuenta', 'Funcionalidad demo')} />
                        <PrimaryButton title="Cerrar sesión" onPress={() => Alert.alert('Cuenta', 'Cerrar sesión demo')} />
                    </View>
                </View>

                <View style={styles.section}>
                    <ThemedText type="subtitle">Datos</ThemedText>
                    <View style={styles.row}>
                        <PrimaryButton title="Exportar datos" onPress={() => Alert.alert('Datos', 'Exportar demo')} />
                        <PrimaryButton title="Importar datos" onPress={() => Alert.alert('Datos', 'Importar demo')} />
                    </View>
                </View>

                <View style={styles.section}>
                    <ThemedText type="subtitle">Acerca de</ThemedText>
                    <ThemedText>Versión: 1.0.0</ThemedText>
                    <ThemedText>Terminos y condiciones | Política de privacidad</ThemedText>
                </View>

                <PrimaryButton title="Guardar cambios" onPress={onSave} />
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    scroll: { paddingBottom: 32 },
    title: { fontFamily: Fonts.rounded, marginBottom: 12 },
    section: { marginBottom: 14, padding: 12, borderRadius: 8, backgroundColor: '#33321d' },
    row: { flexDirection: 'row', gap: 8, justifyContent: 'space-between' },
    rowRight: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 },
});
