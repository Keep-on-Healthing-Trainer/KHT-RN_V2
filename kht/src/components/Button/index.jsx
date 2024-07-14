import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

const Button = ( props ) => {

    return(
        <TouchableOpacity style={Styles.container} onPress={props.onPress}>
            <Text style={Styles.font} >
                {props.innerText}
            </Text>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width/1.2,
        height: constants.height/20,
        backgroundColor: color.Blue[10],
        borderRadius: 10,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    font: {
        color: color.White,
        fontSize: 15
    }
})

export default Button;