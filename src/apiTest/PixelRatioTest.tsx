import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
  PixelRatio,
} from 'react-native';

function PixelRatioTest() {
  return (
    <View style={[StyleSheet.absoluteFill, {backgroundColor: '#0091ff33'}]}>
      <Button
        title={'测试'}
        onPress={() => {
          console.log(PixelRatio.get());
          console.log(PixelRatio.getFontScale());
          console.log(PixelRatio.getPixelSizeForLayoutSize(200));
        }}
      />
      <Text>{'测试啊'}</Text>
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
      <View style={styles.viewHeight} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewHeight: {
    backgroundColor: '#339133',
    width: '100%',
    height: PixelRatio.roundToNearestPixel(32.1),
  },
});

export default PixelRatioTest;
