import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Logo from "../../assets/icon/Logo";
import InputComponents from './components/InputComponents';
import ButtonComponents from './components/ButtonComponents';

import onLogin from '../../apis/Login';

const LoginPage = ({navigation}) => {
    const [ loginData, setLoginData] = useState();
    const [ autoLogin, setAutoLogin ] = useState(false);

    const onClickLogin = async () => {
        if(loginData !== null) {
            try {
                const loginState = await onLogin(loginData, autoLogin);
                if (loginState) {
                  navigation.navigate("MainScreen", { screen: 'MainScreen' });
                }
            } catch (error) {
                console.log("로그인 오류");
            }
        }
    }
    
    const onClickSignup = () => {
        navigation.navigate("SignupScreen", { screen: 'SignupTab' });
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <View style={Styles.center}>
                    <Logo />
                    <InputComponents onGetInText={(text) => setLoginData(text)} />
                    <ButtonComponents
                    onLogin={() => onClickLogin()}
                    onSignup={() => onClickSignup()}
                    onGetInState={(state) => setAutoLogin(state)}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
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