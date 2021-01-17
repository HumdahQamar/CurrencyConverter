import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware }from 'redux';
import thunk from 'redux-thunk'

import HomeScreen from './src/scenes/HomeScreen'
import rootReducer from './src/reducers'

const middlewares = [thunk];
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares))
console.log('hi', store.getState())

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}