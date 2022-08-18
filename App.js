import { StyleSheet, SafeAreaView } from 'react-native'
import Login from './screens/Login.js'
import Header from './screens/Header.js'
import PhotoList from './screens/PhotoList.jsx'
import LearnAbout from './screens/LearnAbout'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={() => {
          return {
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }
        }}
      >
        <Tab.Screen
          name="Login"
          component={Login}
          option={() => {
            return {
              tabBarIcon: () => (
                <Icon name="sc-telegram" type="evilicon" size="20" />
              ),
            }
          }}
        />
        <Tab.Screen
          name="Home"
          component={PhotoList}
          option={() => {
            return { tabBarIcon: () => <Icon name="house" size="20" /> }
          }}
        />
        <Tab.Screen
          name="About"
          component={LearnAbout}
          option={() => {
            return { tabBarIcon: () => <Icon name="ei-user" size="20" /> }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={styles.safeArea}>
    //   <Header />
    //   <PhotoList />
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
})
