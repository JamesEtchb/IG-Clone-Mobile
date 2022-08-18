import React from 'react'
import { Icon } from 'react-native-elements'
import { View, Text, Linking } from 'react-native'
import { loginStyles, aboutStyles } from '../assets/styles'

const LearnAbout = () => {
  return (
    <View style={loginStyles.container}>
      <Text style={aboutStyles.aboutText}>Go to my GitHub or my LinkedIn below</Text>
      <View style={aboutStyles.aboutIcons}>
        <Icon
          name="email"
          onPress={() => Linking.openURL('https://github.com/JamesEtchb')}
        ></Icon>
        <Icon
          name="lock"
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/james-etchberger-232495245/'
            )
          }
        ></Icon>
      </View>
    </View>
  )
}

export default LearnAbout
