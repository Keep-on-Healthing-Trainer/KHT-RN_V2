import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Logo from '../../assets/icon/Logo';

const Loading = ({navigation}) => {

    return(
        <View style={Styles.container}>
            <Logo></Logo>
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
        justifyContent: 'center'
    }
})

export default Loading;