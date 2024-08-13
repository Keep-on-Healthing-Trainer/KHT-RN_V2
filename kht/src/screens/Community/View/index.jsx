import React, { useEffect, useState, useCallback } from 'react';
import { TextInput, View, TouchableOpacity, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, Alert } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from "./components/Header";
import DataComponents from './components/Data';
import CommentDataComponents from './components/Comment';

import onCommentPost from "../../../apis/CommentPost";
import onCommunityGet from '../../../apis/CommunityGet';
import onGetUserData from "../../../apis/GetUserData";
import onCommentCount from "../../../apis/CommentCount";

const ViewPage = ({navigation, route}) => {
    const [ data, setData ] = useState();
    const [ commentCount, setCommentCount ] = useState();
    const [ userData, setUserData ] = useState();
    const [ viewData, setViewData ] = useState();

    const id = route.params.data;

    useFocusEffect(
        useCallback(() => {
            getUserData();
        }, [])
    );

    const getUserData = async () => {
        const res = await onGetUserData();
        if(res) {
            setUserData(res);
            getViewData();
        }
    }

    const getViewData = async () => {
        console.log(id);
        
        const res = await onCommunityGet(id);
        if(res) {
            setViewData(res);
        }

        const commentRes = await onCommentCount(id);
        if(commentRes) {
            setCommentCount(commentRes);
        }
    }

    const onClickBack = () => {
        navigation.navigate("MainPage", { screen: 'MainPage' });
    }

    const onClickPost = async () => {
        console.log(id);

        if(data.length >= 5 && data.length <= 5000) {
            const res = await onCommentPost(data, id);
            if(res) {
                setData(null);
                getViewData();
            }
        } else {
            Alert.alert('댓글 길이는 5~5000자 사이여야 합니다.');
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={Styles.container}>
                    <BackHeader onPress={() => onClickBack()} />
                        <ScrollView>
                            <View onStartShouldSetResponder={() => true}>
                            {viewData ? (
                                <DataComponents
                                count={commentCount}
                                userNickname={viewData.userNickname}
                                profileImage={viewData.profileImage}
                                title={viewData.title}
                                content={viewData.content}
                                file={viewData.file}
                                />
                            ) : 
                                undefined
                            }
                            <Text style={Styles.text}>댓글</Text>
                            {viewData && viewData.comments.map((item, index) => {
                                return (
                                    <CommentDataComponents
                                    id={item.id}
                                    content={item.content}
                                    userNickname={item.userNickname}
                                    profileImage={item.profileImage}
                                    />
                                );
                            })}
                            </View>
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
    dataContainer: {
        flex: 1,
        width: constants.width,
        height: constants.height/1.1,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: color.Black,
        paddingLeft: 20,
    },
    inputFixed: {
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