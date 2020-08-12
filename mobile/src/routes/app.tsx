import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import SelectProfession from '../pages/SelectProfession'


const AppStack = createStackNavigator()

const AppRoutes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false}}>
        <AppStack.Screen name="Select" component={SelectProfession} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes

