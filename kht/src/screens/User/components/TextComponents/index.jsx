import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import CustomText from "../../../../styles/CustomText";
import constants from '../../../../styles/constants';
import { color } from '../../../../styles/theme';

const TextComponents = ( props ) => {

    return(
        <View style={Styles.textConteiner}>
            <CustomText style={Styles.boldText}>{props.boldText}</CustomText>
            <CustomText style={Styles.text}>{props.text}</CustomText>
        </View>
    );
}

const Styles = StyleSheet.create({
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.Black
    },
    text: {
        fontSize: 14,
        color: color.Gray[4]
    },
    textConteiner: {
        width: constants.width/1.2,
        alignItems: 'flex-start',
    }
})

export default TextComponents;