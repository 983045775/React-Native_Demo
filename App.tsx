/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BankCardView from './src/common/BankCardView';
import InputViewDemo from './src/common/InputViewDemo';
import PressableView from './src/common/PressableView.js';
import {ScrollView, View} from 'react-native';

function App() {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'column',
          width: "100%",
          height: 8100,
        }}>
          <BankCardView />
          <InputViewDemo />
          <PressableView />
      </View>
    </ScrollView>
  );
}

export default App;
