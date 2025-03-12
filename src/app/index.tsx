import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {router} from 'expo-router'

export default function Index() {
  function signUp() {
    router.navigate('/sign-up')
  }

  function signIn() {
    router.navigate('/(drawer)/configs')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.label}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.label}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    gap: 32,
  },
  label: { fontSize: 16, fontWeight: 'bold', color: '#fff'},
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 10
  },
})