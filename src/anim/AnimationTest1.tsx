import React, {useRef} from 'react';
import {Text, View, Button, StyleSheet, Animated} from 'react-native';

export const Animationtest1 = () => {
  const rotateTest = (num: number) => {
    return {
      inputRange: [0, num],
      outputRange: ['0deg', num + 'deg'],
    };
  };
  const timingStart: (num: number) => any = (num: number) => {
    return {
      toValue: num,
      duration: 1000,
      useNativeDriver: false,
    };
  };
  console.log('正在不停的刷新');
  const marginValueRef = useRef(new Animated.Value(0));
  const rotateValueRef = useRef(new Animated.Value(0));
  const scaleValueRef = useRef(new Animated.Value(1));
  const opacityValueRef = useRef(new Animated.Value(1));
  const rotateValue = rotateValueRef.current.interpolate(rotateTest(90));

  return (
    <View>
      <Text>这是几何变换动画</Text>
      <Button
        title={'开始'}
        onPress={() => {
          //开始位移
          Animated.timing(marginValueRef.current, timingStart(180)).start();
          //开始旋转
          Animated.timing(rotateValueRef.current, timingStart(90)).start();
          //开始缩放
          Animated.timing(scaleValueRef.current, timingStart(2)).start();
          //开始透明
          Animated.timing(opacityValueRef.current, timingStart(0)).start();
        }}
      />
      <Button
        title={'恢复'}
        onPress={() => {
          Animated.timing(marginValueRef.current, timingStart(0)).start();
          Animated.timing(rotateValueRef.current, timingStart(0)).start();
          Animated.timing(scaleValueRef.current, timingStart(1)).start();
          Animated.timing(opacityValueRef.current, timingStart(1)).start();
        }}
      />

      <Animated.View
        style={[
          styles.block,
          {marginLeft: marginValueRef.current},
          {
            opacity: opacityValueRef.current,
            transform: [{rotate: rotateValue}, {scale: scaleValueRef.current}],
          },
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
