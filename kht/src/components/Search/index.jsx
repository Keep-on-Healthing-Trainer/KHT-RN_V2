import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import SearchIcon from "../../assets/icon/SearchIcon";

const Search = ( props ) => {

    return(
        <View style={Styles.container}>
            <TextInput style={Styles.input}></TextInput>
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