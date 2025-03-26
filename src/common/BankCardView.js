import React from 'react';
import {
  ImageBackground,
  Image,
  Text,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import bgCard from '../assets/bg_card.png';
import iconBank from '../assets/icon_bank.png';

/**
 * 银行卡card demo
 * @returns {Element}
 * @constructor
 */

function BankCardView() {

  const toastConsole =()=>{
    console.log("点了就点了呗啊");
  }
  return (
    <View style={styles.root}>
      <ImageBackground style={styles.cardBg} source={bgCard}>
        <Image source={iconBank} style={styles.logo} />
        <View>
          <Text
            style={styles.titleName}
            onPress={(event) => {
              toastConsole();
            }}>
            招商银行
          </Text>
          <Text style={styles.titleName2}>储蓄卡</Text>
          <View
            style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
            <Text style={styles.titleName3}>●●●● ●●●● ●●●● </Text>
            <Text style={styles.titleName4}>7475</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default BankCardView;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    width: '100%',
    height: '100%',
  },

  cardBg: {
    flexDirection: 'row',
    marginTop: 20,
    width: 350,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
  },
  logo: {
    marginTop: 16,
    marginLeft: 16,
    width: 34,
    height: 34,
  },
  logoView: {
    flexDirection: 'column',
  },
  titleName: {
    color: 'white',
    marginLeft: 8,
    marginTop: 18,
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleName2: {
    color: '#ffffffA0',
    marginLeft: 8,
    marginTop: 2,
    fontSize: 12,
  },
  titleName3: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 8,
  },
  titleName4: {
    color: '#ffffff',
    marginLeft: 8,
    marginTop: 2,
    fontSize: 16,
  },
});


