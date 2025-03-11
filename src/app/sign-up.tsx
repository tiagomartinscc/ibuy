import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.back} >Voltar</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' ,
    backgroundColor: '#cecece'
  },
  back: { fontSize: 16, fontWeight: 'bold' },
})