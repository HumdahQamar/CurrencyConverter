import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRates, getBase } from '../reducers/exchangeRates';
import setBaseAction from '../actions/setBase';

class CurrencyField extends Component {
  static get propTypes() {
    return {
      buttonText: PropTypes.string,
      editable: PropTypes.bool,
      placeholder: PropTypes.string,
      value: PropTypes.number,
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
    const {setBase} = this.props;
    this.setState({ value: value });
    if (this.props.placeholder.toLowerCase().includes('base')) {
      setBase({currency: this.props.buttonText, value: value});
    }
  }
  render() {
    return (
      <View style={ styles.container }>
        <Button
          title={ this.props.buttonText }
          onPress={ () =>
            this.props.navigation.navigate('Home', { name: 'Jane' })
          }
        />
        <TextInput
          style={{ height: 33, borderColor: 'gray', borderWidth: 1 }}
          underlineColorAndroid = 'transparent'
          placeholder = { this.props.placeholder }
          placeholderTextColor = '#9a73ef'
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
}, dispatch);
const mapStateToProps = state => ({
  rates: getRates(state),
  base: getBase(state),
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
