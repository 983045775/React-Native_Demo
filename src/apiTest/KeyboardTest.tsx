import React, {useEffect} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  PermissionsAndroid,
  Vibration,
  ToastAndroid,
  Image,
  Keyboard,
} from 'react-native';
import {KeyboardEventName} from 'react-native/Libraries/Components/Keyboard/Keyboard';
import InputView from "../common/InputViewDemo.tsx";

function KeyboardTest() {
  const showKey = () => {
    console.log('键盘出来了');
  };
  const hideKey = () => {
    console.log('键盘隐藏了');
  };

  useEffect(() => {
    const showKeyBoard = Keyboard.addListener('keyboardDidShow', showKey);
    const hideKeyBoard = Keyboard.addListener('keyboardDidHide', hideKey);
    return () => {
      showKeyBoard.remove();
      hideKeyBoard.remove();
    };
  }, []);
  return (
    <View>
      <Text>{'键盘监听'}</Text>
      <InputView />
      <Button title={"隐藏键盘"} onPress={()=>{
        Keyboard.dismiss()
      }} />
    </View>
  );
}

export default KeyboardTest;
