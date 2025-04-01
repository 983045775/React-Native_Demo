import React, { useRef } from 'react';
import { View, Image, Button } from 'react-native';

const SafeImageSwitcher = () => {
    const imageRef = useRef(null);

    // 统一使用 { uri } 格式
    const imageSources = [
        { uri: 'https://img2.baidu.com/it/u=3591122179,2235140218&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500' },
        { uri: 'https://img2.baidu.com/it/u=955428606,1573245622&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500' }
    ];

    let currentIndex = 0;

    const switchImage = () => {
        currentIndex = (currentIndex + 1) % imageSources.length;

        if (imageRef.current) {
            imageRef.current.setNativeProps({
                source: imageSources[currentIndex]
            });
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                ref={imageRef}
                source={imageSources[0]}
                style={{ width: 200, height: 200 }}
            />
            <Button title="切换图片" onPress={switchImage} />
        </View>
    );
};

export default SafeImageSwitcher;
