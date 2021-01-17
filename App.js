import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/scenes/HomeScreen';
import IntroScreen from './src/scenes/IntroScreen';
import rootReducer from './src/reducers';

const middlewares = [thunk];
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
// console.log('hi', store.getState())
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
          { /* <Stack.Screen name="Profile" component={ProfileScreen} /> */ }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
