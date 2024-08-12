import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import { color } from '../../../../../styles/theme';
import constants from '../../../../../styles/constants';

import Comment from '../../../../../assets/icon/Comment';

const DataComponents = ( props ) => {

    return(
        <View style={Styles.dataContainer}>
            <View style={Styles.profileContainer}>
                <Image style={Styles.profile} source={{uri: props.profileImage}}></Image>
                <Text style={Styles.boldText}>{props.userNickname}</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.mainBoldText}>{props.title}</Text>
                <Text style={Styles.text}>{props.content}</Text>
                {props.file ? (
                    <Image style={Styles.fileImage} source={{uri: props.file}}></Image>
                ) : undefined}
            </View>
            <View style={Styles.labelContainer}>
                <View style={Styles.label}>
                    <Comment />
                    <Text>{props.count ? props.count : 0}</Text>
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
        height: 50,
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    fileImage: {
        height: constants.width,
        resizeMode: 'contain',
    }
})

export default DataComponents;