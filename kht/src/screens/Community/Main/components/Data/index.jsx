import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import CustomText from "../../../../../styles/CustomText";
import { color } from '../../../../../styles/theme';
import constants from '../../../../../styles/constants';

const DataComponents = (props) => {

    return (
        <TouchableOpacity style={Styles.dataContainer} onPress={props.onPress}>
            <View style={Styles.profileContainer}>
                <Image style={Styles.profile} source={{ uri: props.profile }} />
                <CustomText style={Styles.boldText}>{props.name}</CustomText>
            </View>
            <View style={Styles.textContainer}>
                <CustomText style={Styles.mainBoldText}>{props.title}</CustomText>
                <CustomText style={Styles.text}>{props.content}</CustomText>
                {props.path ? (
                    <Image style={Styles.dataImage} source={{ uri: props.path }} />
                ) : undefined}
            </View>
        </TouchableOpacity>
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
        height: constants.height / 15,
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
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: color.Gray[1],
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
    dataImage: {
        height: constants.width,
        resizeMode: 'contain',
    }
});

export default DataComponents;
