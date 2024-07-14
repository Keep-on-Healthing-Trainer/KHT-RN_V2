import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from '../../../components/Header';
import Search from "../../../components/Search";

const SearchPage = ({navigation}) => {

    return(
        <View style={Styles.container}>
            <Header />
            <Search />
            <Image style={Styles.banner} source={require('../../../assets/image/banner.png')}></Image>
            <View style={Styles.select}>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Image source={require('../../../assets/image/cardio.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <Text style={Styles.text}>전신 유산소</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Image source={require('../../../assets/image/abs.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <Text style={Styles.text}>복근</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Image source={require('../../../assets/image/arm.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <Text style={Styles.text}>팔</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Image source={require('../../../assets/image/back.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <Text style={Styles.text}>등</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Image source={require('../../../assets/image/shoulder.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <Text style={Styles.text}>어깨</Text>
                </View>
            </View>
            <View style={Styles.select}>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Image source={require('../../../assets/image/thighs.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <Text style={Styles.text}>허벅지</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Image source={require('../../../assets/image/calf.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <Text style={Styles.text}>종아리</Text>
                </View>
            </View>
            <View style={Styles.suggest}>
                <View style={Styles.textContainer}>
                    <Text style={Styles.boldText}>000님을 위한 추천 운동</Text>
                </View>
                <View style={Styles.boxContainer}>
                    <View style={Styles.scrollBox}></View>
                    <View style={Styles.scrollBox}></View>
                    <View style={Styles.scrollBox}></View>
                </View>
                <View style={Styles.boxContainer}>
                    <View style={Styles.box}>
                        <View>
                            <Text style={Styles.boxText}>운동 전 준비 운동</Text>
                            <Text style={Styles.boxTextInner}>준비운동으로 부상을 예방하고,</Text>
                            <Text style={Styles.boxTextInner}>운동 효과를 향상시켜요.</Text>
                        </View>
                        <Image source={require('../../../assets/image/safety.png')} style={Styles.img}></Image>
                    </View>
                    <View style={Styles.box}>
                        <View>
                            <Text style={Styles.boxText}>운동 후 마무리 운동</Text>
                            <Text style={Styles.boxTextInner}>운동을 한 후, 신체 각 부위의</Text>
                            <Text style={Styles.boxTextInner}>근육을 풀어줘요.</Text>
                        </View>
                        <Image source={require('../../../assets/image/finally.png')} style={Styles.img}></Image>
                    </View>
                </View>
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
        rowGap: 10
    },
    banner: {
        width: constants.width,
        height: constants.height/4.6,
        backgroundColor: color.Black
    },
    select: {
        width: constants.width/1.1,
        height: constants.height/13,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: color.Blue[0],
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: color.Black
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 40,
        height: 60
    },
    suggest: {
        width: constants.width,
        height: constants.height/3.5,
        backgroundColor: color.Gray[1],
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textContainer: {
        width: constants.width/1.1,
        height: constants.height/15,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    boldText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: color.Black,
    },
    boxContainer: {
        height: constants.height/9,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: color.White,
        width: constants.width/2.3,
        height: 70,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    scrollBox: {
        backgroundColor: color.White,
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    boxText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: color.Black,
    },
    boxTextInner: {
        fontSize: 10,
        fontWeight: 'light',
        color: color.Gray[5],
    }
})

export default SearchPage;