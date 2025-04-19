import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function StyleSheetTest() {
    //[ { fontSize: 16, marginTop: 10 },{ fontSize: 20, marginTop: 20 } ]
    const composeStyle = StyleSheet.compose(styles.txt1, styles.txt2);
    // @ts-ignore
    const {fontSize, marginTop} = composeStyle[0];
    //{ fontSize: 20, marginTop: 20 }
    const flattenStyle = StyleSheet.flatten([styles.txt1, styles.txt2]);

    return (
        <View style={[styles.root, StyleSheet.absoluteFill]}>
            <Text style={{marginTop, fontSize}}>{'composeStyle样式练习'}</Text>
            <Text style={flattenStyle}>{'flattenStyle样式练习'}</Text>
            <Button
                title={'点击'}
                onPress={() => {
                    console.log(
                        `fontSize = ${fontSize}  marginTop = ${marginTop}`,
                    );
                    console.log(flattenStyle);
                    console.log(styles.halvingLine);
                }}
            />
            <View style={[styles.halvingLine]} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        padding: 20,
        backgroundColor: '#ff003311',
        flexDirection: 'column',
    },
    txt1: {
        fontSize: 16,
        marginTop: 10,
    },
    txt2: {
        fontSize: 20,
        marginTop: 20,
    },
    halvingLine: {
        backgroundColor: '#000',
        width: '100%',
        marginTop: 10,
        height: StyleSheet.hairlineWidth,
        // height: 21,
    },
});

export default StyleSheetTest;
