import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Pressable } from 'react-native';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        drawerType: 'back',
        drawerStyle: { width: 240 },
        drawerContentStyle: { paddingTop: 20 },
        headerRight: () => (
          <Pressable onPress={() => router.push('/configuraciones')} style={{ marginRight: 12 }}>
            <IconSymbol name="gearshape.fill" size={20} color={Colors[colorScheme ?? 'dark'].tint} />
          </Pressable>
        ),
        headerRightContainerStyle: { paddingRight: 6 },
      }}
      /* drawerContent={(props: any) => <DrawerContent {...props} />} */
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Inicio',
          drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="house.fill" color={color} />,
        }}
      />      
      <Drawer.Screen name="principal" options={{ title: 'Principal', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="star.fill" color={color} /> }} />
      <Drawer.Screen name="cliente" options={{ title: 'Cliente', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="person.fill" color={color} /> }} />
      <Drawer.Screen name="tablas" options={{ title: 'Tablas', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="square.and.pencil" color={color} /> }} />
      <Drawer.Screen name="enfermedad" options={{ title: 'Enfermedad', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="bandage.fill" color={color} /> }} />
      <Drawer.Screen name="vacunacion" options={{ title: 'Vacunación', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="syringe.fill" color={color} /> }} />
      <Drawer.Screen name="alimentacion" options={{ title: 'Alimentación', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="leaf.fill" color={color} /> }} />
      <Drawer.Screen name="estadisticas" options={{ title: 'Estadísticas', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="numbers" color={color} /> }} />
      <Drawer.Screen name="galpon" options={{ title: 'Galpon', drawerIcon: ({ color }: { color: string }) => <IconSymbol size={20} name="house.slash.fill" color={color} /> }} />
      <Drawer.Screen name="configuraciones" options={{ title: 'Configuraciones', drawerItemStyle: { height: 0 }, drawerIcon: ({ color }: { color: string }) => <IconSymbol size={30} name="gearshape.fill" color={color} /> }} />
    </Drawer>
  );
}

function DrawerContent(props: any) {
  // use default drawer content for now; placeholder to allow customization later
  return <></>;
}
