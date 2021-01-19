export const FETCH_RATES_PENDING = 'FETCH_RATES_PENDING';
export const FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS';
export const FETCH_RATES_ERROR = 'FETCH_RATES_ERROR';

export const SET_BASE = 'SET_BASE';
export const SET_SYMBOL = 'SET_SYMBOL';
export const SET_SYMBOL_CURRENCY = 'SET_SYMBOL_CURRENCY';
export const SET_FACTOR = 'SET_FACTOR';
export const FETCH_CONVERSION_SUCCESS = 'FETCH_CONVERSION_SUCCESS';

export function fetchRatesPending() {
  return {
    type: FETCH_RATES_PENDING,
  };
}

export function fetchRatesSuccess(rates) {
  return {
    type: FETCH_RATES_SUCCESS,
    rates: rates,
  };
}

export function fetchRatesError(error) {
  return {
    type: FETCH_RATES_ERROR,
    error: error,
  };
}

export function fetchConversionSuccess(conversion) {
  return {
    type: FETCH_CONVERSION_SUCCESS,
    conversion: conversion,
  };
}

export function setBase(base) {
  return {
    type: SET_BASE,
    base: base,
  };
}

export function setSymbol(symbol) {
  return {
    type: SET_SYMBOL,
    symbol: symbol,
  };
}

export function setFactor(factor) {
  return {
    type: SET_FACTOR,
    factor: factor,
  };
}
