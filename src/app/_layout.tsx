import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#cecece'
      }}>
          <Drawer.Screen 
            name="index"
            options={{
              title: 'Entrar',
              drawerLabel: 'Entrar',
              drawerIcon: ({color, size}) => 
                <MaterialIcons name='home' color={color} size={size} />
            }}
          />

          <Drawer.Screen 
            name="sign-up" 
            options={{
              title: 'Criar conta',
              drawerLabel: 'Criar conta',
              drawerIcon: ({color, size}) => 
                <MaterialIcons name='add' color={color} size={size} />
            }}
          />          
      </Drawer>
    </GestureHandlerRootView>    
  )
}