import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Logo from "../../assets/icon/Logo";
import InputComponents from './components/InputComponents';
import ButtonComponents from './components/ButtonComponents';

const LoginPage = ({navigation}) => {

    const onClickLogin = () => {
        navigation.navigate("MainScreen", { screen: 'MainScreen' });
    }
    
    const onClickSignup = () => {
        navigation.navigate("SignupScreen", { screen: 'SignupTab' });
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.center}>
                <Logo />
                <InputComponents />
                <ButtonComponents onLogin={()=>onClickLogin()} onSignup={()=>onClickSignup()} />
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        width: constants.width,
        height: constants.height/2,
        alignItems: 'center',
        rowGap: constants.height/25
    }
})

export default LoginPage;