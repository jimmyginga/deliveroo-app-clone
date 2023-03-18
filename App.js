import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import BasketScreen from './screens/BasketScreen';
import PrepareOrderScreen from './screens/PrepareOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
      <Stack.Screen name='Basket' component={BasketScreen} options={{presentation: "modal", headerShown: false}}/>
      <Stack.Screen name='PrepareOrder' component={PrepareOrderScreen} options={{presentation: "fullScreenModal", headerShown: false}}/>
      <Stack.Screen name='Delivery' component={DeliveryScreen} options={{presentation: "fullScreenModal", headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

