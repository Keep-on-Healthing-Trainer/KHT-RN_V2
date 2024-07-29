import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Button from "../../../components/Button";

import ProgressBarComponents from '../components/ProgressBarComponents';
import TextComponents from '../components/TextComponents';
import InputComponents from './components/InputComponents';

const IntentPage = ({navigation}) => {

    const onClickNext = () => {
        navigation.navigate("CountPage", { screen: 'CountPage' });
      }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <ProgressBarComponents data={0.3} />
                <TextComponents
                    boldText="KHT 이용 목적이 어떻게 되시나요?"
                    text="KHT가 딱 맞는 운동을 추천할게요!"
                />
                <InputComponents />
                <Button innerText="다음" onPress={onClickNext} />
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
        justifyContent: 'center',
    },
    center: {
        width: constants.width,
        height: constants.height/1.3,
        alignItems: 'center',
        rowGap: constants.height/15,
    }
})

export default IntentPage;