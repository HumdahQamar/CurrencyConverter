import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';

import fetchRatesAction from '../actions/fetchRates';
import {getRatesError, getRates, getRatesPending} from '../reducers/exchangeRates';

class HomeScreen extends Component {
  componentWillMount() {
    // eslint-disable-next-line react/prop-types
    const {fetchRates} = this.props;
    fetchRates();
  }
  render() {
    console.log('rates', this.props);
    return (
      <View style={ styles.container }>
        <Text>Guys, this is your HomeScreen</Text>
        <StatusBar style='auto' />
      </View>
    );
  }
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
)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
});
