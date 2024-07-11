import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Logo from '../../assets/icon/Logo';

const Loading = ({navigation}) => {

    return(
        <View>
            <Logo></Logo>
        </View>
    );
}

export default Loading;