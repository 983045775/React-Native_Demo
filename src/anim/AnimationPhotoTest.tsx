import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

// @ts-ignore
import url from '../assets/avatar.png';

function AnimationDecayTest() {
    const shakeValue = useRef(new Animated.ValueXY({x: 0, y: 0}));
    const animLoop = Animated.loop(
        Animated.sequence([
            Animated.timing(shakeValue.current, {
                duration: 10,
                toValue: {x: 1, y: 1},
                useNativeDriver: false,
            }),
            Animated.timing(shakeValue.current, {
                toValue: {x: -1, y: -1},
                duration: 10,
                useNativeDriver: false,
            }),
        ]),
    );

    const shakeShow = () => {
        return animLoop;
    };

    return (
        <View>
            <Text>{'抖动头像'}</Text>
            <Button
                title={'开始'}
                onPress={() => {
                    shakeShow().start();
                }}
            />
            <Button
                title={'恢复'}
                onPress={() => {
                    shakeShow().reset();
                }}
            />
            <Animated.Image
                source={url}
                style={[
                    styles.photo,
                    {
                        marginLeft: shakeValue.current.x,
                        marginTop: shakeValue.current.y,
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    photo: {
        marginTop: 30,
        marginLeft: 30,
        borderRadius: 45,
        width: 90,
        height: 90,
    },
});

export default AnimationDecayTest;
