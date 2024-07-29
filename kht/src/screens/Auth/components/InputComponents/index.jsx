import React from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../styles/constants';

import Input from '../../../../components/Input';

const InputComponents = ( props ) => {

    return(
        <View style={Styles.inputContainer}>
            <Input innerText="아이디" state={false} />
            <Input innerText="비밀번호" state={true} />
        </View>
    );
}

const Styles = StyleSheet.create({
    inputContainer: {
        width: constants.width,
        alignItems: 'center',
        rowGap: constants.height/60
    },
})

export default InputComponents;