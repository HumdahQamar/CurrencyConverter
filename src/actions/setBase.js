import {setBase} from './index';

function setConversionBase(base = {currency: 'USD', value: 1}) {
  return dispatch => {
    dispatch(setBase(base));
  };
}

export default setConversionBase;
