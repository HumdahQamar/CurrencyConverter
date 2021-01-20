import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';

import fetchRatesAction from '../actions/fetchRates';
import {getRatesError, getRatesPending} from '../reducers/exchangeRates';

class IntroScreen extends Component {
  render() {
    return (
      <View
        style={ styles.mainContainer }
      >
        <Image
          style={{height: 90, width: 'auto'}}
          source={ require('../image/logo.png') }
        />
        <View
          style={
            styles.container
          }
        >
          <Button
            style={{
              alignSelf: 'center',
            }}
            title='Get Started'
            onPress={ () =>
              this.props.navigation.navigate('Home', { name: 'Jane' })
            }
          />
        </View>
      </View>
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

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: '150px',
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    // flex: 2,
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom: '250px',
    height: '100%',
  },
});
