import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

function ScrollViewDemo(props) {
  return (
    <View style={styles.root}>
      <ScrollView></ScrollView>
      <Text style={styles.txt}>置顶</Text>
      <Text style={styles.txt}>到达底部</Text>
    </View>
  );
}

const styles = {
  root: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 600,
    backgroundColor: '#fff333',
  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 30,
    color: '#fff',
    backgroundColor: '#322322',
    fontSize: 16,
    width: 80,
    height: 80,
  },
};

export default ScrollViewDemo;
