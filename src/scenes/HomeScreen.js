import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { Icon } from 'react-native-elements';

import fetchRatesAction from '../actions/fetchRates';
import setBaseAction from '../actions/setBase';
import setSymbolAction from '../actions/setSymbol';
import {getRatesError, getRates, getRatesPending, getBase, getSymbol} from '../reducers/exchangeRates';
import CurrencyField from '../components/CurrencyField';

class HomeScreen extends Component {
  state = {
    base: '',
    symbol: '',
  }
  componentWillMount() {
    const {fetchRates} = this.props;
    fetchRates();
  }
  reverseCurrencies = () => {
    const {setBase, setSymbol, fetchRates} = this.props;
    const tempBase = Object.assign({}, this.props.base);
    setBase({currency: this.props.symbol.currency, value: 0});
    setSymbol({currency: tempBase.currency, value: 0});
  }
  render() {
    return (
      <View style={ styles.container }>
        <CurrencyField
          buttonText='USD'
          placeholder='Base Currency'
          editable
          navigation={ this.props.navigation }
          name='base'
        />
        <CurrencyField
          buttonText='EUR'
          editable={ false }
          value={ this.props.symbol.value }
          navigation={ this.props.navigation }
          name='symbol'
        />
        <View style={{
          flexDirection: 'row'
        }}>
          <Icon name='sync' />
          <Button
            title='Reverse Currencies'
            onPress={ this.reverseCurrencies }
          />
        </View>
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
  setBase: setBaseAction,
  setSymbol: setSymbolAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: '200px',
    paddingBottom: '250px',
    height: '100%'
  },
});
