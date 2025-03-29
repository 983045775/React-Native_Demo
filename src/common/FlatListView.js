import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';

function FlatListView(props) {
  const {size} = props;

  const datas = [];
  const renderItem = info => {
    const {index, item} = info;
    return (
      <Text
        style={
          styles.txt
        }>{`当前下标为 index = ${index} ,他的内容是: ${item}`}</Text>
    );
  };

  let footView = () => {
    return <Text style={{backgroundColor:"#00ff1133",textAlign: 'center'}}>到达底部了</Text>;
  };

  for (let i = 0; i < size; i++) {
    datas.push('这是第 ' + (i + 1) + '个内容');
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={datas}
      //减少渲染开销
      keyExtractor={(_, index) => `item  + ${index}`}
      ListFooterComponent={footView}
      renderItem={renderItem}
    />
  );
}

let styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5FCFF32',
  },
  txt: {
    textAlign: 'left',
    width: '100%',
    height: 60,
    fontSize: 14,
    color: '#000',
  },
});

export default FlatListView;
