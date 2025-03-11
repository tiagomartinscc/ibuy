import { router, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'

export default function SignUp() {
  const { id, name } = useLocalSearchParams()

  function back() {
    if (!router.canGoBack()) {
      return Alert.alert('Não é possível voltar')
    }
    router.back()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id} - {name}</Text>

      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' ,
  },
  back: { fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold' },
})