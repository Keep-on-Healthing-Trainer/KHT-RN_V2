import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

const InputPage = ({navigation}) => {

    const onClickNext = () => {
        navigation.navigate("IntentPage", { screen: 'IntentPage' });
      }

    return(
        <View style={Styles.container} >
            <View style={Styles.center}>
                <Progress.Bar
                    progress={0.05}
                    width={constants.width/1.2}
                    height={constants.height/100}
                    color={color.Blue[10]}
                    borderRadius={50}
                    borderColor={color.Gray[2]}
                    backgroundColor={color.Gray[2]}
                />
                <View style={Styles.textConteiner}>
                    <Text style={Styles.boldText}>회원가입을 위한 정보를 입력해주세요.</Text>
                    <Text style={Styles.text}>KHT 서비스를 이용하기 위해 필요한 기본적인 정보를 입력해주세요.</Text>
                </View>
                <View style={Styles.inputContainer}>
                    <Input innerText="이름" state={false} />
                    <Input innerText="전화번호" state={false} />
                    <Input innerText="아이디" state={false} />
                    <Input innerText="비밀번호" state={true} />
                    <Input innerText="비밀번호 확인" state={true} />
                </View>
                <Button innerText="다음" onPress={() => onClickNext()}/>
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

export default InputPage;