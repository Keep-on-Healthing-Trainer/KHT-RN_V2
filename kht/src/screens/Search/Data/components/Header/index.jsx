import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "../../../../../styles/theme";
import constants from "../../../../../styles/constants";

import Back from "../../../../../assets/icon/Back";

const BackHeader = ( props ) => {

    return(
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.dataContainer} onPress={props.onPress}>
                 <Back />
            </TouchableOpacity>
            <View style={Styles.dataContainer}>
                <Text style={Styles.text}>캡틴스 체어 레그 레이즈</Text>
                <Text style={Styles.dataText}>복근, 허벅지</Text>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: 20,
        paddingLeft: 20,
    },
    dataText: {
        color: color.Gray[4],
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.Black,
    },
    dataContainer: {
        height: constants.height/22,
        display: 'flex',
        justifyContent: 'center',
    }
})

export default BackHeader;