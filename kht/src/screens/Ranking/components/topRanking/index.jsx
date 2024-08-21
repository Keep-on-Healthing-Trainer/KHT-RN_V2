import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import CustomText from "../../../../styles/CustomText";
import { color } from "../../../../styles/theme";
import constants from "../../../../styles/constants";

const TopRankingComponent = (props) => {

    return(
        <View style={Styles.topRankingContainer}>
            <View style={Styles.secondRankingContainer}>
                <CustomText style={Styles.secondRankingFont}>2nd</CustomText>
                <Image style={Styles.secondRankingImg} source={props.data.RankingResponse[1].profileImgUrl ? {uri: props.data.RankingResponse[1].profileImgUrl} : undefined}></Image>
                <CustomText style={Styles.text}>{props.data.RankingResponse[1].totalCounts}회</CustomText>
                <CustomText style={Styles.boldText}>{props.data.RankingResponse[1].userName}</CustomText>
            </View>
            <View style={Styles.secondRankingContainer}>
                <CustomText style={Styles.topRankingFont}>1ST</CustomText>
                <Image style={Styles.secondRankingImg} source={props.data.RankingResponse[0].profileImgUrl ? {uri: props.data.RankingResponse[0].profileImgUrl} : undefined}></Image>
                <CustomText style={Styles.text}>{props.data.RankingResponse[0].totalCounts}회</CustomText>
                <CustomText style={Styles.boldText}>{props.data.RankingResponse[0].userName}</CustomText>
            </View>
            <View style={Styles.secondRankingContainer}>
                <CustomText style={Styles.secondRankingFont}>3rd</CustomText>
                <Image style={Styles.secondRankingImg} source={props.data.RankingResponse[2].profileImgUrl ? {uri: props.data.RankingResponse[2].profileImgUrl} : undefined}></Image>
                <CustomText style={Styles.text}>{props.data.RankingResponse[2].totalCounts}회</CustomText>
                <CustomText style={Styles.boldText}>{props.data.RankingResponse[2].userName}</CustomText>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.Black
    },
    text: {
        fontSize: 14,
        color: color.Gray[4]
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
})

export default TopRankingComponent;