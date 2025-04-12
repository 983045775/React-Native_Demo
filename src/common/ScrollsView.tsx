import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

function ScrollsView() {
  const scrollRef = useRef(null);
  const Views = () => {
    //定义一个数组
    const viewArrays = [];
    for (let i = 0; i < 30; i++) {
      viewArrays.push(
        <Text style={styles.txt} key={i}>
          {'item  = ' + (i + 1)}
        </Text>,
      );
    }
    //返回数组里面全是text标签
    return viewArrays;
  };

  return (
    <ScrollView
      ref={scrollRef}
      stickyHeaderIndices={[0, 1]}
      style={styles.root}>
      <Text
        style={styles.txt}
        onPress={() => {
          console.log('press');
          const mSv: ScrollView = scrollRef.current!;
          mSv.scrollTo({y: 0, animated: true});
        }}>
        第一个
      </Text>
      <Text
        style={styles.txt}
        onPress={() => {
          console.log('press');
          const mSv: ScrollView = scrollRef.current!;
          mSv.scrollToEnd();
        }}>
        第二个
      </Text>
      {Views()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 400,
    paddingLeft: 20,
    backgroundColor: '#38383812',
  },
  txt: {
    padding: 40,
    backgroundColor: '#38383812',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
});

export default ScrollsView;
