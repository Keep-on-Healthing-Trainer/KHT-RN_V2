import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Logo from "../../assets/icon/Logo";
import Input from "../../components/Input";
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';

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
                <View style={Styles.inputContainer}>
                    <Input innerText="아이디" state={false} />
                    <Input innerText="비밀번호" state={true} />
                </View>
                <View style={Styles.inputContainer}>
                    <CheckBox />
                    <Button
                        innerText="로그인"
                        onPress={() => onClickLogin()}
                    />
                    <TouchableOpacity
                        style={Styles.buttonContainer}
                        onPress={() => onClickSignup()}>
                        <Text style={Styles.text}>계정이 없으신가요?</Text>
                        <Text style={Styles.textColor}>회원가입</Text>
                    </TouchableOpacity>
                </View>
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
    },
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

export default LoginPage;