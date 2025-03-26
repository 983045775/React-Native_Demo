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
        activeOpacity={0.8}
        style={styles.touchView}
        onPressIn={() => {
          setShow(false);
          setTouchTextColor('#000');
        }}
        onPressOut={() => {
          setShow(true);
          setTouchTextColor('#fff');
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
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInputStyle: {
    borderRadius: 14,
    minHeight: 30,
    backgroundColor: '#333fff33',
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
