import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QrScanner from '../components/QRscanner';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Qrscanner" component={QrScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}