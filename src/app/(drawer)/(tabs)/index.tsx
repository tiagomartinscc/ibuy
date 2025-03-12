import { router } from 'expo-router'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>

      <TouchableOpacity 
        onPress={() => {router.navigate({pathname: '/product/[id]', params: {id: 52}})}}>
        <Text>Abrir produto 52</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title: { fontSize: 22, fontWeight: 'bold'},
})