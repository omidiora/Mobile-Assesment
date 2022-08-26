import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Register from '../screens/Register';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RegisterStack" component={Register} />
    </Stack.Navigator>
  );
};

export default RegisterStack;
