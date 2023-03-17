import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Restaurant from './screens/Restaurant';
import { Provider } from 'react-redux';
import { store } from './store/store';
import BasketScreen from './screens/BasketScreen';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Restaurant' component={Restaurant}/>
      <Stack.Screen name='Basket' component={BasketScreen} options={{presentation: "modal", headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

