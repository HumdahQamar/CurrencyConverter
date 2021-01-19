import { combineReducers } from 'redux';
import { ratesReducer, conversionReducer } from './exchangeRates';

export default combineReducers({
  ratesReducer,
  conversionReducer,
});
// eslint-disable-next-line no-unused-vars
export const rootReducer = (state = {}, action) => state;
