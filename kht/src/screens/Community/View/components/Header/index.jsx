import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "../../../../../styles/theme";
import constants from "../../../../../styles/constants";

import Back from "../../../../../assets/icon/Back";

const BackHeader = ( props ) => {

    return(
        <View style={Styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                 <Back />
            </TouchableOpacity>
            <Text style={Styles.text}>커뮤니티</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: 20,
        paddingLeft: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.Black,
    }
})

export default BackHeader;