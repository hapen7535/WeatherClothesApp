import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native';
import main from '../pages/main';
import Weather from '../pages/viewWeather';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

  return (
      <Stack.Navigator>
        <Stack.Screen name='Main'component={main}/>
        <Stack.Screen name='ViewWeather' component={Weather} />
      </Stack.Navigator>
  );
};


export default MainNavigation;