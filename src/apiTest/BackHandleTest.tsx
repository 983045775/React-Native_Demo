import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    BackHandler,
} from 'react-native';

import {useBackHandler} from '@react-native-community/hooks';

function BackHandleTest() {
    const back = () => {
        return true;
    };
    const exit = () => {
        BackHandler.exitApp();
    };
    useBackHandler(() => {
        exit();
        return true;
    });
    BackHandler.addEventListener('hardwareBackPress', back);
    return (
        <View>
            <Text>{'1234'}</Text>
            <Button
                title={'退出'}
                onPress={() => {
                    BackHandler.exitApp();
                }} />
        </View>
    );
}

export default BackHandleTest;
