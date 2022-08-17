import React from 'react'
import { View, Text } from 'react-native'
import { loginStyles } from '../assets/styles'

const Header = () => {
  return (
    <View style={loginStyles.appBar}>
      <Text style={loginStyles.appBarTitle}>Bocagram</Text>
    </View>
  )
}

export default Header
