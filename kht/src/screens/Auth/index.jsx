import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Logo from "../../assets/icon/Logo";
import InputComponents from './components/InputComponents';
import ButtonComponents from './components/ButtonComponents';

import onLogin from '../../utils/Login';

const LoginPage = ({navigation}) => {
    const [ loginData, setLoginData] = useState();
    const [ autoLogin, setAutoLogin ] = useState(false);

    useEffect(() => {
        console.log(loginData);
        console.log(autoLogin);
    },[loginData, autoLogin]);

    const onClickLogin = async () => {
        try {
          const loginState = await onLogin(loginData, autoLogin);
          if (loginState) {
            navigation.navigate("MainScreen", { screen: 'MainScreen' });
          }
        } catch (error) {
          console.log("로그인 오류");
        }
    }
    
    const onClickSignup = () => {
        navigation.navigate("SignupScreen", { screen: 'SignupTab' });
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.center}>
                <Logo />
                <InputComponents onGetInText={(text) => setLoginData(text)} />
                <ButtonComponents
                onLogin={()=>onClickLogin()}
                onSignup={()=>onClickSignup()}
                onGetInState={(state) => setAutoLogin(state)}
                />
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