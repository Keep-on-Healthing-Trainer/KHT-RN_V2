import React from 'react';
import { Text, View, Image, StyleSheet, TextComponent } from "react-native";
import CustomText from '../../../styles/CustomText';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from './components/Header';

const DataPage = ({navigation, route}) => {
    const name = route.params.name;
    const data = route.params.data;
    const title = route.params.title;
    
    const onClickBackResult = () => {
        navigation.navigate("ResultPage", { screen: 'ResultPage', title: title });
    }

    const onClickBackSearch = () => {
        navigation.navigate("SearchPage", { screen: 'SearchPage' });
    }

    return(
        <View style={Styles.container}>
            <BackHeader onPress={name ? () => onClickBackSearch() : () => onClickBackResult()} title={data.title} tags={data.tags} />
            <Image style={Styles.img} source={data ? {uri: data.path} : undefined}></Image>
            <View style={Styles.textContainer}>
                <CustomText style={Styles.boldText}>시작 자세</CustomText>
                <CustomText style={Styles.text}>{data.startPosture}</CustomText>
            </View>
            <View style={Styles.textContainer}>
                <CustomText style={Styles.boldText}>운동 방법</CustomText>
                <CustomText style={Styles.text}>{data.exerciseMethod}</CustomText>
            </View>
            <View style={Styles.textContainer}>
                <CustomText style={Styles.boldText}>주의 사항</CustomText>
                <CustomText style={Styles.text}>{data.warning}</CustomText>
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
        borderRadius: 20,
        resizeMode: 'contain'
    },
    textContainer: {
        width: constants.width/1.2,
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.Blue[10],
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: color.Black,
    }
});

export default DataPage;