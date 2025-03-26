import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';

function PressableView() {
  return (
    <View style={styles.root}>
      <Pressable
        style={state => {
          const {pressed} = state;
          return {
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: pressed ? 'green' : 'white',
          };
        }}>
        {state => {
          const {pressed} = state;
          return (
            <Text
              style={{
                color: pressed ? 'white' : 'green',
              }}>
              按钮
            </Text>
          );
        }}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    backgroundColor: '#00ff00',
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
});

export default PressableView;
