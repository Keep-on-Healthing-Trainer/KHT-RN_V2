import React from 'react';
import { Text, View, Image, StyleSheet, TextComponent } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from './components/Header';

const DataPage = ({navigation, route}) => {
    const name = route.params.name;
    const data = route.params.data;
    
    const onClickBackResult = () => {
        navigation.navigate("ResultPage", { screen: 'ResultPage' });
    }

    const onClickBackSearch = () => {
        navigation.navigate("SearchPage", { screen: 'SearchPage' });
    }

    return(
        <View style={Styles.container}>
            <BackHeader onPress={name ? () => onClickBackSearch() : () => onClickBackResult()} title={data.title} tags={data.tags} />
            <Image style={Styles.img} source={data ? {uri: data.path} : undefined}></Image>
            <View style={Styles.textContainer}>
                <Text style={Styles.boldText}>시작 자세</Text>
                <Text style={Styles.text}>{data.startPosture}</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.boldText}>운동 방법</Text>
                <Text style={Styles.text}>{data.exerciseMethod}</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.boldText}>주의 사항</Text>
                <Text style={Styles.text}>{data.warning}</Text>
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