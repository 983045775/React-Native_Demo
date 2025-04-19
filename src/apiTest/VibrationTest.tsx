import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    BackHandler,
    PermissionsAndroid,
    Vibration,
    ToastAndroid,
    Image,
} from 'react-native';

// @ts-ignore
import avatar from '../assets/avatar.png';

function vibrationTest() {
    const startVibration = () => {
        Vibration.vibrate([100, 200], true);
    };

    const closeVibration = () => {
        Vibration.cancel();
    };

    return (
        <View>
            <Button
                title={'开始振动'}
                onPress={() => {
                    startVibration();
                    ToastAndroid.showWithGravity(
                        '开始振动',
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP,
                    );
                }}
            />
            <Button
                title={'结束振动'}
                onPress={() => {
                    closeVibration();
                }}
            />

            <Image style={styles.photo} source={avatar} />
        </View>
    );
}

const styles = StyleSheet.create({
    photo: {
        transform: [
            // {scaleX:1.2},
            // {translateX:30},
            {rotateX: '100deg'},
            {rotate: '90deg'},
        ],
    },
});

export default vibrationTest;
