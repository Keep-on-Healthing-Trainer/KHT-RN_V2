import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Header from '../../components/Header';

const RankingPage = ({navigation}) => {

    return(
    <View style={Styles.container}>
      <Header />
      <View style={Styles.textConteiner}>
        <Text style={Styles.boldText}>유저 랭킹</Text>
        <Text style={Styles.text}>KHT로 측정한 운동의 총합 횟수입니다.</Text>
      </View>
      <View style={Styles.topRankingContainer}>
            <View style={Styles.secondRankingContainer}>
                <Text style={Styles.secondRankingFont}>2nd</Text>
                <View style={Styles.secondRankingImg}></View>
                <Text style={Styles.text}>2000회</Text>
                <Text style={Styles.boldText}>이기혁</Text>
            </View>
            <View style={Styles.secondRankingContainer}>
                <Text style={Styles.topRankingFont}>1ST</Text>
                <View style={Styles.topRankingImg}></View>
                <Text style={Styles.text}>2000회</Text>
                <Text style={Styles.boldText}>이기혁</Text>
            </View>
            <View style={Styles.secondRankingContainer}>
                <Text style={Styles.secondRankingFont}>3rd</Text>
                <View style={Styles.secondRankingImg}></View>
                <Text style={Styles.text}>2000회</Text>
                <Text style={Styles.boldText}>이기혁</Text>
            </View>
        </View>
        <View>
            <View style={Styles.rankingContainer}>
                <View style={Styles.rankingImg}></View>
                <Text>이기혁</Text>
                <Text>800회</Text>
            </View>
            <View style={Styles.rankingContainer}>
                <View style={Styles.rankingImg}></View>
                <Text>이기혁</Text>
                <Text>800회</Text>
            </View>
            <View style={Styles.rankingContainer}>
                <View style={Styles.rankingImg}></View>
                <Text>이기혁</Text>
                <Text>800회</Text>
            </View>
            <View style={Styles.rankingContainer}>
                <View style={Styles.rankingImg}></View>
                <Text>이기혁</Text>
                <Text>800회</Text>
            </View>
            <View style={Styles.rankingContainer}>
                <View style={Styles.rankingImg}></View>
                <Text>이기혁</Text>
                <Text>800회</Text>
            </View>
            <View style={Styles.rankingContainer}>
                <View style={Styles.rankingImg}></View>
                <Text>이기혁</Text>
                <Text>800회</Text>
            </View>
            <View style={Styles.rankingContainer}>
                <View style={Styles.rankingImg}></View>
                <Text>이기혁</Text>
                <Text>800회</Text>
            </View>
        </View>
      <View style={Styles.bottom}>
        <View style={Styles.myRankingImg}></View>
        <Text style={Styles.myBoldText}>이기혁</Text>
        <Text style={Styles.myBoldText}>3회</Text>
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
        justifyContent: 'space-between',
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
        width: constants.width/1.1,
        alignItems: 'flex-start',
    },
    topRankingContainer: {
        width: constants.width,
        height: constants.height/6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    secondRankingContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    topRankingFont: {
        fontSize: 22,
        fontWeight: '900',
        color: color.Blue[10],
    },
    secondRankingFont: {
        fontSize: 18,
        fontWeight: '900',
        color: color.Blue[10],
    },
    topRankingImg: {
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: color.Gray[2]
    },
    secondRankingImg: {
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: color.Gray[2]
    },
    rankingContainer: {
        width: constants.width,
        height: constants.height/20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    rankingImg: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: color.Gray[2]
    },
    bottom: {
        borderColor: color.Gray[2],
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: constants.width,
        height: constants.height/10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    myRankingImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: color.Gray[2]
    },
    myBoldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.Black
    },
})

export default RankingPage;