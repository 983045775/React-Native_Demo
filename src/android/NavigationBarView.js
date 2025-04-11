import React, {useRef, useState} from 'react';
import {View, Text, requireNativeComponent, StyleSheet} from 'react-native';

const NavigationBarLayout = requireNativeComponent('NavigationBarManager');

function NavigationBarView() {
  let [titleName, setTitleName] = useState('这是个默认值');
  return (
    <View style={styles.root}>
      <NavigationBarLayout
        style={styles.navigation}
        onTitleChange={event => {
          const title = event.nativeEvent.title;
          setTitleName(title);
          console.log(title);
        }}></NavigationBarLayout>
      <Text style={styles.txt}>{titleName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  navigation: {
    width: '100%',
    height: 100,
  },
  txt: {
    fontSize: 20,
    color: '#000',
  },
});

export default NavigationBarView;
