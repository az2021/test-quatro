import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onBoardStepOneScreen from '../screen/onBoardStepOneScreen';
import onBoardStepTwoScreen from '../screen/onBoardStepTwoScreen';
import Home from './Home';
import DetailsScreen from '../screen/DetailsScreen';





const Stack = createNativeStackNavigator();

function OnBoarding({users}) {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="one" component={onBoardStepOneScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="two" component={onBoardStepTwoScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="home" component={Home} options={{
            headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default OnBoarding;