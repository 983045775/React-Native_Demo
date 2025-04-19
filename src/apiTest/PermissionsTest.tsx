import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    BackHandler,
    PermissionsAndroid,
} from 'react-native';

import {PermissionStatus} from 'react-native/Libraries/PermissionsAndroid/PermissionsAndroid';

function PermissionsTest() {
    return (
        <View>
            <Text>Permissions</Text>
            <Button
                title={'申请权限'}
                onPress={() => {
                    PermissionsAndroid.requestMultiple([
                        'android.permission.BLUETOOTH_CONNECT',
                        'android.permission.RECORD_AUDIO',
                    ]).then(result => {
                        console.log(result);
                    });

                    // PermissionsAndroid.check('android.permission.RECORD_AUDIO').then(
                    //   result => {
                    //     if (result) {
                    //       console.log('有权限了');
                    //
                    //     } else {
                    //       PermissionsAndroid.request(
                    //         'android.permission.RECORD_AUDIO',
                    //       ).then((results: PermissionStatus) => {
                    //         if (results === 'granted') {
                    //           console.log('granted');
                    //         } else if (results === 'denied') {
                    //           console.log('denied');
                    //         } else if (results === 'never_ask_again') {
                    //           console.log('never_ask_again');
                    //         }
                    //       });
                    //       console.log('没有录音权限');
                    //     }
                    //   },
                    // );
                }}
            />
        </View>
    );
}

export default PermissionsTest;
