import React from 'react'
import { View, Text } from 'react-native'
import { loginStyles } from '../assets/styles'
import { Button, Input } from 'react-native-elements'

const Login = () => {
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.appBarTitle}>Bocagram</Text>
      <Input
        placeholder="email"
        keyboardType='email-address'
        autoCapitalize='false'
        leftIcon={{ type: 'font-awesome', name: 'chevron-right'}}
        />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={{ type: 'font-awesome', name: 'lock'}}
      />
      <Button title='Solid Button'>Sign Up</Button>
    </View>
  )
}

export default Login
