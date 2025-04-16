import React, {useEffect} from 'react';
import {
    View,
    Text,
    useWindowDimensions,
    Dimensions,
    Button, StyleSheet,
} from 'react-native';

export const ApiTest = () => {
  const {width, height} = useWindowDimensions();
  useEffect(() => {
    prithWH();
  }, []);
  const prithWH = () => {
    console.log(`这是useWindowDimensions获取的  width = ${width}   height = ${height}`);
  };
  return (
    <View>
      <Button
        title={'获取宽高'}
        onPress={() => {
          const {width, height} = Dimensions.get('window');
          console.log(`这是screen中获取的 width = ${width}   height = ${height}`);
        }}
      />
      <Text>123</Text>
    </View>
  );
};

StyleSheet.create({
    root:{
        width:"100%",
        height:"100%",
    }
})
