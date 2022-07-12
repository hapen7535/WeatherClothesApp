import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import main from '../pages/main';
import ViewWeather from '../pages/viewWeather';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Main'component={main}/>
        <Stack.Screen name='ViewWeather' component={() => <ViewWeather />} />
      </Stack.Navigator>
  );
};


export default MainNavigation;