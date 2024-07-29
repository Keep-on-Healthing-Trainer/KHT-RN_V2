import React from 'react';
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Search from "../../../components/Search";
import BackButton from "../../../assets/icon/Back";

const ResultPage = ({navigation}) => {

    const data = {
        "resultData": [
            {
                "exerciseName": "캡틴스 체어 레그 레이즈",
                "title": "복근, 허벅지",
                "text": "기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!"
            },
            {
                "exerciseName": "캡틴스 체어 레그 레이즈",
                "title": "복근, 허벅지",
                "text": "기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!"
            },
            {
                "exerciseName": "캡틴스 체어 레그 레이즈",
                "title": "복근, 허벅지",
                "text": "기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!"
            },
            {
                "exerciseName": "캡틴스 체어 레그 레이즈",
                "title": "복근, 허벅지",
                "text": "기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!"
            },
            {
                "exerciseName": "캡틴스 체어 레그 레이즈",
                "title": "복근, 허벅지",
                "text": "기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!"
            },
            {
                "exerciseName": "캡틴스 체어 레그 레이즈",
                "title": "복근, 허벅지",
                "text": "기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!"
            },
            {
                "exerciseName": "캡틴스 체어 레그 레이즈",
                "title": "복근, 허벅지",
                "text": "기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!"
            },
        ]
      }

    return(
        <View style={Styles.container}>
            <View style={Styles.back}>
                <BackButton />
                <Search />
            </View>
            <FlatList
                data={data.resultData}
                renderItem={(item) => {
                    return (
                    <View style={Styles.box}>
                        <View style={Styles.img}></View>
                        <Text style={Styles.boldText}>{item.exerciseName}</Text>
                        <Text style={Styles.text}>{item.title}</Text>
                        <Text style={Styles.text}>{item.text}</Text>
                    </View>
                    );
                }}
            />
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
        rowGap: 10
    },
    back: {
        width: constants.width,
        height: constants.height/9,
        backgroundColor: color.White,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    box: {
        width: constants.width,
        height: constants.height/8,
        backgroundColor: color.Blue[10],
    },
    img: {
        width: 50,
        height: 70,
    },
    boldText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: color.Black,
    },
    text: {
        fontSize: 10,
        fontWeight: '500',
        color: color.Gray[4],
        width: constants.width/1.5,
    },
});

export default ResultPage;