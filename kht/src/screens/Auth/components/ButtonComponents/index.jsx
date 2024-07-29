import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import constants from '../../../../styles/constants';
import { color } from '../../../../styles/theme';

import Button from '../../../../components/Button';
import CheckBox from '../../../../components/CheckBox';

const ButtonComponents = ( props ) => {

    return(
        <View style={Styles.inputContainer}>
            <CheckBox />
            <Button innerText="로그인" onPress={props.onLogin} />
            <TouchableOpacity style={Styles.buttonContainer} onPress={props.onSignup} >
                <Text style={Styles.text}>계정이 없으신가요?</Text>
                <Text style={Styles.textColor}>회원가입</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    inputContainer: {
        width: constants.width,
        alignItems: 'center',
        rowGap: constants.height/60
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    text: {
        fontSize: 12
    },
    textColor: {
        color: color.Blue[10],
        fontSize: 12
    }
})

export default ButtonComponents;