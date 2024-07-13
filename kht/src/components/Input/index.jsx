import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

const Input = ( props ) => {

    return(
        <TextInput style={Styles.container} placeholder={props.innerText} secureTextEntry={props.state}></TextInput>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width/1.2,
        height: constants.height/20,
        backgroundColor: color.Gray[0],
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    }
})

export default Input;