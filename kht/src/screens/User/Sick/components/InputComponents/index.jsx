import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../../styles/constants';

import Tag from '../../../../../components/Tag';

const InputComponents = ( props ) => {
    const [ data, setData ] = useState({
        'CARDIO': false,
        'SHOULDER': false,
        'ARM': false,
        'ABDOMINAL': false,
        'BACK': false,
        'THIGH': false,
        'CALF': false,
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
                <Tag innerText="유산소" state={(state) => handleSelectChange(state, 'CARDIO')} />
                <Tag innerText="어깨" state={(state) => handleSelectChange(state, 'SHOULDER')} />
                <Tag innerText="팔" state={(state) => handleSelectChange(state, 'ARM')} />
            </View>
            <View style={Styles.TagContainer}>
                <Tag innerText="복근" state={(state) => handleSelectChange(state, 'ABDOMINAL')} />
                <Tag innerText="등" state={(state) => handleSelectChange(state, 'BACK')} />
            </View>
            <View style={Styles.TagContainer}>
                <Tag innerText="허벅지" state={(state) => handleSelectChange(state, 'THIGH')} />
                <Tag innerText="종아리" state={(state) => handleSelectChange(state, 'CALF')} />
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