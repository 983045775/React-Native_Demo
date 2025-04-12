import React from 'react';
import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import iconClose from '../assets/icon_close_modal.png';
import {ContactsData} from '../constant/DataDemo';
import {useModal} from './PersonalView';

function ModalDemo() {
  // @ts-ignore
  const {hideModal} = useModal();

  //定义列表样式
  const rowView = (props:any) => {
    const {item} = props;
    return <Text style={styles.name}>{item}</Text>;
  };

  const headSection = (props:any)  => {
    const {section} = props;
    return <Text style={styles.titleName}> {section.type}</Text>;
  };


  return (
    <View style={styles.root}>
      <View style={styles.titleView}>
        <Text style={styles.titleTxt}>粉丝列表</Text>
        <TouchableOpacity
          style={styles.closeTouch}
          onPress={() => {
            hideModal();
          }}>
          <Image style={styles.closeView} source={iconClose} />
        </TouchableOpacity>
      </View>
      {/*  联系人列表*/}
      <SectionList
        style={{marginTop: 20}}
        sections={ContactsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => {
          return rowView(info);
        }}
        //来个分割线
        ItemSeparatorComponent={() => {
          return <View style={styles.separatorView} />;
        }}
        //头部组件
        renderSectionHeader={info => {
          return headSection(info);
        }}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: '100%',
    height: '92%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
  },
  titleView: {
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  titleTxt: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
  closeTouch: {
    marginRight: 20,
    right: 0,
    position: 'absolute',
    width: 30,
    height: 30,
  },
  closeView: {
    width: 30,
    height: 30,
  },
  name: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  titleName: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dcdcdc',
    color: '#000000',
    fontSize: 16,
  },
  separatorView: {
    width: '100%',
    height: 0,
    backgroundColor: '#000',
  },
});

export default ModalDemo;
