import { connect } from 'react-redux';
// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import { bindActionCreators } from 'redux';

import fetchRatesAction from '../actions/fetchRates';
import {getRatesError, getRates, getRatesPending} from '../reducers/exchangeRates';

class IntroScreen extends Component {
  render() {
    return (
      <Button
        title='Get Started'
        onPress={ () =>
          this.props.navigation.navigate('Home', { name: 'Jane' })
        }
      />
    );
  }
  // componentWillMount() {
  //   const {fetchRates} = this.props;
  //   fetchRates();
  // }
}

const mapStateToProps = state => ({
  error: getRatesError(state),
  rates: getRates(state),
  pending: getRatesPending(state),
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRates: fetchRatesAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScreen);

