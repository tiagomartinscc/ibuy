import { StyleSheet, View, Text } from 'react-native'
import {useLocalSearchParams} from 'expo-router'

export default function Index() {
  const {id} = useLocalSearchParams()
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Id do produto: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 32 },
  title: { fontSize: 22, fontWeight: 'bold'},
})