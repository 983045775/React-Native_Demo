import React from 'react';
import {View, Button, NativeModules, StyleSheet} from 'react-native';

function BridgeClassDemo() {
    const {AppModule} = NativeModules;
    //解构
    const {name, age} = AppModule;

    return (
        <View style={styles.root}>
            <Button
                title={'我是按钮'}
                onPress={() => {
                    AppModule.androidToast(
                        '打印这句话吧！所以方法名不能重复啊',
                        '这句话才能生效',
                    ).then((data: string) => {
                        console.log(data);
                    });
                }}
            />
            <Button
                title={'我是第二个按钮'}
                onPress={() => {
                    console.log(
                        '我的名字叫' + name + '今年已经 ' + age + ' 岁了',
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
});

export default BridgeClassDemo;
