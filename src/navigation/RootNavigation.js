import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import RegisterStack from './RegisterStack';
import React from 'react';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Register"
        component={RegisterStack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
