import React from 'react';
import normalize from 'react-native-normalize';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import SelectProfession from '../pages/SelectProfession';
import Explore from '../pages/Explore';
import Details from '../pages/Details';

import logoChat from '../assets/logoChat.png';
import pessoa from '../assets/pessoas.png';

const AppStack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const Tab = () => {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#808080',
        style: {
          backgroundColor: '#2F2E41',
          height: normalize(50),
          paddingTop: 5,
          paddingBottom: 5,
        },
      }}>
      <Bottom.Screen
        name="Select"
        component={SelectProfession}
        options={{
          tabBarLabel: 'Profissões',
          tabBarIcon: ({color}) => (
            <Feather name="briefcase" size={24} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({color}) => (
            <Feather name="copy" size={24} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#2F2E41'},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Image
              source={logoChat}
              style={{
                width: normalize(40),
                height: normalize(33),
                marginLeft: normalize(20),
              }}
            />
          ),
          headerRight: () => (
            <RectButton>
              <Image
                source={pessoa}
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  marginRight: normalize(20),
                  borderRadius: normalize(50),
                }}
              />
            </RectButton>
          ),
        }}>
        <AppStack.Screen
          name="App"
          options={{
            title: '',
          }}
          component={Tab}
        />

        <AppStack.Screen
          component={Details}
          name="Details"
          options={{
            title: 'Detalhes',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
