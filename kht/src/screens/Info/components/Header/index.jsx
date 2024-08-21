import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import CustomText from "../../../../styles/CustomText";
import { color } from '../../../../styles/theme';
import constants from '../../../../styles/constants';

import Back from "../../../../assets/icon/Back";

const BackHeader = ( props ) => {

    return(
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.view} onPress={props.onPress}>
                <Back />
            </TouchableOpacity>
            <View style={Styles.view}>
                <CustomText style={Styles.text}>{props.data}</CustomText>
            </View>
            <View style={Styles.view}></View>
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
        justifyContent: 'space-between',
        paddingLeft: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.Black,
    },
    view: {
        width: constants.width/4,
    }
})

export default BackHeader;