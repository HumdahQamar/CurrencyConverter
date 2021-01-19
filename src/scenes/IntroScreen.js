import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Button } from 'react-native';
import { bindActionCreators } from 'redux';

import fetchRatesAction from '../actions/fetchRates';
import {getRatesError, getRatesPending} from '../reducers/exchangeRates';

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
}

const mapStateToProps = state => ({
  error: getRatesError(state),
  rates: state.rates,
  pending: getRatesPending(state),
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRates: fetchRatesAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScreen);

