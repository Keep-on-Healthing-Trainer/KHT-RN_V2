import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from '../../../styles/CustomText';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Search from "../../../components/Search";
import BackButton from "../../../assets/icon/Back";
import SelectComponents from './components/SelectComponents';

import onSearch from '../../../apis/Search';

const ResultPage = ({navigation, route}) => {
    const resultData = route.params.name;
    const beforeData = route.params.title;
    const [ state, setState ] = useState('전체');
    const [ searchData, setSearchData ] = useState({
        title: beforeData || "",
        tag: '전체',
    });

    const onPressData = (item, data) => {
        setState(item);
        handleInputChange(data, "tag");
        onClickEnter();
    };
    
    const handleInputChange = (text, field) => {
        setSearchData(prevData => ({
          ...prevData,
          [field]: text
        }));
    };

    const onClickBack = () => {
        navigation.navigate("SearchPage", { screen: 'SearchPage' });
    }

    const onClickData = (item) => {
        navigation.navigate("DataPage", { screen: 'DataPage', data: item });
    }

    const onClickEnter = async () => {
        try {
            const data = await onSearch(searchData);
            navigation.navigate("ResultPage", { screen: 'ResultPage', name: data });
        } catch (error) {
            //console.log("검색 정보 가져오기 오류");
        }
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.back}>
                <TouchableOpacity style={Styles.button} onPress={() => onClickBack()}>
                    <BackButton />
                </TouchableOpacity>
                <Search onGetInText={(text) => handleInputChange(text, "title")} enter={() => onClickEnter()} />
            </View>
            <View style={Styles.select}>
                <SelectComponents state={state} data="전체" onPress={() => onPressData('전체', '전체')} />
                <SelectComponents state={state} data="유산소" onPress={() => onPressData('유산소', 'CARDIO')} />
                <SelectComponents state={state} data="어깨" onPress={() => onPressData('어깨', 'SHOULDER')} />
                <SelectComponents state={state} data="팔" onPress={() => onPressData('팔', 'ARM')} />
                <SelectComponents state={state} data="복근" onPress={() => onPressData('복근', 'ABDOMINAL')} />
                <SelectComponents state={state} data="등" onPress={() => onPressData('등', 'BACK')} />
                <SelectComponents state={state} data="허벅지" onPress={() => onPressData('허벅지', 'THIGH')} />
                <SelectComponents state={state} data="종아리" onPress={() => onPressData('종아리', 'CALF')} />
            </View>
            <ScrollView>
                {resultData ? resultData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={Styles.box} onPress={() => onClickData(item)}>
                                <Image style={Styles.img} source={{uri: item.path}}></Image>
                                <View style={Styles.right}>
                                    <CustomText style={Styles.boldText}>{item.title}</CustomText>
                                    <CustomText style={Styles.text}>{item.tags}</CustomText>
                                    <CustomText style={Styles.text}>{item.introduction}</CustomText>
                                </View>
                            </TouchableOpacity>
                        );
                    }) : undefined
                }
            </ScrollView>
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
    back: {
        width: constants.width,
        height: constants.height/9,
        backgroundColor: color.White,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        padding: 10,
    },
    button: {
        height: constants.height/20,
        justifyContent: 'center',
    },
    box: {
        width: constants.width,
        height: constants.height/8,
        borderBottomWidth: 1,
        borderBottomColor: color.Gray[1],
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },
    img: {
        width: 90,
        height: 100,
        resizeMode: 'contain'
    },
    boldText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: color.Black,
    },
    right: {
        display: 'flex',
        rowGap: 2,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        color: color.Gray[4],
        width: constants.width/1.5,
    },
    select: {
        width: constants.width,
        height: constants.height/32,
        borderBottomWidth: 1,
        borderBottomColor: color.Gray[1],
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
});

export default ResultPage;