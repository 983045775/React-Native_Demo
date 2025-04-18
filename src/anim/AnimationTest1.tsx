import React, {useRef} from 'react';
import {Text, View, Button, StyleSheet, Animated} from 'react-native';

export const Animationtest1 = () => {
  let value = new Animated.Value(0);
  console.log('正在不停的刷新');
  const marginLefttValue = useRef(value);
  const timingStart: (num: number) => any = (num: number) => {
    return {
      toValue: num,
      duration: 200,
      useNativeDriver: false,
    };
  };

  const rotateTest = (num: number) => {
    return {
      inputRange: [0, num],
      outputRange: ['0deg', num+'deg'],
    };
  };
  const rotateValue = value.interpolate(rotateTest(180));

  return (
    <View>
      <Text>这是位移动画</Text>
      <Button
        title={'开始'}
        onPress={() => {
          Animated.timing(marginLefttValue.current, timingStart(180)).start();
        }}
      />
      <Button
        title={'恢复'}
        onPress={() => {
          Animated.timing(marginLefttValue.current, timingStart(0)).start();
        }}
      />

      <Animated.View
        style={[
          styles.block,
          {marginLeft: marginLefttValue.current},
          {transform: [{rotate: rotateValue}]},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginTop: 30,
    backgroundColor: '#3322ff',
    width: 50,
    height: 50,
  },
});
