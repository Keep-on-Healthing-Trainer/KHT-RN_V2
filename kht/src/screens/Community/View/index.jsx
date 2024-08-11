import React, { useEffect, useState, useCallback } from 'react';
import { TextInput, View, TouchableOpacity, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard, Image } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from "./components/Header";
import DataComponents from './components/Data';
import CommentDataComponents from './components/Comment';

import onCommentPost from "../../../apis/CommentPost";
import onGetUserData from "../../../apis/GetUserData";

const ViewPage = ({navigation}) => {
    const [ data, setData ] = useState();
    const [ comment, setComment ] = useState();
    const [ userData, setUserData ] = useState();

    useFocusEffect(
        useCallback(() => {
            getUserData();
        }, [])
    );

    const getUserData = async () => {
        const res = await onGetUserData();
        if(res) {
            setUserData(res);
        }
    }

    const onClickBack = () => {
        navigation.navigate("MainPage", { screen: 'MainPage' });
    }

    const onClickPost = async () => {
        const res = await onCommentPost(data, id);
        if(res) {
            setData(null);
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={Styles.container}>
                    <BackHeader onPress={() => onClickBack()} />
                    <ScrollView>
                        <DataComponents />
                        <CommentDataComponents />
                        {/* {comment.map((item, index) => {
                            return (
                                <CommentDataComponents />
                            );
                        })} */}
                    </ScrollView>
                    <View style={Styles.inputFixed}>
                        <Image style={Styles.profile} source={userData ? {uri: userData.profileImgeUrl} : undefined}></Image>
                        <TextInput style={Styles.input} placeholder='댓글 추가...' onChangeText={(text) => setData(text)}>{data}</TextInput>
                        {data ? (
                            <TouchableOpacity onPress={() => onClickPost()}>
                                <Text style={Styles.button}>등록</Text>
                            </TouchableOpacity>
                            ) : (
                                <></>
                            )
                        }
                    </View>
                </View>
        </TouchableWithoutFeedback>
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