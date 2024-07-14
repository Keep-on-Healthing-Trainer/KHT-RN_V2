import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Touchable } from "react-native";
import * as Progress from 'react-native-progress';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Select from "../../../components/Select";
import Button from "../../../components/Button";

const IntentPage = ({navigation}) => {
    const [isClicked, setIsClicked] = useState(0);

    const onClickNext = () => {
        navigation.navigate("CountPage", { screen: 'CountPage' });
      }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <Progress.Bar
                    progress={0.3}
                    width={constants.width/1.2}
                    height={constants.height/100}
                    color={color.Blue[10]}
                    borderRadius={50}
                    borderColor={color.Gray[2]}
                    backgroundColor={color.Gray[2]}
                />
                <View style={Styles.textConteiner}>
                    <Text style={Styles.boldText}>KHT 이용 목적이 어떻게 되시나요?</Text>
                    <Text style={Styles.text}>KHT가 딱 맞는 운동을 추천할게요!</Text>
                </View>
                <View style={Styles.inputContainer}>
                    <Select innerText="체지방 감소" onPress={() => setIsClicked(1)} state={isClicked == 1 ? true : false} />
                    <Select innerText="근육 증가" onPress={() => setIsClicked(2)} state={isClicked == 2 ? true : false} />
                    <Select innerText="건강 체중 유지" onPress={() => setIsClicked(3)} state={isClicked == 3 ? true : false} />
                    <Select innerText="지구력 향상" onPress={() => setIsClicked(4)} state={isClicked == 4 ? true : false} />
                </View>
                <Button innerText="다음" onPress={onClickNext} />
            </View>
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
        justifyContent: 'center',
    },
    center: {
        width: constants.width,
        height: constants.height/1.3,
        alignItems: 'center',
        rowGap: constants.height/15,
    },
    inputContainer: {
        width: constants.width,
        height: constants.height/3,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: constants.height/60
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.Black
    },
    text: {
        fontSize: 14,
        color: color.Gray[4]
    },
    textConteiner: {
        width: constants.width/1.2,
        alignItems: 'flex-start',
    }
})

export default IntentPage;