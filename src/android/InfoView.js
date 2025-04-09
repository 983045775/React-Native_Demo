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
    <InfoViewAndroid
      style={styles.root}
      photo={
        'https://profile-avatar.csdnimg.cn/072ef6bcbfcc4459a9157ddb77cc8aab_sinat_30620013.jpg'
      }
      name={'刘铖'}
      desc={'一个人类'}
      onChange={event => {
        let log = event.nativeEvent.shape;
        console.log(log);
      }}></InfoViewAndroid>
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
