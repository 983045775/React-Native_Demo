/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BankCardView from './src/common/BankCardView';
import InputViewDemo from './src/common/InputViewDemo';
import PressableView from './src/common/PressableView';
import ScrollsView from './src/common/ScrollsView';
import {ScrollView, View} from 'react-native';
import ScrollViewDemo from './src/common/ScrollViewDemo';
import FlatListView from './src/common/FlatListView';
import SectionViewDemo from './src/common/SectionViewDemo';
import PersonalView from './src/common/PersonalView';
import BridgeClassDemo from './src/android/BridgeClassDemo';
import InfoView from './src/android/InfoView';
import NavigationBarView from './src/android/NavigationBarView';
import TsDemo from './src/ts/TsDemo';
import {ApiTest} from './src/apiTest/ApiTest';
import StyleSheetTest from './src/apiTest/StyleSheetTest';
import LinkingTest from './src/apiTest/LinkingTest';
import PixelRatioTest from './src/apiTest/PixelRatioTest';
import BackHandleTest from './src/apiTest/BackHandleTest';
import PermissionsTest from './src/apiTest/PermissionsTest';
import VibrationTest from './src/apiTest/VibrationTest';
import KeyboardTest from './src/apiTest/KeyboardTest';
import Animationtest1 from './src/anim/AnimationTest1';
import AnimationDecayTest from './src/anim/AnimationDecayTest';
import AnimationPhotoTest from './src/anim/AnimationPhotoTest';
import ScrollViewTest from './src/anim/ScrollViewTest';
import LayotuAnimationTest from './src/anim/layotuAnimationTest';
import Anim10 from './src/anim/Anim10';
import TableViewTest from './src/anim/TableViewTest.tsx';

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
        // <ScrollsView />
        // <ScrollViewDemo length={30}/>
        // <FlatListView size={130} />
        // <SectionViewDemo />
        // <PersonalView />
        // </View>
        // <BridgeClassDemo />
        // <InfoView />
        // <NavigationBarView />
        // <TsDemo />
        //   <ApiTest/>
        // <StyleSheetTest/>
        // <LinkingTest/>
        // <PixelRatioTest />
        //   <BackHandleTest/>
        // <PermissionsTest/>
        // <VibrationTest />
        //   <KeyboardTest/>
        //   <Animationtest1/>
        // <AnimationPhotoTest />
        // <ScrollViewTest />
        // <LayotuAnimationTest />
        // <Anim10 />
        <TableViewTest />
    );
}

export default App;
