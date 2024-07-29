import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../../styles/constants';

import Tag from '../../../../../components/Tag';

const InputComponents = ( props ) => {

    return(
        <View style={Styles.inputContainer}>
            <View style={Styles.TagContainer}>
                <Tag innerText="척추" />
                <Tag innerText="목" />
                <Tag innerText="어깨" />
            </View>
            <View style={Styles.TagContainer}>
                <Tag innerText="골반" />
                <Tag innerText="허리 디스크" />
                <Tag innerText="심장" />
            </View>
            <View style={Styles.TagContainer}>
                <Tag innerText="상체" />
                <Tag innerText="하체" />
                <Tag innerText="손목" />
                <Tag innerText="발목" />
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    inputContainer: {
        width: constants.width,
        height: constants.height/3,
        alignItems: 'center',
    },
    TagContainer: {
        width: constants.width/1.2,
        height: constants.height/20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
})

export default InputComponents;