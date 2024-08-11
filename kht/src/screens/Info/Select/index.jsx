import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from '../components/Header';
import ProfileArrow from '../../../assets/icon/ProfileArrow';

import onGetUserData from '../../../apis/GetUserData';

const SelectPage = ({navigation}) => {
    const [ data, setData ] = useState();

    useFocusEffect(
        useCallback(() => {
            userData();
        }, [])
    );

    const userData = async () => {
      const res = await onGetUserData();
      if(res) {
        setData(res);
      }
    }

    const onClickProfile = () => {
        navigation.navigate("ProfilePage", { screen: 'ProfilePage'});
    }

    const onClickName = () => {
        navigation.navigate("EditPage", { screen: 'EditPage', name: "name"});
    }

    const onClickId = () => {
        navigation.navigate("EditPage", { screen: 'EditPage', name: "userId"});
    }

    const onClickPhone = () => {
        navigation.navigate("EditPage", { screen: 'EditPage', name: "phoneNumber"});
    }

    const onClickBack = () => {
        navigation.navigate("MainPage", { screen: 'MainPage' });
      }

    return(
        <View style={Styles.container}>
            <BackHeader data='프로필 편집' onPress={() => onClickBack()} />
            <View style={Styles.profileContainer}>
                <Image style={Styles.profile} source={data ? {uri: data.profileImgeUrl} : undefined}></Image>
                <TouchableOpacity onPress={() => onClickProfile()}>
                    <Text style={Styles.profileText}>프로필 사진 수정</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.nameContainer}>
                <View style={Styles.nameDiv}>
                    <Text style={Styles.nameTagStyle}>이름</Text>
                    <Text style={Styles.nameStyle}>{data ? data.name : null}</Text>
                    <TouchableOpacity style={Styles.nameBox} onPress={() => onClickName()}>
                        <ProfileArrow></ProfileArrow>
                    </TouchableOpacity>
                </View>
                <View style={Styles.nameDiv}>
                    <Text style={Styles.nameTagStyle}>아이디</Text>
                    <Text style={Styles.nameStyle}>{data ? data.userId : null}</Text>
                    <TouchableOpacity style={Styles.nameBox} onPress={() => onClickId()}>
                        <ProfileArrow></ProfileArrow>
                    </TouchableOpacity>
                </View>
                <View style={Styles.nameDiv}>
                    <Text style={Styles.nameTagStyle}>전화번호</Text>
                    <Text style={Styles.nameStyle}>{data ? data.phoneNumber : null}</Text>
                    <TouchableOpacity style={Styles.nameBox} onPress={() => onClickPhone()}>
                        <ProfileArrow></ProfileArrow>
                    </TouchableOpacity>
                </View>
                <View style={Styles.nameDiv}>
                    <Text style={Styles.nameTagStyle}>부상 부위 재선택</Text>
                    <TouchableOpacity style={Styles.box}>
                        <ProfileArrow></ProfileArrow>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
    );
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.White,
      width: constants.width,
      height: constants.height,
      alignItems: 'center'
    },
    profileContainer: {
        alignItems: 'center',
        margin: constants.height/20,
        width: constants.width
    },
    profile: {
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundColor: color.Gray[5],
    },
    profileText: {
        color: color.Blue[10],
        fontSize: 14,
        marginTop: constants.height/50,
    },
    nameContainer: {
        width: constants.width/10*8,
        rowGap: 35,
    },
    nameDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameTagStyle: {
        color: color.Black,
        fontSize: 15,
        height: constants.height/30,
        width: constants.width/10*3
    },
    nameStyle: {
        color: color.Black,
        fontSize: 15,
        height: constants.height/30,
        width: constants.width/10*4.5
    },
    nameBox: {
        width: constants.width/10,
        height: constants.height/30
    },
    box: {
        width: constants.width/10,
        height: constants.height/30,
        alignItems: 'center',
    }
  })

export default SelectPage;