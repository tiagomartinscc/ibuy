import { MaterialIcons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{
          title: 'Início',
          drawerLabel: 'Início',
          drawerIcon: ({color, size}) => (
            <MaterialIcons name='home' color={color} size={size} />
          )
        }} />

        <Drawer.Screen name="configs" options={{
          title: 'Configuração',
          drawerLabel: 'Configuração',
          drawerIcon: ({color, size}) => (
            <MaterialIcons name='settings' color={color} size={size} />
          )
        }} />        
      </Drawer>
    </GestureHandlerRootView>
  )
}