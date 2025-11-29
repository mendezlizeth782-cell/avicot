
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export default function PrincipalScreen() {
	const router = useRouter();

	const buttons = [
		{ key: 'cliente', label: 'Cliente', to: '/cliente', icon: 'person.2.fill', color: '#2f80ed' },
		{ key: 'alimentacion', label: 'Alimentación', to: '/alimentacion', icon: 'leaf.fill', color: '#27ae60' },
		{ key: 'vacunacion', label: 'Vacunación', to: '/vacunacion', icon: 'syringe.fill', color: '#f2994a' },
		{ key: 'enfermedad', label: 'Enfermedad', to: '/enfermedad', icon: 'bandage.fill', color: '#eb5757' },
		{ key: 'tablas', label: 'Tablas', to: '/tablas', icon: 'square.and.pencil', color: '#9b51e0' },
		{ key: 'estadisticas', label: 'Estadísticas', to: '/estadisticas', icon: 'numbers', color: '#6b5bff' },
	];

	return (
		<ThemedView style={styles.container}>

			<View style={styles.grid}>
				{buttons.map((b) => (
					<Pressable
						key={b.key}
						onPress={() => router.push(b.to)}
						style={({ pressed }) => [styles.card, { backgroundColor: b.color }, pressed && styles.cardPressed]}
						accessibilityRole="button"
						accessibilityLabel={b.label}
					>
						<IconSymbol name={b.icon as any} size={36} color="#fff" style={{ marginBottom: 8 }} />
						<ThemedText type="title" style={styles.cardText}>{b.label}</ThemedText>
					</Pressable>
				))}
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	title: { fontFamily: Fonts.rounded, marginBottom: 12 },
	grid: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
	card: {
		width: '48%',
		aspectRatio: 1.4,
		backgroundColor: '#2f80ed',
		borderRadius: 12,
		marginBottom: 12,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 12,
	},
	cardPressed: { opacity: 0.85 },
	cardText: { color: '#fff', fontSize: 18, fontFamily: Fonts.rounded, textAlign: 'center' },
});
