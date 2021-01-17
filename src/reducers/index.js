import { combineReducers } from 'redux';
import { ratesReducer } from './exchangeRates';

export default combineReducers({
  ratesReducer,
});
// eslint-disable-next-line no-unused-vars
export const rootReducer = (state = {}, action) => state;
