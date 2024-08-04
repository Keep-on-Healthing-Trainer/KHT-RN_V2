import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Button from "../../../components/Button";
import ProgressBarComponents from '../components/ProgressBarComponents';
import TextComponents from '../components/TextComponents';
import InputComponents from './components/InputComponents';

const SickPage = ({navigation, route}) => {
    const signupData = route.params.data;

    const onClickNext = () => {
        navigation.navigate("ExitPage", { screen: 'ExitPage', data: signupData });
      }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <ProgressBarComponents data={0.7} />
                <TextComponents
                    boldText="운동을 할 때 불편한 부위가 있으신가요?"
                    text="KHT가 필요한 운동을 추천해드릴게요."
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
    },
})

export default SickPage;