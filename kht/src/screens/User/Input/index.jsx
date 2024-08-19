import React, { useEffect, useState } from 'react';
import { Text, View, Alert, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Button from "../../../components/Button";
import ProgressBarComponents from '../components/ProgressBarComponents';
import TextComponents from '../components/TextComponents';
import InputComponents from './components/InputComponents';

const InputPage = ({navigation}) => {
    const [ signupData, setSignupData] = useState();

    useEffect(() => {
        console.log(signupData);
    },[signupData]);

    const onClickNext = () => {
        if(signupData.name.length >= 2 && signupData.name.length <= 8) {
            if(signupData.userId.length >= 6 && signupData.userId.length <= 15) {
                if(signupData.phoneNumber.length == 11) {
                    if(signupData.password == signupData.passwordCheck) {
                        if(signupData.password.length >= 8 && signupData.password.length <= 20) {
                            navigation.navigate("IntentPage", { screen: 'IntentPage', data: signupData });
                        } else {
                            Alert.alert('비밀번호의 길이는 8~20자 사이여야 합니다.');
                        }
                    } else {
                        Alert.alert('비밀번호 확인이 일치하지 않습니다.');
                    }
                } else {
                    Alert.alert('전화번호의 길이는 11자여야 합니다.');
                }
            } else {
                Alert.alert('아이디의 길이는 6~15자 사이여야 합니다.');
            }
        } else {
            Alert.alert('이름의 길이는 2~8자 사이여야 합니다.');
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container} >
                <View style={Styles.center}>
                    <ProgressBarComponents data={0.05} />
                    <TextComponents
                        boldText="회원가입을 위한 정보를 입력해주세요."
                        text="KHT 서비스를 이용하기 위해 필요한 기본적인 정보를 입력해주세요."
                    />
                    <InputComponents onGetInText={(text) => setSignupData(text)}/>
                    <Button innerText="다음" onPress={() => onClickNext()}/>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        width: constants.width,
        height: constants.height/1.3,
        alignItems: 'center',
        rowGap: constants.height/15,
    },
})

export default InputPage;