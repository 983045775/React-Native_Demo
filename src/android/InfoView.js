import React from 'react';
import {requireNativeComponent, StyleSheet, ViewProps} from 'react-native';

// type NativeInfoType = ViewProps | {};
const InfoViewAndroid = requireNativeComponent('infoViewManagers');

function InfoView() {
  return <InfoViewAndroid style={styles.root} />;
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 100,
  },
});

export default InfoView;
