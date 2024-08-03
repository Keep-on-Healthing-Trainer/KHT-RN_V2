import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import axios from "axios";

import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from "../components/Header";

const ProfilePage = ({navigation}) => {
    const [imageUrl, setImageUrl] = useState();
    const formData = new FormData();

    const onClickBack = () => {
        navigation.navigate("SelectPage", { screen: 'SelectPage' });
    }

    const uploadImage = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
            });
            console.log(result);

            //if (result.type === 'success') {
                setImageUrl(result.assets[0].uri);
                formData.append("image", result);
                formData.append("userId", '');
                API();
            //}
        } catch (err) {
            console.error(err);
        }
    }

    const API = () => {
        const token = '';
        axios
          .post(
            `{API_URL}/user/modifyProfile`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log('성공');
          })
          .catch((err) => {
            console.error(err);
            console.log('실패');
          });
      };

    return (
        <View style={Styles.container}>
            <BackHeader data="프로필 사진" onPress={() => onClickBack()} />
            <View style={Styles.profileContainer}>
                <Image style={Styles.profile} source={imageUrl ? {uri: imageUrl} : undefined} />
                <View style={Styles.textContainer}>
                    <Text style={Styles.text}>프로필 이미지를 설정하지 않을</Text>
                    <Text style={Styles.text}>경우에는 기본 프로필로 설정됩니다.</Text>
                </View>
            </View>
            <View style={Styles.buttonContainer}>
                <TouchableOpacity style={Styles.button} onPress={() => uploadImage()}>
                    <Text style={Styles.buttonText}>수정하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
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
