import React, {useState, useRef} from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
    Animated,
} from 'react-native';

export default () => {
    const [offsetY, setOffsetY] = useState(0);
    const leftScrollViewRef = useRef<View>(null);
    const offsetYAnimRef = useRef(new Animated.Value(0));
    if (leftScrollViewRef.current != null) {
        // leftScrollViewRef.current.scrollTo(offsetY, 0);
    }
    const arrayList = () => {
        const array = [];
        for (let i = 0; i < 30; i++) {
            array.push(i);
        }
        return array;
    };

    const colors = [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#FFFF00',
        '#FF8247',
        '#9400D3',
    ];

    const views = () => {
        const colorView = arrayList().map((item, index) => {
            return (
                <View
                    key={index}
                    style={{
                        backgroundColor: colors[index % 6],
                        width: 100,
                        height: 60,
                    }}
                />
            );
        });

        return <>{colorView}</>;
    };

    return (
        <View style={[styles.root, StyleSheet.absoluteFill]}>
            <View style={styles.contentRoot}>
                {true && (
                    <Animated.View
                        style={[
                            {
                                transform: [
                                    {
                                        translateY: Animated.multiply(
                                            -1,
                                            offsetYAnimRef.current,
                                        ),
                                        // translateY: -1 * offsetY,
                                    },
                                ],
                            },
                        ]}
                        ref={leftScrollViewRef}>
                        {views()}
                    </Animated.View>
                )}

                <ScrollView
                    style={{marginLeft: 30}}
                    onScroll={event => {
                        setOffsetY(event.nativeEvent.contentOffset.y),
                            offsetYAnimRef.current.setValue(
                                event.nativeEvent.contentOffset.y,
                            );
                    }}>
                    {views()}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#3300ff11',
        flexDirection: 'row',
    },
    viewStyles: {},
    contentRoot: {
        paddingLeft: 30,
        width: '100%',
        flexDirection: 'row',
    },
});
