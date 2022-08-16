import React from 'react'
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'

function Hero() {
  return (
    <View style={styles.headerBar}>
      <Text style={styles.headerText}>IG Clone</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBar: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
})

export default Hero
