import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon'
    }}>
      <Tabs.Screen 
        name='index'
        options={{
          title: 'Produtos',
          tabBarLabel: 'Produtos',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons 
              name='list' 
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen 
        name='order'
        options={{
          title: 'Pedido',
          tabBarLabel: 'Pedido',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons 
              name='shopping-bag' 
              size={size}
              color={color}
            />
          )
        }}
      />      

    <Tabs.Screen 
        name='product'
        options={{
          href: null
        }}
      />          
    </Tabs>
  )
}