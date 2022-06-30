import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../pages/main';
import viewWeather from '../pages/viewWeather';

const Stack = createNativeStackNavigator();

const mainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
        />
        <Stack.Screen name="Weather" component={viewWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};