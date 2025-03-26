import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function InputView() {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(true);
  const [touchableTextColor, setTouchTextColor] = useState('#ffffff');
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
      <TouchableOpacity
        style={styles.touchView}
        onPressIn={event => {
          setShow(false);
          setTouchTextColor("#000000")
        }}
        onPressOut={event => {
          setShow(true);
          setTouchTextColor("#ffffff")
        }}>
        <Text style={{color: touchableTextColor}}>
          {show ? '显示' : '隐藏'}
        </Text>
      </TouchableOpacity>
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
  touchView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#03030355',
    marginLeft: 30,
    marginTop: 30,
  },
});

export default InputView;
