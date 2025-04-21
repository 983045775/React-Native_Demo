import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Animated,
    Easing,
} from 'react-native';

// @ts-ignore
import home from '../assets/icon_home.png';
// @ts-ignore
import gift from '../assets/icon_gift.png';
// @ts-ignore
import mine from '../assets/icon_mine.png';
// @ts-ignore
import show from '../assets/icon_show.png';

export default () => {
    const leftRef1 = useRef(new Animated.Value(200));
    const leftRef2 = useRef(new Animated.Value(70));
    const leftRef3 = useRef(new Animated.Value(70));
    const leftRef4 = useRef(new Animated.Value(70));
    const [index, setIndex] = useState(1);

    const pressTouch: (num: number) => void = (num: number) => {
        if (num === index) {
            return;
        }
        setIndex(num);
        Animated.timing(leftRef1.current, {
            toValue: num == 1 ? 200 : 70,
            useNativeDriver: false,
            duration: num == 1 ? 500 : 300,
            easing: num == 1 ? Easing.elastic(3) : Easing.elastic(0),
        }).start();
        Animated.timing(leftRef2.current, {
            toValue: num == 2 ? 200 : 70,
            useNativeDriver: false,
            duration: num == 2 ? 500 : 300,
            easing: num == 2 ? Easing.elastic(3) : Easing.elastic(0),
        }).start();
        Animated.timing(leftRef3.current, {
            toValue: num == 3 ? 200 : 70,
            useNativeDriver: false,
            easing: num == 3 ? Easing.elastic(3) : Easing.elastic(0),
            duration: num == 3 ? 500 : 300,
        }).start();
        Animated.timing(leftRef4.current, {
            toValue: num == 4 ? 200 : 70,
            easing: num == 4 ? Easing.elastic(3) : Easing.elastic(0),
            useNativeDriver: false,
            duration: num == 4 ? 500 : 300,
        }).start();
    };

    return (
        <View style={[styles.root, StyleSheet.absoluteFill]}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    pressTouch(1);
                }}>
                <Animated.View
                    style={[
                        styles.containerTouch,
                        {width: leftRef1.current},
                        {opacity: index != 1 ? 0.75 : 1},
                    ]}>
                    <Image source={home} style={styles.img} />
                    <Text style={styles.txt}>{'我的主页'}</Text>
                    <View style={styles.circle} />
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    pressTouch(2);
                }}>
                <Animated.View
                    style={[
                        styles.containerTouch,
                        {opacity: index != 2 ? 0.75 : 1},
                        {width: leftRef2.current},
                    ]}>
                    <Image source={show} style={styles.img} />
                    <Text style={styles.txt}>{'一个皇冠'}</Text>
                    <View style={styles.circle} />
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    pressTouch(3);
                }}>
                <Animated.View
                    style={[
                        styles.containerTouch,
                        {opacity: index != 3 ? 0.75 : 1},
                        {width: leftRef3.current},
                    ]}>
                    <Image source={gift} style={styles.img} />
                    <Text style={styles.txt}>{'启动飞机'}</Text>
                    <View style={styles.circle} />
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    pressTouch(4);
                }}>
                <Animated.View
                    style={[
                        styles.containerTouch,
                        {opacity: index != 4 ? 0.75 : 1},
                        {width: leftRef4.current},
                    ]}>
                    <Image source={mine} style={styles.img} />
                    <Text style={styles.txt}>{'个人信息'}</Text>
                    <View style={styles.circle} />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    containerTouch: {
        overflow: 'hidden',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: 20,
        height: 60,
        backgroundColor: '#2121ff',
    },
    img: {
        marginLeft: 20,
        width: 40,
        height: 40,
        tintColor: '#ffffff',
    },
    txt: {
        marginLeft: 20,
        color: '#ffffffCC',
    },
    circle: {
        marginLeft: 10,
        backgroundColor: '#00ff00',
        borderRadius: 5,
        width: 10,
        height: 10,
    },
});
