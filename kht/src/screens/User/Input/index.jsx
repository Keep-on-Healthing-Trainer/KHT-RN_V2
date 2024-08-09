import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
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
        navigation.navigate("IntentPage", { screen: 'IntentPage', data: signupData });
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