import React from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  Text,
  ViewProps,
} from 'react-native';

// type NativeInfoType = ViewProps | {};
const InfoViewAndroid = requireNativeComponent('infoViewManagers');

function InfoView() {
  return (
    <InfoViewAndroid style={styles.root}>
    </InfoViewAndroid>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
});

export default InfoView;
