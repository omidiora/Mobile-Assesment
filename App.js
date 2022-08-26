import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FormInput from './src/component/FormInput';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile';
import RegisterStack from './src/navigation/RegisterStack';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
