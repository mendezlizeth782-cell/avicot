import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, Fonts } from '@/constants/theme';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

// Charts
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 32; // account for container padding

const chartConfig = {
	backgroundGradientFrom: Colors.light.background,
	backgroundGradientTo: Colors.light.background,
	color: (opacity = 1) => `rgba(15, 23, 42, ${opacity})`,
	labelColor: (opacity = 1) => `rgba(40,40,40, ${opacity})`,
	propsForDots: { r: '4' },
};

export default function EstadisticasScreen() {
	const lineData = {
		labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
		datasets: [
			{ data: [50, 120, 80, 140, 100, 160], color: () => Colors.light.tint },
		],
	};

	const barData = {
		labels: ['Pollos', 'Huevos', 'Ventas'],
		datasets: [{ data: [200, 150, 180] }],
	};

	const pieData = [
	{ name: 'Salud', population: 45, color: '#27ae60', legendFontColor: '#333', legendFontSize: 12 },
	{ name: 'Alim.', population: 25, color: '#f2994a', legendFontColor: '#333', legendFontSize: 12 },
	{ name: 'Vac.', population: 20, color: '#2f80ed', legendFontColor: '#333', legendFontSize: 12 },
		{ name: 'Otros', population: 10, color: '#9b51e0', legendFontColor: '#333', legendFontSize: 12 },
	];

	return (
		<ThemedView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll}>
				<ThemedText type="title" style={styles.title}></ThemedText>
				<View style={styles.card}>
					<ThemedText type="subtitle" style={styles.cardTitle}>Producción (últimos 6 meses)</ThemedText>
					<LineChart
			data={lineData}
			width={screenWidth}
			height={220}
			chartConfig={chartConfig}
			bezier
			style={styles.chart}
					/>
				</View>

				<View style={styles.card}>
					<ThemedText type="subtitle" style={styles.cardTitle}>Comparativa mensual</ThemedText>
					<BarChart
						data={barData}
			width={screenWidth}
			height={200}
			chartConfig={chartConfig}
						fromZero
						style={styles.chart}
					/>
	</View>

	<View style={styles.card}>
					<ThemedText type="subtitle" style={styles.cardTitle}>Distribución por área</ThemedText>
					<PieChart
						data={pieData}
			width={screenWidth}
			height={180}
			chartConfig={chartConfig}
			accessor="population"
			backgroundColor="transparent"
			paddingLeft="15"
						absolute
					/>
				</View>
			</ScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	scroll: { paddingBottom: 32 },
	title: { fontFamily: Fonts.rounded, marginBottom: 12 },
	card: { backgroundColor: Colors.light.background, borderRadius: 12, padding: 12, marginBottom: 14, elevation: 2 },
	cardTitle: { fontFamily: Fonts.rounded, marginBottom: 8, color: '#333' },
	chart: { borderRadius: 8 },
});
