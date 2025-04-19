import React, {useState, useRef} from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
    Animated,
    Image,
    LayoutAnimation,
} from 'react-native';

// @ts-ignore
import photo from '../assets/avatar.png';

export default () => {
    const [showReverse, setShowReverse] = useState(false);
    const desc: string = '这是一段自我介绍';
    return (
        <View>
            <Text>{'layout animation的使用'}</Text>

            <Button
                title={'变换'}
                onPress={() => {
                    LayoutAnimation.configureNext(
                        LayoutAnimation.Presets.spring,
                        () => {
                            console.log('动画结束');
                        },
                        () => {
                            console.log('动画失败');
                        },
                    );
                    showReverse ? setShowReverse(false) : setShowReverse(true);
                }}
            />
            <View
                style={[
                    styles.ontentRoot,
                    {flexDirection: showReverse ? 'row-reverse' : 'row'},
                ]}>
                <Image style={styles.photo} source={photo} />
                <Text>
                    {showReverse ? desc.split('').reverse().join('') : desc}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ontentRoot: {
        paddingBottom: 100,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
    },
    photo: {
        margin: 40,
        width: 80,
        height: 80,
    },
});
