import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Button from "../../../components/Button";

import InputComponents from './components/InputComponents';
import ProgressBarComponents from '../components/ProgressBarComponents';
import TextComponents from '../components/TextComponents';

const CountPage = ({navigation, route}) => {
    const signupData = route.params.data;
    
    const onClickNext = () => {
        navigation.navigate("SickPage", { screen: 'SickPage', data: signupData });
      }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <ProgressBarComponents data={0.5} />
                <TextComponents
                    boldText="윗몸 일으키기를 몇 개 수행 가능한가요?"
                    text="잘 모르겠다면 이 질문은 넘어가셔도 괜찮아요."
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

export default CountPage;