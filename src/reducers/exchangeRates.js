import {FETCH_RATES_PENDING, FETCH_RATES_SUCCESS, FETCH_RATES_ERROR} from '../actions';

const initialState = {
  pending: false,
  rates: {},
  base: '',
  symbol: '',
  error: null,
};

export function ratesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_RATES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        pending: false,
        rates: action.payload,
      };
    case FETCH_RATES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getRates = state => state.rates;
export const getRatesPending = state => state.pending;
export const getRatesError = state => state.error;
