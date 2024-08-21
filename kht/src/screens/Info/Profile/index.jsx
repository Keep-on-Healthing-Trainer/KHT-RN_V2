import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from "../components/Header";

import onImageUpload from '../../../apis/ImageUpload';
import onGetUserData from '../../../apis/GetUserData';

const ProfilePage = ({navigation}) => {
    const [imageData, setImageData] = useState();
    const formData = new FormData();
    const [ data, setData ] = useState(null);

    useEffect(() => {
      userData();
    }, []);

    const userData = async () => {
      const res = await onGetUserData();
      if(res) {
        setData(res);
      }
    }

    const onClickBack = () => {
        navigation.navigate("SelectPage", { screen: 'SelectPage' });
    }

    const onClickEdit = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
            });

            //console.log(result);

            setImageData(result.assets[0]);
        } catch (err) {
            console.error(err);
        }
    }

    const onClickSave = async () => {
        formData.append("userId", data.userId);

        const image = {
            uri: imageData.uri,
            type: imageData.mimeType,
            name: imageData.name,
        }

        if(imageData) {
            formData.append("image", image);
            //console.log('폼데이터 추가');
        } else {
            formData.append("image", "");
        }

        const res = await onImageUpload(formData);
        if(res) {
            navigation.navigate("SelectPage", { screen: 'SelectPage' });
        }
    }

    return (
        <View style={Styles.container}>
            <BackHeader data="프로필 사진" onPress={() => onClickBack()} />
            <View style={Styles.profileContainer}>
                <Image style={Styles.profile} source={imageData ? {uri: imageData.uri} : (data ? {uri: data.profileImgeUrl} : undefined)} />
                <View style={Styles.textContainer}>
                    <Text style={Styles.text}>프로필 이미지를 설정하지 않을</Text>
                    <Text style={Styles.text}>경우에는 기본 프로필로 설정됩니다.</Text>
                </View>
            </View>
            <View style={Styles.buttonContainer}>
                <TouchableOpacity style={Styles.button} onPress={() => onClickEdit()}>
                    <Text style={Styles.buttonText}>수정하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => onClickSave()}>
                    <Text style={Styles.buttonText}>저장하기</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
        rowGap: 70,
    },
    profileContainer: {
        width: constants.width,
        height: constants.height/3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 50,
    },
    profile: {
        width: 200,
        height: 200,
        backgroundColor: color.Gray[2],
        borderRadius: 200,
    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        color: color.Blue[10],
        fontWeight: '500',
    },
    buttonContainer: {
        width: constants.width,
        height: constants.height/3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 10,
    },
    button: {
        borderColor: color.Blue[10],
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: color.Blue[10],
        fontWeight: '600',
    }
});

export default ProfilePage;
