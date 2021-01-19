import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRates, getBase, getSymbol } from '../reducers/exchangeRates';
import fetchRatesAction from '../actions/fetchRates';
import setBaseAction from '../actions/setBase';

class CurrencyField extends Component {
  static get propTypes() {
    return {
      buttonText: PropTypes.string,
      editable: PropTypes.bool,
      placeholder: PropTypes.string,
      value: PropTypes.number,
      navigation: PropTypes.object,
      name: PropTypes.string,
      setBase: PropTypes.func,
      base: PropTypes.object,
    };
  }
  state = {
    value: '',
    editable: true,
  }
  componentWillMount() {
    if (this.props.editable) {
      this.setState({ editable: true });
    } else {
      this.setState({ editable: false });
    }
  }
  setValue = value => {
    const {setBase, fetchRates} = this.props;
    this.setState({ value: value });
    if (this.props.name === 'base') {
      setBase({currency: this.props.base.currency, value: value});
      fetchRates(this.props.base.currency, this.props.symbol.currency);
    }
  }
  render() {
    return (
      <View style={ styles.container }>
        <View style={{ width: '50px' }}>
          <Button
            title={ this.props.name === 'base' ? this.props.base.currency : this.props.symbol.currency }
            onPress={ () =>
              this.props.navigation.navigate('CurrencyList', { selectedValue: this.props.name })
            }
            color='grey'
          />
        </View>
        <TextInput
          style={{
            height: 33,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: '4px',
            paddingStart: '5px',
          }}
          underlineColorAndroid = 'transparent'
          placeholder = { this.props.placeholder }
          placeholderTextColor = '#808080'
          autoCapitalize = 'none'
          editable = { this.state.editable }
          value={ this.props.value }
          onChangeText = { this.setValue }
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setBase: setBaseAction,
  fetchRates: fetchRatesAction,
}, dispatch);
const mapStateToProps = state => ({
  rates: getRates(state),
  base: getBase(state),
  symbol: getSymbol(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyField);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
