import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Touchable } from "react-native";
import * as Progress from 'react-native-progress';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Select from "../../../components/Select";
import Button from "../../../components/Button";

const CountPage = ({navigation}) => {
    const [isClicked, setIsClicked] = useState(0);

    const onClickNext = () => {
        navigation.navigate("CountPage", { screen: 'CountPage' });
      }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <Progress.Bar
                    progress={0.5}
                    width={constants.width/1.2}
                    height={constants.height/100}
                    color={color.Blue[10]}
                    borderRadius={50}
                    borderColor={color.Gray[2]}
                    backgroundColor={color.Gray[2]}
                />
                <View style={Styles.textConteiner}>
                    <Text style={Styles.boldText}> 윗몸 일으키기를 몇 개 수행 가능한가요?</Text>
                    <Text style={Styles.text}>잘 모르겠다면 이 질문은 넘어가셔도 괜찮아요.</Text>
                </View>
                <View style={Styles.inputContainer}>
                    <Select innerText="5개 이하" onPress={() => setIsClicked(1)} state={isClicked == 1 ? true : false} />
                    <Select innerText="6 ~ 20개" onPress={() => setIsClicked(2)} state={isClicked == 2 ? true : false} />
                    <Select innerText="21 ~ 30개" onPress={() => setIsClicked(3)} state={isClicked == 3 ? true : false} />
                    <Select innerText="잘 모르겠어요" onPress={() => setIsClicked(4)} state={isClicked == 4 ? true : false} />
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

export default CountPage;