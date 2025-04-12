import React, {useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function ScrollViewDemo(props: any) {
  //定义ref的hooks
  const scrRef = useRef(null);

  const {length} = props;

  const Views = () => {
    //定义一个数组, 全是text
    const mViews = [];

    for (let i = 0; i < length; i++) {
      mViews.push(
        <Text style={styles.scrollTxt} key={'优化渲染' + i}>
          {'当前是第 ' + (i + 1) + ' 个'}
        </Text>,
      );
    }
    console.log('长度是几个view  = ' + mViews.length);
    return mViews;
  };

  return (
    <View style={styles.root}>
      <ScrollView ref={scrRef} style={styles.scrollStyle}>
        {Views()}
      </ScrollView>
      <TouchableOpacity activeOpacity={0.6} style={styles.touchableView}>
        <Text
          onPress={() => {
            let mSView: ScrollView = scrRef.current!;
            mSView.scrollTo({y: 0, animated: true});
          }}
          style={styles.txt}>
          置顶
        </Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6} style={styles.touchableView}>
        <Text
          onPress={() => {
            let mSView: ScrollView = scrRef.current!;
            mSView.scrollToEnd({animated: true});
          }}
          style={styles.txt}>
          到达底部
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 600,
    backgroundColor: '#fff333',
  },
  touchableView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#322322',
    width: 80,
    height: 80,
  },
  txt: {
    color: '#fff',
  },
  scrollTxt: {
    backgroundColor: '#f23',
    marginTop: 30,
    color: '#000',
    fontSize: 24,
  },
  scrollStyle: {
    backgroundColor: '#0f0',
    width: '100%',
    height: 350,
    //元素不应该在 flex 容器中分配额外的可用空间，即使容器有多余空间也保持其原始尺寸
    flexGrow: 0,
  },
});

export default ScrollViewDemo;
