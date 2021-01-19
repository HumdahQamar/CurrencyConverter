// eslint-disable-next-line max-len
import {FETCH_RATES_PENDING, FETCH_RATES_SUCCESS, FETCH_RATES_ERROR, SET_SYMBOL, SET_SYMBOL_CURRENCY, SET_BASE, FETCH_CONVERSION_SUCCESS} from '../actions';

const initialState = {
  pending: false,
  rates: {},
  base: {currency: 'USD', value: 1},
  symbol: {currency: 'GBP', value: 0},
  factor: 0,
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
        rates: action.rates,
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

export function conversionReducer(state = initialState, action) {
  switch(action.type) {
    case SET_BASE:
      return {
        ...state,
        pending: false,
        base: action.base,
      };
    case SET_SYMBOL:
      return {
        ...state,
        pending: false,
        symbol: action.symbol,
      };
    case FETCH_CONVERSION_SUCCESS:
      return {
        ...state,
        pending: false,
        factor: action.conversion[state.symbol.currency],
        symbol: {currency: state.symbol.currency, value: state.base.value * action.conversion[state.symbol.currency]},
      };
    default:
      return state;
  }
}

export const getRates = state => state.ratesReducer.rates;
export const getBase = state => state.conversionReducer.base;
export const getSymbol = state => state.conversionReducer.symbol;
export const getFactor = state => state.factor;
export const getRatesPending = state => state.pending;
export const getRatesError = state => state.error;
