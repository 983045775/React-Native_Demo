/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BankCardView from './src/common/BankCardView';
import InputViewDemo from './src/common/InputViewDemo';
import {Text, View} from 'react-native';

function App() {
  return (
    <View
      style={{
        backgroundColor: '#ff0000',
        flexDirection: 'column',
        width: '100%',
        height: 400,
      }}>
      <BankCardView />
      <InputViewDemo />
    </View>
  );
}

export default App;
