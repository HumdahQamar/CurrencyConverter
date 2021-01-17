export const FETCH_RATES_PENDING = 'FETCH_RATES_PENDING';
export const FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS';
export const FETCH_RATES_ERROR = 'FETCH_RATES_ERROR';

export function fetchRatesPending() {
  return {
    type: FETCH_RATES_PENDING
  }
}

export function fetchRatesSuccess(rates) {
  console.log(rates)
  return {
    type: FETCH_RATES_SUCCESS,
    rates: rates
  }
}

export function fetchRatesError(error) {
  return {
    type: FETCH_RATES_ERROR,
    error: error
  }
}