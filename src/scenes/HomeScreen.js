import { connect } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';

import fetchRatesAction from '../actions/fetchRates';
import {getRatesError, getRates, getRatesPending} from '../reducers/exchangeRates';

class HomeScreen extends Component {
  render (){
    console.log('rates', this.props.rates)
    return (
      <View style={styles.container}>
        <Text>Guys, this is your HomeScreen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  componentWillMount() {
    const {fetchRates} = this.props;
    fetchRates();
  }
}

const mapStateToProps = state => ({
  error: getRatesError(state),
  products: getRates(state),
  pending: getRatesPending(state)
})
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRates: fetchRatesAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
