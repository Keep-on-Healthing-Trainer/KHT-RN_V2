import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import constants from '../../../../styles/constants';
import { color } from '../../../../styles/theme';

const TextComponents = ( props ) => {

    return(
        <View style={Styles.textConteiner}>
            <Text style={Styles.boldText}>{props.boldText}</Text>
            <Text style={Styles.text}>{props.text}</Text>
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