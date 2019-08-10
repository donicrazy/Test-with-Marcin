import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CryptoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
        <View style={styles.row}>
            <Text style={styles.itemName}>{`${data.name}(${data.symbol}): ${data.cmc_rank}`}</Text>            
            <Text style={styles.item}>Num market pairs: <Text style={styles.itemValue}>{data.num_market_pairs}</Text></Text>
            <Text style={styles.item}>Circulating supply: <Text style={styles.itemValue}>{data.circulating_supply}</Text></Text>
            <Text style={styles.item}>Total supply: <Text style={styles.itemValue}>{data.total_supply}</Text></Text>
            <Text style={styles.item}>Price: <Text style={styles.itemValue}>{data.quote.USD.price}</Text></Text>
            <Text style={styles.item}>Volume 24h: <Text style={styles.itemValue}>{data.quote.USD.volume_24h}</Text></Text>
            <Text style={styles.item}>Percent change 1h: <Text style={styles.itemValue}>{data.quote.USD.percent_change_1h}</Text></Text>
            <Text style={styles.item}>Percent change 24h: <Text style={styles.itemValue}>{data.quote.USD.percent_change_24h}</Text></Text>
            <Text style={styles.item}>Percent change7d: <Text style={styles.itemValue}>{data.quote.USD.percent_change_7d}</Text></Text>
            <Text style={styles.item}>Market cap: <Text style={styles.itemValue}>${data.quote.USD.market_cap}</Text></Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    row: {
        elevation: 1,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'flex-start', // main axis      
        marginLeft: 14,
        marginRight: 14,
        marginTop: 30,
        marginBottom: 0,
        paddingBottom: 10,
    },
    item: {
        paddingLeft: 15,
        fontSize: 18,
        height: 35,
    },
    itemName: {        
        fontSize: 22,
        fontWeight: 'bold',
        height: 50,
        paddingTop:5,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgb(255,86,7)',
        marginBottom: 5,
    },
    itemValue: {
        fontWeight: 'bold',
    }
})