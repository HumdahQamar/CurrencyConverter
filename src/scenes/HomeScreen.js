import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';

import fetchRatesAction from '../actions/fetchRates';
import {getRatesError, getRates, getRatesPending, getBase, getSymbol} from '../reducers/exchangeRates';
import CurrencyField from '../components/CurrencyField';

class HomeScreen extends Component {
  state = {
    base: '',
    symbol: '',
  }
  componentWillMount() {
    // eslint-disable-next-line react/prop-types
    const {fetchRates} = this.props;
    fetchRates();
  }
  fetchConversion = () => {
    const {fetchRates} = this.props;
    fetchRates(this.props.base.currency, this.props.symbol.currency);
  }
  setBase = base => {
    this.setState({ base: base });
  }
  render() {
    return (
      <View style={ styles.container }>
        <CurrencyField
          buttonText='USD'
          placeholder='Base Currency'
          editable
        />
        <CurrencyField
          buttonText='EUR'
          editable={ false }
          value={ this.props.symbol.value }
        />
        <Button
          title='Convert'
          onPress={ this.fetchConversion }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: getRatesError(state),
  rates: getRates(state),
  pending: getRatesPending(state),
  base: getBase(state),
  symbol: getSymbol(state),
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRates: fetchRatesAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
});
