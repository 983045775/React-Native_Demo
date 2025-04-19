import React from 'react';
import {Text, View} from 'react-native';

function TsDemo() {
    let desc: string = '简介';

    let toastString: (log: string) => void = (log: string) => {
        console.log(log);
    };

    toastString('打印这句话');

    const lc: Teacher = {
        name: '刘铖老师',
        age: 26,
        play: '玩电脑',
        eat: '吃饭',
    };

    const mother: People.Lc = {
        name: '刘铖',
        age: '23',
    };
    console.log(lc.play);
    console.log(mother.name);
    return (
        <View>
            <Text>{desc}</Text>
        </View>
    );
}

export default TsDemo;
