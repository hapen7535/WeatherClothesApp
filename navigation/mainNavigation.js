import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../pages/main';
import ViewWeather from '../pages/viewWeather';

const mainNavigation = () => {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Home"
          component={Main}
        />
        <Stack.Screen name="Weather" component={ViewWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};