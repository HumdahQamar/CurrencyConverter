import { combineReducers } from 'redux'
import { ratesReducer } from './exchangeRates'

export default combineReducers({
  ratesReducer
})
export const rootReducer = (state = {}, action) => {
  return state
}
