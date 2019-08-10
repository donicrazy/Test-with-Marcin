import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import CryptoItem from './components/CryptoItem';
import { getItem } from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class CryptoData extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getItem();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.props.itemList}
          renderItem={({item, index}) => <CryptoItem data={item}/>}
          keyExtractor={(item) => `item_${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    alignSelf: "stretch",
    backgroundColor: 'grey',
  },
})

const mapStateToProps = state => ({
  itemList: state.itemList
})
const mapDispatchToProps = {
  getItem,
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(CryptoData);
