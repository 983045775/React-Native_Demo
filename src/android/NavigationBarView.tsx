import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  requireNativeComponent,
  StyleSheet,
  UIManager,
  findNodeHandle,
  GestureResponderEvent,
  ViewProps,
} from 'react-native';

type NavigationBarManagerView = ViewProps | {
    onTitleChange:(event:any)=>void;
};

const NavigationBarLayout = requireNativeComponent<NavigationBarManagerView>(
  'NavigationBarManager',
);

function NavigationBarView() {
  let [titleName, setTitleName] = useState('这是个默认值');
  let navigationRef = useRef(null);

  return (
    <View style={styles.root}>
      <NavigationBarLayout
        ref={navigationRef}
        style={styles.navigation}
        onTitleChange={(event: any) => {
          const title: string = event.nativeEvent.title;
          setTitleName(title);
          console.log(title);
        }}></NavigationBarLayout>
      <Text
        style={styles.txt}
        onPress={(event: GestureResponderEvent) => {
          event.nativeEvent.timestamp;
          let findId = findNodeHandle(navigationRef.current);
          const changeColorCommand = UIManager.getViewManagerConfig(
            'NavigationBarManager',
          ).Commands['chaneColor'];
          const changePhotoCommand = UIManager.getViewManagerConfig(
            'NavigationBarManager',
          ).Commands['chanePhoto'];
          //发送一个指令给安卓
          UIManager.dispatchViewManagerCommand(findId, changeColorCommand, [
            '#037452',
          ]);
          UIManager.dispatchViewManagerCommand(findId, changePhotoCommand, [
            'https://profile-avatar.csdnimg.cn/5dc5d2cd27db454daf645cf2a3401fbf_sinyu890807.jpg',
          ]);
        }}>
        {titleName}
      </Text>
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
