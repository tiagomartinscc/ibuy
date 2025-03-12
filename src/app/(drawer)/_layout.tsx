import { MaterialIcons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{title: 'iBuy'}}>
        <Drawer.Screen name="(tabs)" options={{
          drawerLabel: 'Início',
          drawerIcon: ({color, size}) => (
            <MaterialIcons name='home' color={color} size={size} />
          )
        }} />

        <Drawer.Screen name="configs" options={{
          drawerLabel: 'Configuração',
          drawerIcon: ({color, size}) => (
            <MaterialIcons name='settings' color={color} size={size} />
          )
        }} />        
      </Drawer>
    </GestureHandlerRootView>
  )
}