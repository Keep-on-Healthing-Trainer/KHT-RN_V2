import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Touchable } from "react-native";
import * as Progress from 'react-native-progress';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Tag from '../../../components/Tag';
import Button from "../../../components/Button";

const SickPage = ({navigation}) => {

    const onClickNext = () => {
        navigation.navigate("ExitPage", { screen: 'ExitPage' });
      }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <Progress.Bar
                    progress={0.7}
                    width={constants.width/1.2}
                    height={constants.height/100}
                    color={color.Blue[10]}
                    borderRadius={50}
                    borderColor={color.Gray[2]}
                    backgroundColor={color.Gray[2]}
                />
                <View style={Styles.textConteiner}>
                    <Text style={Styles.boldText}>운동을 할 때 불편한 부위가 있으신가요?</Text>
                    <Text style={Styles.text}>모든 운동이 모든 사람에게 좋은 건 아니니까,</Text>
                    <Text style={Styles.text}>KHT가 필요한 운동을 추천해드릴게요.</Text>
                </View>
                <View style={Styles.inputContainer}>
                    <View style={Styles.TagContainer}>
                        <Tag innerText="척추" />
                        <Tag innerText="목" />
                        <Tag innerText="어깨" />
                    </View>
                    <View style={Styles.TagContainer}>
                        <Tag innerText="골반" />
                        <Tag innerText="허리 디스크" />
                        <Tag innerText="심장" />
                    </View>
                    <View style={Styles.TagContainer}>
                        <Tag innerText="상체" />
                        <Tag innerText="하체" />
                        <Tag innerText="손목" />
                        <Tag innerText="발목" />
                    </View>
                </View>
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
    inputContainer: {
        width: constants.width,
        height: constants.height/3,
        alignItems: 'center',
    },
    TagContainer: {
        width: constants.width/1.2,
        height: constants.height/20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.Black
    },
    text: {
        fontSize: 14,
        color: color.Gray[4]
    },
    textConteiner: {
        width: constants.width/1.2,
        alignItems: 'flex-start',
    }
})

export default SickPage;