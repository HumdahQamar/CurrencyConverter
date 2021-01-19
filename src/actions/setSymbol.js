import {setSymbol} from './index';

function setConversionSymbol(symbol = {currency: 'USD', value: 0}) {
  return dispatch => {
    dispatch(setSymbol(symbol));
  };
}

export default setConversionSymbol;
