import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/scenes/HomeScreen';
import IntroScreen from './src/scenes/IntroScreen';
import CurrencyField from './src/components/CurrencyField'
import CurrencySelector from './src/scenes/CurrencySelector';
import rootReducer from './src/reducers';

const middlewares = [thunk];
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Intro'
            component={ IntroScreen }
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name='Home'
            component={ HomeScreen }
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name='CurrencyList'
            component={ CurrencySelector }
            options={{ title: 'Choose Currency' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
