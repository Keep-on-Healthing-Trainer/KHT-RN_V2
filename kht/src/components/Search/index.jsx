import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import SearchIcon from "../../assets/icon/SearchIcon";

const Search = ( props ) => {
    const [ text, setText ] = useState('');

    useEffect(() => {
        props.onGetInText(text);
    }, [text]);

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.input}
                placeholderTextColor={color.Blue[10]}
                placeholder='원하시는 운동을 검색해보세요.'
                onChangeText={(innerText) => setText(innerText)}
                onSubmitEditing={props.enter}
                returnKeyType="done"
            />
            <SearchIcon />
        </View>
    );
}
const Styles = StyleSheet.create({
    container: {
        width: constants.width/1.2,
        height: constants.height/20,
        borderRadius: 50,
        fontSize: 14,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: color.Blue[10],
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: constants.width/1.5,
        fontSize: 16,
    }
})

export default Search;