import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from '../../../components/Header';
import Search from "../../../components/Search";

import onSearch from '../../../apis/Search';

const SearchPage = ({navigation}) => {
    const [ searchData, setSearchData ] = useState({
        title: "",
        tag: "전체",
    });
    
    const handleInputChange = (text, field) => {
        setSearchData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

    const onClickData = () => {
        navigation.navigate("DataPage", { screen: 'DataPage', name: true });
    }

    const onClickEnter = async () => {
        try {
            const data = await onSearch(searchData);
            navigation.navigate("ResultPage", { screen: 'ResultPage', name: data });
        } catch (error) {
            console.log("검색 정보 가져오기 오류");
        }
    }

    return(
        <View style={Styles.container}>
            <Header />
            <ScrollView>
                <Image style={Styles.banner} source={require('../../../assets/image/banner.png')}></Image>
                <View style={Styles.search}>
                    <Search
                    onGetInText={(text) => handleInputChange(text, "title")}
                    enter={() => onClickEnter()}
                    />
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
                <Text style={Styles.boldText}>000님을 위한 운동</Text>
                <View style={Styles.dataContainer}>
                    <View style={Styles.column}>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.column}>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.column}>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.column}>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.data} onPress={() => onClickData()}>
                            <View style={Styles.imgContainer}>
                                <Image style={Styles.image} source={require('../../../assets/image/training.png')}></Image>
                            </View>
                            <Text style={Styles.boxText}>레그레이즈</Text>
                            <Text style={Styles.boxTextInner}>복근, 허벅지</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <LinearGradient style={Styles.linear} colors={['rgba(255,255,255,0)', '#ffffff']}></LinearGradient>
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
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.Black,
        paddingLeft: 20,
    },
    dataContainer: {
        width: constants.width,
        gap: 20,
        rowGap: 20,
    },
    search: {
        width: constants.width,
        height: constants.height/12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        width: constants.width,
        height: constants.height/4.6,
        backgroundColor: color.Black
    },
    img: {
        width: 40,
        height: 60,
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
        height: 80,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: color.Gray[1],
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
    },
    column: {
        width: constants.width,
        height: constants.height/5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    data: {
        width: 170,
        height: 170,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.Gray[1],
        padding: 10,
    },
    linear: {
        position: 'absolute',
        width: constants.width,
        height: constants.height/5,
        bottom: 0,
    },
    imgContainer: {
        width: 140,
        height: 110,
        alignItems: 'center',
    },
    image: {
        height: 110,
        resizeMode: "contain",
    }
})

export default SearchPage;