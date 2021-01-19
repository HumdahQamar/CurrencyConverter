import {fetchRatesPending, fetchRatesSuccess, fetchRatesError, fetchConversionSuccess} from './index';

function fetchRates(base = '', symbol = '') {
  return dispatch => {
    dispatch(fetchRatesPending());
    fetch(`https://api.ratesapi.io/api/latest?base=${base}&symbols=${symbol}`)
      .then(res => res.json())
      .then(res => {
        if(res.error) {
          throw(res.error);
        } else if (Object.keys(res.rates).length === 1) {
          dispatch(fetchConversionSuccess(res.rates));
        } else {
          const rates = [];
          Object.keys(res.rates).forEach(element => {
            rates.push({currency: element, factor: res.rates[element]});
          });
          dispatch(fetchRatesSuccess(rates));
        }
        return res.rates;
      })
      .catch(error => {
        dispatch(fetchRatesError(error));
      });
  };
}

export default fetchRates;
