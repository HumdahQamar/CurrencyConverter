import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableHighlight } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import { bindActionCreators } from 'redux';

import setBaseAction from '../actions/setBase';
import setSymbolAction from '../actions/setSymbol';
import {getRatesError, getRates, getRatesPending, getBase, getSymbol} from '../reducers/exchangeRates';
import CurrencyField from '../components/CurrencyField';

class CurrencySelector extends Component {
  state = {
    base: '',
    symbol: '',
  }
  onPress = item => {
    const {setBase, setSymbol} = this.props;
    if (this.props.route.params.selectedValue === 'base') {
      setBase({currency: item.currency, value: this.props.base.value});
      setSymbol({currency: this.props.symbol.currency, value: 0});
      this.props.navigation.navigate('Home');
    } else if (this.props.route.params.selectedValue === 'symbol') {
      setSymbol({currency: item.currency, value: 0});
      this.props.navigation.navigate('Home');
    }
  }
  getRow = currency => {
    if ((this.props.route.params.selectedValue === 'base' && this.props.base.currency === currency) ||
      (this.props.route.params.selectedValue === 'symbol' && this.props.symbol.currency === currency)) {
      return true;
    }
    return false;
  }
  render() {
    // let row;

    return (
      <FlatList
        data={ this.props.rates }
        renderItem={ ({ item, separators }) => (
          <TouchableHighlight
            key={ item.title }
            onPress={ () => this.onPress(item) }
            onShowUnderlay={ separators.highlight }
            onHideUnderlay={ separators.unhighlight }
          >
            <View style={{
              backgroundColor: 'white',
              height: '40px',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px'
              }}
            >
              <Text style={{marginTop: '4px'}}>{ item.currency }</Text>
              { this.getRow(item.currency) ?
                <Icon
                  color='green'
                  name='check-circle'
                  style={{right: 0, alignSelf: 'flex-end'}}
                />
                : <Icon />
              }
            </View>
          </TouchableHighlight>
        ) }
      />
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
  setBase: setBaseAction,
  setSymbol: setSymbolAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySelector);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
