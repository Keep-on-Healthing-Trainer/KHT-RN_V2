import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from "../../../components/Header";
import Create from "../../../assets/icon/Create";
import DataComponents from './components/Data';

const MainPage = ({navigation}) => {

    const onClickCreate = () => {
        navigation.navigate("CreatePage", { screen: 'CreatePage' });
    }

    const onClickView = () => {
        navigation.navigate("ViewPage", { screen: 'ViewPage' });
    }

    return(
        <View style={Styles.container}>
            <Header />
            <TouchableOpacity style={Styles.create} onPress={() => onClickCreate()}>
                <View style={Styles.createLeft}>
                    <Text style={Styles.boldText}>운동에 관한 생각을 나누어보세요!</Text>
                    <Text style={Styles.text}>KHT 커뮤니티에서 의견을 나누며 도움을 받아요.</Text>
                </View>
                <Create />
            </TouchableOpacity>
            <ScrollView style={Styles.mainContainer}>
                <DataComponents data={false} onPress={() => onClickView()} />
                <DataComponents data={true} onPress={() => onClickView()}  />
                <DataComponents data={false} onPress={() => onClickView()}  />
                <DataComponents data={false} onPress={() => onClickView()}  />
                <DataComponents data={false} onPress={() => onClickView()}  />
                <DataComponents data={true} onPress={() => onClickView()}  />
            </ScrollView>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
    },
    create: {
        width: constants.width,
        height: constants.height/15,
        backgroundColor: color.White,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    createLeft: {
        width: constants.width/1.5,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.Black,
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: color.Gray[5],
    },
    mainContainer: {
        width: constants.width,
        backgroundColor: color.Gray[1],
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 50,
    },
})


export default MainPage;