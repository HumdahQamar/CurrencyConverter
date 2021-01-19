import {setBase} from './index';

function setConversionSymbol(base = 'USD') {
  return dispatch => {
    dispatch(setBase(base));
  };
}

export default setConversionSymbol;
