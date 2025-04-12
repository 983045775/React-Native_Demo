import React from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';
import {ContactsData} from '../constant/DataDemo';

function SectionViewDemo() {
  const renderView = (info: any) => {
    const {item} = info;
    return <Text style={styles.txt}>{`姓名 : ${item}`}</Text>;
  };

  const sectionHeadView = (info: any) => {
    const {section} = info;
    return <Text style={styles.headTxt}>{section.type}</Text>;
  };

  const ItemSeparatorView = () => {
    return <View style={styles.ItemSeparatorStyle}></View>;
  };

  return (
    <SectionList
      ItemSeparatorComponent={ItemSeparatorView}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.sectionContainerStyle}
      renderSectionHeader={sectionHeadView}
      stickySectionHeadersEnabled={true}
      sections={ContactsData}
      refreshControl={undefined}
      //提供的数据必须有data字段,react-native要求
      renderItem={renderView}></SectionList>
  );
}

let styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 400,
  },
  headTxt: {
    backgroundColor: '#00ff00',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  txt: {
    marginTop: 20,
    backgroundColor: '#00ffff55',
    fontSize: 20,
    color: '#00000099',
  },
  sectionContainerStyle: {
    padding: 20,
  },
  ItemSeparatorStyle: {
    width: '100%',
    height: 0.4,
    backgroundColor: '#000',
  },
});

export default SectionViewDemo;
