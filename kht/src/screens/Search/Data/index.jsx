import React from 'react';
import { Text, View, Image, StyleSheet, TextComponent } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from './components/Header';

const DataPage = ({navigation}) => {
    
    const onClickBack = () => {
        navigation.navigate("ResultPage", { screen: 'ResultPage' });
    }

    return(
        <View style={Styles.container}>
            <BackHeader onPress={() => onClickBack()} />
            <View style={Styles.img}></View>
            <View style={Styles.textContainer}>
                <Text style={Styles.boldText}>시작 자세</Text>
                <Text style={Styles.text}>그걸 내가 어떻게 알아 난 운동의 운짜도 모르는 사람이야</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.boldText}>운동 방법</Text>
                <Text style={Styles.text}>1. 그걸 내가 알고 있었으면 대마고에서 이런 게 아니라 </Text>
                <Text style={Styles.text}>2. 동네 헬스장에서 아줌마들 PT 해주고 있었겠죠?</Text>
                <Text style={Styles.text}>3. 진짜 하기 싫다...</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.boldText}>주의 사항</Text>
                <Text style={Styles.text}>1. 아무래도 이거 하기 전에 술마시면 넘어지겠죠?</Text>
                <Text style={Styles.text}>2. 음 아무래도 이거 하고 독약을 먹으면 안됩니다.</Text>
                <Text style={Styles.text}>3. 허리 아프신분들 하지 마세요호</Text>
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
        rowGap: 30,
    },
    img: {
        width: constants.width/1.2,
        height: constants.height/4,
        backgroundColor: color.Gray[2],
        borderRadius: 20,
    },
    textContainer: {
        width: constants.width/1.2,
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.Black,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: color.Black,
    }
});

export default DataPage;