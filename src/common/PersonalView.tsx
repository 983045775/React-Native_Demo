import React, {useState, useRef, useEffect, createContext, useContext} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Modal, GestureResponderEvent,
} from 'react-native';

// @ts-ignore
import background from '../assets/icon_bg.png';
// @ts-ignore
import menu from '../assets/icon_menu.png';
// @ts-ignore
import share from '../assets/icon_share.png';
// @ts-ignore
import avatar from '../assets/default_avatar.png';
// @ts-ignore
import add from '../assets/icon_add.png';
// @ts-ignore
import code from '../assets/icon_code.png';
// @ts-ignore
import male from '../assets/icon_male.png';
// @ts-ignore
import setting from '../assets/icon_setting.png';
// @ts-ignore
import icon_1 from '../assets/icon_1.png';
// @ts-ignore
import icon_2 from '../assets/icon_2.png';
// @ts-ignore
import icon_3 from '../assets/icon_3.png';
import ModalDemo from './ModalDemo.tsx';

//定义一个函数,根据值判断设置颜色
// @ts-ignore
const ModalContext = createContext();

function PersonalView() {
  const [chooseInt, setChooseInt] = useState(0);

  const noteRef = useRef(null);
  const collectRef = useRef(null);
  const praiseRef = useRef(null);
  const contentIconRef = useRef(null);

  const contentList:any[] = [];

  const [show, setShow] = useState(false);

  function hideModal() {
    setShow(false);
  }

  function showModal() {
    setShow(true);
  }

  contentList[0] = (
    <>
      <Image style={styles.bottomIcon} ref={contentIconRef} source={icon_1} />
      <Text style={styles.bottomTxt1}>用一句话，分享今天的快乐吧~</Text>
      <Text style={styles.bottomTxt2}>去分享</Text>
    </>
  );
  contentList[1] = (
    <>
      <Image style={styles.bottomIcon} ref={contentIconRef} source={icon_2} />
      <Text style={styles.bottomTxt1}>快去收藏你喜欢的作品吧～</Text>
      <Text style={styles.bottomTxt2}>去分享</Text>
    </>
  );
  contentList[2] = (
    <>
      <Image style={styles.bottomIcon} ref={contentIconRef} source={icon_3} />
      <Text style={styles.bottomTxt1}>你还没有给作品点赞哦～</Text>
      <Text style={styles.bottomTxt2}>去分享</Text>
    </>
  );

  function getView() {
    if (chooseInt == 1) {
      return contentList[0];
    } else if (chooseInt == 2) {
      return contentList[1];
    } else if (chooseInt == 3) {
      return contentList[2];
    }
  }

  useEffect(() => {
    //初始化好了
    setChooseInt(1);
  }, []);
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
        {/* 男女展示 */}
        <View style={styles.maleView}>
          <Image style={styles.maleImg} source={male} />
        </View>
        {/* 横着排列的fan */}
        <View style={styles.fanRoot}>
          <View style={styles.fanView}>
            <Text style={styles.numberTxt}>142</Text>
            <Text style={[styles.numberTxt, {color: '#ffffff77'}]}>关注</Text>
          </View>
          <View style={styles.fanView}>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => {
                showModal();
              }}>
              <Text style={styles.numberTxt}>2098</Text>
              <Text style={[styles.numberTxt, {color: '#ffffff77'}]}>粉丝</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fanView}>
            <Text style={styles.numberTxt}>1042</Text>
            <Text style={[styles.numberTxt, {color: '#ffffff77'}]}>
              获赞与收藏
            </Text>
          </View>
          {/* 编辑资料 */}
          <Text style={styles.materialTxt}>编辑资料</Text>
          {/* 齿轮 */}
          <View style={styles.settingView}>
            <Image style={styles.settingImg} source={setting}></Image>
          </View>
        </View>
        {/* 下半部分 */}
        <View style={styles.contentViewRoot}>
          {/*  三个标题栏*/}
          <View style={styles.contentTitleView}>
            <TouchableOpacity
              style={styles.chooseTxtView}
              onPress={(event:GestureResponderEvent) => {
                event.nativeEvent.force
                setChooseInt(1);
              }}>
              <Text
                style={[
                  styles.contentTitleTxt,
                  {color: chooseInt == 1 ? '#000000' : '#00000066'},
                ]}
                ref={noteRef}>
                笔记
              </Text>
              <View
                style={[
                  styles.underlineView,
                  {backgroundColor: chooseInt == 1 ? '#ff0000' : ''},
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chooseTxtView, {marginLeft: 20}]}
              onPress={(event:GestureResponderEvent) => {
                event.nativeEvent.force
                setChooseInt(2);
              }}>
              <Text
                style={[
                  styles.contentTitleTxt,
                  {color: chooseInt == 2 ? '#000000' : '#00000066'},
                ]}
                ref={collectRef}>
                收藏
              </Text>
              <View
                style={[
                  styles.underlineView,
                  {backgroundColor: chooseInt == 2 ? '#ff0000' : ''},
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chooseTxtView, {marginLeft: 20}]}
              onPress={() => {
                setChooseInt(3);
              }}>
              <Text
                style={[
                  styles.contentTitleTxt,
                  {color: chooseInt == 3 ? '#000000' : '#00000066'},
                ]}
                ref={praiseRef}>
                赞过
              </Text>
              <View
                style={[
                  styles.underlineView,
                  {backgroundColor: chooseInt == 3 ? '#ff0000' : ''},
                ]}
              />
            </TouchableOpacity>
          </View>
          {/*  三个标题栏下的线*/}
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#00000033',
              marginTop: 10,
            }}
          />
          {/*  下面主页内容*/}
          <View style={styles.bottomContent}>{getView()}</View>
        </View>
      </ImageBackground>

      <Modal
        style={styles.root}
        visible={show}
        transparent={true}
        onRequestClose={() => {
          hideModal();
        }}>
        <ModalContext.Provider value={{ hideModal}}>
          <ModalDemo />
        </ModalContext.Provider>
      </Modal>
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
  maleView: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff66',
    width: 30,
    marginTop: 10,
    marginLeft: 10,
    height: 20,
  },
  maleImg: {
    width: 10,
    height: 16,
  },
  fanRoot: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  fanView: {
    marginLeft: 14,
    alignItems: 'center',
    flexDirection: 'column',
  },
  numberTxt: {
    fontSize: 14,
    color: 'white',
  },
  materialTxt: {
    position: 'absolute',
    right: 0,
    marginRight: 80,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    borderColor: '#ffffff',
    borderWidth: 1,
    width: 80,
    height: 40,
    borderRadius: 20,
  },
  settingImg: {
    width: 24,
    height: 24,
    tintColor: '#ffffff',
  },
  settingView: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 200,
    width: 60,
    right: 0,
    position: 'absolute',
    height: 40,
    tintColor: '#ffffff',
  },
  contentViewRoot: {
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: '#fafafa',
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: '60%',
  },
  contentTitleView: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentTitleTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chooseTxtView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  underlineView: {
    marginTop: 8,
    width: 30,
    height: 2,
  },
  bottomContent: {
    alignItems: 'center',
  },
  bottomIcon: {
    width: 200,
    height: 200,
  },
  bottomTxt1: {
    marginTop: 10,
  },
  bottomTxt2: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
  },
});
export default PersonalView;

export const useModal = () => useContext(ModalContext);
