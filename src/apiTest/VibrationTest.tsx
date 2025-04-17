import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  PermissionsAndroid,
  Vibration,
} from 'react-native';

function vibrationTest() {
  const startVibration = () => {
    Vibration.vibrate([ 100,200], true);
  };

  const closeVibration = ()=>{
      Vibration.cancel()
  }

  return (
    <View>
      <Button
        title={'开始振动'}
        onPress={() => {
          startVibration();
        }}
      />
      <Button title={'结束振动'} onPress={()=>{
          closeVibration()
      }}/>
    </View>
  );
}

export default vibrationTest;
