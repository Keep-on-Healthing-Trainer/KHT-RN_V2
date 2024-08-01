import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import LogoFont from '../../assets/icon/LogoFont';

const Header = ( props ) => {

    return(
        <View style={Styles.container}>
            <View style={Styles.left}>
                <LogoFont />
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/12,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    left: {
        width: constants.width/5,
        height: constants.height/20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Header;