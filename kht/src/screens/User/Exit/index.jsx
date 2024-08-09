import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Touchable } from "react-native";
import * as Progress from 'react-native-progress';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Button from "../../../components/Button";
import Character from "../../../assets/icon/Character";

import ProgressBarComponents from "../components/ProgressBarComponents";
import TextComponents from "../components/TextComponents";

import onSignup from "../../../apis/Signup";

const ExitPage = ({navigation, route}) => {
    const signupData = route.params.data;

    const onClickSignup = async () => {
        try {
          const signupState = await onSignup(signupData);
          if (signupState) {
            navigation.navigate("LoginPage", { screen: 'LoginPage' });
          }
        } catch (error) {
          console.log("회웝가입 오류");
        }
    }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <ProgressBarComponents data={1} />
                <TextComponents
                    boldText="가입이 완료되었습니다."
                    text="만들어진 계정으로 다시 한 번 로그인 해주세요!"
                />
                <Character />
                <Text style={Styles.fixText}>KHT가 최고의 맞춤 플랜을 제공할게요!</Text>
                <Button innerText="로그인" onPress={onClickSignup} />
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
        height: constants.height/1.3,
        alignItems: 'center',
        rowGap: constants.height/15,
    },
    fixText: {
        position: 'absolute',
        top: constants.height/2,
        fontSize: 22,
        fontWeight: 'bold',
        color: color.Black
    }
})

export default ExitPage;