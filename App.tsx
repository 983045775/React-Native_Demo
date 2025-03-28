/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BankCardView from './src/common/BankCardView.tsx';
import InputViewDemo from './src/common/InputViewDemo.tsx';
import PressableView from './src/common/PressableView.js';
import ScrollsView from './src/common/ScrollsView.js';
import {ScrollView, View} from 'react-native';
import ScrollViewDemo from './src/common/ScrollViewDemo';
import FlatListView from './src/common/FlatListView';
import SectionViewDemo from "./src/common/SectionViewDemo";

function App() {
  return (
    // <ScrollView stickyHeaderIndices={[0]}>
    //   <View
    //     style={{
    //       flexDirection: 'column',
    //       width: '100%',
    //       height: 8100,
    //     }}>
    //     <BankCardView />
    //     <InputViewDemo />
    //     <PressableView />
    //     <ScrollsView />
    // <ScrollViewDemo length={30}/>
    // <FlatListView size={130} />
    <SectionViewDemo />
    // </View>
    // </ScrollView>
  );
}

export default App;
