import React from 'react';
import {View, Image, StyleSheet, ImageBackground, Text} from 'react-native';

import background from '../assets/icon_bg.png';
import menu from '../assets/icon_menu.png';
import share from '../assets/icon_share.png';
import avatar from '../assets/default_avatar.png';
import add from '../assets/icon_add.png';
import code from '../assets/icon_code.png';

function PersonalView() {
  return (
    <View style={styles.root}>
      <ImageBackground style={styles.imgBackground} source={background}>
        <View style={styles.title}>
          <Image style={styles.menu} source={menu}></Image>
          <View style={styles.placeholderView}></View>
          <Image style={styles.share} source={share}></Image>
        </View>
        {/*头像*/}
        <View style={styles.avatarView}>
          <ImageBackground
            style={styles.imgAvatar}
            imageStyle={styles.avatar}
            source={avatar}>
            <Image style={styles.add} source={add}></Image>
          </ImageBackground>
          {/*名字和二维码*/}
          <View style={styles.descContainer}>
            <Text style={styles.name}>大公爵</Text>
            <View style={styles.titleContainer}>
              <Text style={styles.desc}>小红书号:118302851</Text>
              <Image style={styles.code} source={code} />
            </View>
          </View>
        </View>
        {/*点击关注，填写简介*/}
        <Text style={styles.follow}>点击关注，填写简介</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  imgBackground: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  title: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
  },
  menu: {
    marginLeft: 10,
    marginTop: 10,
    width: 20,
    height: 18,
  },
  //占位
  placeholderView: {
    flexGrow: 1,
  },
  share: {
    marginRight: 10,
    marginTop: 10,
    width: 20,
    height: 20,
  },
  avatar: {
    borderRadius: 200,
  },
  imgAvatar: {
    width: 90,
    height: 90,
  },
  add: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
  },
  avatarView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    width: '100%',
    height: 90,
  },
  name: {
    fontSize: 20,
    color: 'white',
  },
  desc: {
    fontSize: 14,
    color: 'white',
  },
  descContainer: {
    width: '100%',
    paddingLeft: 10,
  },
  titleContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  code: {
    marginLeft: 6,
    marginTop: 4,
    width: 16,
    height: 16,
  },
  follow: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
    marginLeft: 10,
  },
});

export default PersonalView;
