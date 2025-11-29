// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.fill': 'groups',
  'star.fill': 'star',
  'star': 'star_border',
  'person.2.fill': 'people',
  'leaf.fill': 'spa',
  'syringe.fill': 'vaccines',
  'bandage.fill': 'healing',
  'tablecells.fill': 'table',
  'lamp.table.fill': 'light',
  'tablecells.badge.ellipsis': 'table_general',
  'tablecells': 'table_chart',
  'chart.bar.fill': 'bar_chart',
  'tablecells.fill.badge.ellipsis': 'table2',
  'bandage': 'medical_services',
  'syringe': 'health_and_safety',
  'leaf': 'eco',
  'person.2': 'people_outline',
  'person': 'person_outline',
  'star.circle.fill': 'star_rate',
  'star.circle': 'star_rate',
  'doc.text.fill': 'description',
  'house.slash.fill': 'agriculture',
  'square.and.arrow.up.fill': 'share',
  'square.and.pencil': 'edit',
  'chart.bar.horizontal.page.fill': 'insert_chart',
  'chart.bar': 'bar_chart',
  'chart.pie.fill': 'pie_chart',
  'chart.pie': 'pie_chart_outline',
  'list.number': 'format_list_numbered',
  'numbers': 'dialpad',
  'gear': 'settings',
  'gearshape.fill': 'settings',
  'gearshape': 'settings',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
