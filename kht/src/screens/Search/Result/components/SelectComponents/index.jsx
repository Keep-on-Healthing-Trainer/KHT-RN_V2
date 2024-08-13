import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../../../../../styles/theme";
import constants from "../../../../../styles/constants";

const SelectComponents = ( props ) => {

    return(
        <TouchableOpacity onPress={props.onPress}>
            {props.state == props.data ? (
                <View style={Styles.focusSelect}>
                    <Text style={Styles.focusSelectText}>{props.data}</Text>
                </View>
            ) : (
                <View style={Styles.noFocusSelect}>
                    <Text style={Styles.noFocusSelectText}>{props.data}</Text> 
                </View>
            )}
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    focusSelect: {
        paddingLeft: 2,
        paddingRight: 2,
        height: constants.height/32,
        display: 'flex',
        alignItems: 'center',
        borderBottomColor: color.Black,
        borderBottomWidth: 1,
    },
    focusSelectText: {
        fontSize: 15,
        color: color.Black,
        fontWeight: '500',
    },
    noFocusSelect: {
        paddingLeft: 2,
        paddingRight: 2,
        height: constants.height/32,
        display: 'flex',
        alignItems: 'center',
    },
    noFocusSelectText: {
        fontSize: 15,
        color: color.Gray[4],
        fontWeight: '500',
    }
});

export default SelectComponents;
