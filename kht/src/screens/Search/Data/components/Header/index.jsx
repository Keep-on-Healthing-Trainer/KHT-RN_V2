import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import CustomText from "../../../../../styles/CustomText";
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
                <CustomText style={Styles.text}>{props.title}</CustomText>
                <View style={Styles.gap}>
                    {props.tags.map((item, index) => {
                        return (
                            <CustomText style={Styles.dataText}>{item}</CustomText>
                            )
                        })
                    }
                </View>
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
    },
    gap: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    }
})

export default BackHeader;