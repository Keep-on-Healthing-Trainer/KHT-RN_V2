import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../../styles/constants';

import Select from '../../../../../components/Select';

const InputComponents = ( props ) => {
    const [isClicked, setIsClicked] = useState(0);

    return(
        <View style={Styles.inputContainer}>
            <Select innerText="체지방 감소" onPress={() => setIsClicked(1)} state={isClicked == 1 ? true : false} />
            <Select innerText="근육 증가" onPress={() => setIsClicked(2)} state={isClicked == 2 ? true : false} />
            <Select innerText="건강 체중 유지" onPress={() => setIsClicked(3)} state={isClicked == 3 ? true : false} />
            <Select innerText="지구력 향상" onPress={() => setIsClicked(4)} state={isClicked == 4 ? true : false} />
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