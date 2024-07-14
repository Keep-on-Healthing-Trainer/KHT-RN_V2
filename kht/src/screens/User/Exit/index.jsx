import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Touchable } from "react-native";
import * as Progress from 'react-native-progress';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Button from "../../../components/Button";
import Character from "../../../assets/icon/Character";

const ExitPage = ({navigation}) => {

    const onClickNext = () => {
        navigation.navigate("LoginPage", { screen: 'LoginPage' });
    }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <Progress.Bar
                    progress={1}
                    width={constants.width/1.2}
                    height={constants.height/100}
                    color={color.Blue[10]}
                    borderRadius={50}
                    borderColor={color.Gray[2]}
                    backgroundColor={color.Gray[2]}
                />
                <View style={Styles.textConteiner}>
                    <Text style={Styles.boldText}>가입이 완료되었습니다.</Text>
                    <Text style={Styles.text}>만들어진 계정으로 다시 한 번 로그인 해주세요!</Text>
                </View>
                <Character />
                <Text style={Styles.fixText}>KHT가 최고의 맞춤 플랜을 제공할게요!</Text>
                <Button innerText="로그인" onPress={onClickNext} />
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