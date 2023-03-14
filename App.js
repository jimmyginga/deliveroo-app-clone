import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Restaurant from './screens/Restaurant';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Restaurant' component={Restaurant}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

