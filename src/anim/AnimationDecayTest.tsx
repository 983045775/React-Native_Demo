import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

// @ts-ignore
import url from '../assets/avatar.png';

function AnimationDecayTest() {
    const decayValue = useRef(new Animated.Value(0));

    return (
        <View>
            <Text>{'抖动头像'}</Text>
            <Button
                title={'开始'}
                onPress={() => {
                    Animated.decay(decayValue.current, {
                        velocity: 1,
                        deceleration: 0.993,
                        useNativeDriver: false,
                    }).start();
                }}
            />
            <Button
                title={'恢复'}
                onPress={() => {
                    Animated.decay(decayValue.current, {
                        velocity: 1,
                        deceleration: 0.992,
                        useNativeDriver: false,
                    }).start();
                }}
            />
            <Animated.Image
                source={url}
                style={[styles.photo, {marginLeft: decayValue.current}]}
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
