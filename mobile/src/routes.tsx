import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const AppStack = createStackNavigator()

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false}}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

