import { Link } from 'expo-router'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/sign-up" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label}>Criar conta</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 16, fontWeight: 'bold', color: '#fff'},
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 10
  }
})