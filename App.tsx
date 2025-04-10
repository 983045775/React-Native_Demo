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
import SectionViewDemo from './src/common/SectionViewDemo';
import PersonalView from './src/common/PersonalView';
import SafeImageSwitcher from './src/common/SafeImageSwitcher';
import BridgeClassDemo from './src/android/BridgeClassDemo';
import InfoView from './src/android/InfoView.js';
import NavigationBarView from './src/android/NavigationBarView';

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
    // <SectionViewDemo />
    //   <PersonalView/>
    // <SafeImageSwitcher/>
    // </View>
    // </ScrollView>
    // <BridgeClassDemo />
    // <InfoView />
    <NavigationBarView />
  );
}

export default App;
