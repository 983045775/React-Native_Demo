import React from 'react';
import {View, Text, Button, NativeModules} from 'react-native';

function BridgeClassDemo() {
  return (
    <Button
      title={'我是按钮'}
      onPress={() => {
        const {AppModule} = NativeModules;
        AppModule.androidToast(
          '打印这句话吧！所以方法名不能重复啊',
          '这句话才能生效',
        ).then(data => {
          console.log(data);
        });
      }}
    />
  );
}

export default BridgeClassDemo;
