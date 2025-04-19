import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    Linking,
} from 'react-native';

function LinkingTest() {
    return (
        <View style={[styles.root, StyleSheet.absoluteFill]}>
            <Text>{'测试文字'}</Text>
            <TouchableOpacity
                style={styles.btnTest}
                onPress={() => {
                    console.log('点击');

                    // Linking.openURL("https://www.baidu.com");
                    // Linking.openSettings();
                    // Linking.openURL("geo:37.213,-123.4213");
                    // Linking.openURL("tel:17356574937")
                    // Linking.openURL("sms:17356574937?bady=你好")
                    // Linking.openURL("mailto:983045775@qq.com")
                    // Linking.openURL("test_scheme://test_host")
                    Linking.sendIntent('com.lc.action', [
                        {key: 'title', value: '此乃标题'},
                    ]);
                }}>
                <Text style={styles.txt}>测试</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ff00ff11',
    },
    txt: {
        color: 'white',
        fontSize: 18,
    },
    btnTest: {
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#0091ff',
        width: '100%',
    },
});

export default LinkingTest;
