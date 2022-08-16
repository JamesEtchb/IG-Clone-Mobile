import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import AppBar from './components/Appbar'
import PhotoList from './components/PhotoList'

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar />
      <PhotoList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
})
