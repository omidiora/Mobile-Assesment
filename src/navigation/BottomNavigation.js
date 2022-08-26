import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import React from 'react';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="ProfileStack"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('../assets/circle.png')} />
              ) : (
                <Image source={require('../assets/circle1.png')} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack1"
        component={Profile}
        options={{
          headerShown: false,
          showLabel: false,

          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('../assets/circle.png')} />
              ) : (
                <Image source={require('../assets/circle1.png')} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack2"
        component={Profile}
        options={{
          headerShown: false,
          showLabel: false,

          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('../assets/circle.png')} />
              ) : (
                <Image source={require('../assets/circle1.png')} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack3"
        component={Profile}
        options={{
          headerShown: false,
          showLabel: false,

          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('../assets/circle.png')} />
              ) : (
                <Image source={require('../assets/circle1.png')} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
