import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Platform} from 'react-native';

function InputView() {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(true);
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.textInputStyle}
        defaultValue={'110'}
        secureTextEntry={show ? true : false}
        keyboardType={'number-pad'}
        onChangeText={value => {
          if (/^\d*$/.test(value)) {
            setValue(value);
          }
        }}
        value={value}></TextInput>
      <Text
        style={{marginTop: 24, marginLeft: 20}}
        onPress={event => {
          setShow(!show);
        }}>
        {show ? '显示' : '隐藏'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInputStyle: {
    borderRadius: 14,
    minHeight: 30,
    backgroundColor: '#ff000055',
    minWidth: 250,
    fontSize: 20,
    marginTop: 30,
    marginLeft: 30,
  },
});

export default InputView;
