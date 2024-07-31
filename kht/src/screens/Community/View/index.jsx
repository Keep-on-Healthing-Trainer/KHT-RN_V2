import React, { useEffect, useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from "./components/Header";
import DataComponents from './components/Data';
import CommentDataComponents from './components/Comment';

const ViewPage = ({navigation}) => {
    const [data, setData] = useState();

    const onClickBack = () => {
        navigation.navigate("MainPage", { screen: 'MainPage' });
    }

    return(
        <View style={Styles.container}>
            <BackHeader onPress={() => onClickBack()} />
            <ScrollView>
                <DataComponents />
                <CommentDataComponents />
            </ScrollView>
            <View style={Styles.inputFixed}>
                <View style={Styles.profile}></View>
                <TextInput style={Styles.input} placeholder='댓글 추가...' />
                {data ? (
                    <TouchableOpacity>
                        <Text style={Styles.button}>등록</Text>
                    </TouchableOpacity>
                ) : (
                    <></>
                )
                }
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
    },
    inputFixed: {
        position: 'absolute',
        width: constants.width,
        height: constants.height/13,
        backgroundColor: color.White,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: color.Gray[2],
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: color.Black,
    },
    input: {
        backgroundColor: color.Gray[1],
        width: constants.width/1.4,
        height: 45,
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 16,
        color: color.Black,
    },
    button: {
        color: color.Blue[10],
        fontSize: 16,
    }
})


export default ViewPage;