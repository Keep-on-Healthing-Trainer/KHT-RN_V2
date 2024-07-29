import React from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../../styles/constants';

import Input from '../../../../../components/Input';

const InputComponents = ( props ) => {

    return(
        <View style={Styles.inputContainer}>
            <Input innerText="이름" state={false} />
            <Input innerText="전화번호" state={false} />
            <Input innerText="아이디" state={false} />
            <Input innerText="비밀번호" state={true} />
            <Input innerText="비밀번호 확인" state={true} />
        </View>
    );
}

const Styles = StyleSheet.create({
    inputContainer: {
        width: constants.width,
        height: constants.height/3,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: constants.height/60
    },
})

export default InputComponents;