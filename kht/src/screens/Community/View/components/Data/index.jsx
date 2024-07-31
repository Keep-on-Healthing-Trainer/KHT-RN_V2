import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { color } from '../../../../../styles/theme';
import constants from '../../../../../styles/constants';

import Comment from '../../../../../assets/icon/Comment';
import Heart from '../../../../../assets/icon/Heart';
import PullHeart from "../../../../../assets/icon/PullHeart";

const DataComponents = ( props ) => {

    return(
        <View style={Styles.dataContainer}>
            <View style={Styles.profileContainer}>
                <View style={Styles.profile}></View>
                <Text style={Styles.boldText}>이기혁</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.mainBoldText}>확실히 체중 감소 하려면 운동 뿐만 아니라</Text>
                <Text style={Styles.text}>식단도 같이 해야하는듯 ㄹㅇ;; 운동만 해서 빼는게 더 힘드러ㅓㅓㅓㄹㅇ ㅇㅈ?</Text>
            </View>
            <View style={Styles.labelContainer}>
                <View style={Styles.label}>
                    <Comment />
                    <Text>3</Text>
                </View>
                <View style={Styles.label}>
                    {props.data ? (
                        <PullHeart />
                    ) : (
                        <Heart />
                    )}
                    <Text>4</Text>
                </View>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.Black,
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: color.Gray[5],
    },
    dataContainer: {
        width: constants.width,
        backgroundColor: color.White,
        marginBottom: 5,
        padding: 10,
    },
    profileContainer: {
        width: constants.width,
        height: constants.height/15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: color.Black,
    },
    textContainer: {
        width: constants.width,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        rowGap: 5,
    },
    mainBoldText: {
        fontSize: 16,
        color: color.Black,
        fontWeight: '600',
    },
    mainText: {
        fontSize: 14,
        color: color.Black,
        fontWeight: '500',
    },
    labelContainer: {
        width: constants.width,
        height: 30,
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    }
})

export default DataComponents;