import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRscanner from './components/QRscanner';
const Stack = createStackNavigator();
const App=()=>{
return (  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Zorro library" component={HomePage}
      options={{
        title: 'Zorro library',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <Stack.Screen name="QRcode" component={QRscanner} 
      options={{
        title: 'Scan your Book here',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
</NavigationContainer>
);
  
}



export default App;