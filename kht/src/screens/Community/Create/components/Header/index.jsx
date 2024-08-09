import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "../../../../../styles/theme";
import constants from "../../../../../styles/constants";

import X from "../../../../../assets/icon/X";

const Header = ( props ) => {

    return(
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.button} onPress={props.onBackPress}>
              <X />
            </TouchableOpacity>
            <View style={Styles.button}>
                <Text style={Styles.boldText}>작성하기</Text>
            </View>
            {props.backState ? (
                <TouchableOpacity style={Styles.button} onPress={props.onPostPress}>
                    <Text style={Styles.colorText}>등록</Text>
                </TouchableOpacity>
            ) : (
                <View style={Styles.button}>
                    <Text style={Styles.text}>등록</Text>
                </View>
            )}
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    button: {
        width: constants.width/6,
        height: constants.height/17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.Black,
    },
    text: {
        color: color.Gray[4],
        fontSize: 16,
        fontWeight: '500',
    },
    colorText: {
        color: color.Blue[10],
        fontSize: 16,
        fontWeight: '500',
    }
})

export default Header;