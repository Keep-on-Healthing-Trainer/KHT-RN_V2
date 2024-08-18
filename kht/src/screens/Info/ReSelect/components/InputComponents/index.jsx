import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../../styles/constants';

import Tag from '../../../../../components/Tag';

const InputComponents = ( props ) => {
    const [ data, setData ] = useState({
        '척추': false,
        '목': false,
        '어깨': false,
        '골반': false,
        '허리디스크': false,
        '심장': false,
        '상체': false,
        '하체': false,
        '손목': false,
        '발목': false,
    });

    useEffect(() => {
        props.state(data);
    }, [data]);

    const handleSelectChange = (text, field) => {
        setData(prevData => ({
          ...prevData,
          [field]: text
        }));
    };

    return(
        <View style={Styles.inputContainer}>
            <View style={Styles.TagContainer}>
                <Tag innerText="척추" state={(state) => handleSelectChange(state, '척추')} />
                <Tag innerText="목" state={(state) => handleSelectChange(state, '목')} />
                <Tag innerText="어깨" state={(state) => handleSelectChange(state, '어깨')} />
            </View>
            <View style={Styles.TagContainer}>
                <Tag innerText="골반" state={(state) => handleSelectChange(state, '골반')} />
                <Tag innerText="허리 디스크" state={(state) => handleSelectChange(state, '허리디스크')} />
                <Tag innerText="심장" state={(state) => handleSelectChange(state, '심장')} />
            </View>
            <View style={Styles.TagContainer}>
                <Tag innerText="상체" state={(state) => handleSelectChange(state, '상체')} />
                <Tag innerText="하체" state={(state) => handleSelectChange(state, '하체')} />
                <Tag innerText="손목" state={(state) => handleSelectChange(state, '손목')} />
                <Tag innerText="발목" state={(state) => handleSelectChange(state, '발목')} />
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