import React, {useRef, useEffect} from 'react';
import {
    findNodeHandle,
    requireNativeComponent,
    StyleSheet,
    UIManager,
    ViewProps,
} from 'react-native';

type NativeInfoType =
    | ViewProps
    | {
          photo: string;
          name: string;
          desc: string;
          onChange: (e: any) => void;
      };
const InfoViewAndroid =
    requireNativeComponent<NativeInfoType>('infoViewManagers');

function InfoView() {
    const newAdd: (a?: number, b?: number) => number = (
        a?: number,
        b: number = 3,
    ) => {
        const c = (a || 1) + (b || 5);
        return c;
    };

    console.log(newAdd());

    function add(a: number, b: number) {
        return a + b;
    }

    add(1, 2);
    const setTextNameColor: (setCommand: string, params: any[]) => void = (
        setCommand,
        params,
    ) => {
        //找到view的id
        const findid = findNodeHandle(infoViewRef.current);
        //根据输入的指令找到Andoroid对应的code
        const findCommand =
            UIManager.getViewManagerConfig('infoViewManagers').Commands[
                setCommand
            ];
        // const findCommand = UIManager.infoViewManagers.Commands[setCommand].toString();
        console.log('找到的code为:' + findCommand);
        //通过UI管理器分发一个指令
        UIManager.dispatchViewManagerCommand(findid, findCommand, params);
    };

    useEffect(() => {
        setTimeout(() => {
            setTextNameColor('setColor', ['#037452']);
            setTextNameColor('setName', ['张三']);
        }, 2000);
    }, []);

    let infoViewRef = useRef(null);

    return (
        <InfoViewAndroid
            ref={infoViewRef}
            style={styles.root}
            photo={
                'https://profile-avatar.csdnimg.cn/072ef6bcbfcc4459a9157ddb77cc8aab_sinat_30620013.jpg'
            }
            name={'刘铖'}
            desc={'一个人类'}
            onChange={(event: any) => {
                let log = event.nativeEvent.shape;
                console.log(log);
            }}
        />
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        width: '100%',
        height: 100,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
    },
});

export default InfoView;
