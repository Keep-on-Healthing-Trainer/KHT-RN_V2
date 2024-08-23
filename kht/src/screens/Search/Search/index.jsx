import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import CustomText from "../../../styles/CustomText";
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from '../../../components/Header';
import Search from "../../../components/Search";

import onSearch from '../../../apis/Search';
import onGetUserData from "../../../apis/GetUserData";
import onGetRecommendData from '../../../apis/GetRecommendData';

const SearchPage = ({navigation}) => {
    const [ searchData, setSearchData ] = useState({
        title: "",
        tag: "전체",
    });
    const [ userData, setUserData ] = useState({});
    const [ recommendData, setRecommendData ] = useState();

    useFocusEffect(
      useCallback(() => {
        getUserData();
      }, [])
    );

    const getUserData = async () => {
      const res = await onGetUserData();
      if(res) {
        setUserData(res);
        getRecommendData();
      }
    }

    const getRecommendData = async () => {
        const res = await onGetRecommendData();
        if(res) {
            setRecommendData(res);
            //console.log(res);
        }
    }
    
    const handleInputChange = (text, field) => {
        setSearchData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

    const onClickData = (item) => {
        navigation.navigate("DataPage", { screen: 'DataPage', name: true, data: item });
    }

    const onClickEnter = async () => {
        try {
            const data = await onSearch(searchData);
            navigation.navigate("ResultPage", { screen: 'ResultPage', name: data, title: searchData.title });
        } catch (error) {
            //console.log("검색 정보 가져오기 오류");
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
                    <TouchableOpacity style={Styles.box}  onPress={() => onClickData(
                            {
                                "title": "운동 전 준비 운동",
                                "startPosture": "편안한 자세로 서서 다리를 어깨너비로 벌리고 양팔을 자연스럽게 내립니다.",
                                "exerciseMethod": "1. 가벼운 동작으로 목, 어깨, 팔, 허리, 다리 등을 순차적으로 스트레칭합니다.\n2. 목은 천천히 좌우로 돌리고, 어깨는 앞뒤로 돌려줍니다.\n3. 팔과 허리는 양옆으로 천천히 늘려주고, 다리는 허벅지를 들어올리며 스트레칭합니다.\n4. 각 부위별로 10~15초간 스트레칭을 유지하며 근육을 풀어줍니다.",
                                "warning": "스트레칭 시 무리하게 당기지 않도록 주의하며, 부위별로 천천히 움직여줍니다.\n호흡을 자연스럽게 유지하며, 통증이 느껴지면 즉시 멈춥니다.",
                                "tags": [],
                                "path": "https://khtback.s3.ap-northeast-2.amazonaws.com/jumping-jacks.gif"
                            },
                    )}>
                        <View>
                            <CustomText style={Styles.boxText}>운동 전 준비 운동</CustomText>
                            <CustomText style={Styles.boxTextInner}>준비운동으로 부상을 예방하고,</CustomText>
                            <CustomText style={Styles.boxTextInner}>운동 효과를 향상시켜요.</CustomText>
                        </View>
                        <Image source={require('../../../assets/image/safety.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.box}  onPress={() => onClickData(
                            {
                                "title": "운동 후 마무리 운동",
                                "startPosture": "편안한 자세로 서서 다리를 어깨너비로 벌리고 양팔을 자연스럽게 내립니다.",
                                "exerciseMethod": "1. 가벼운 동작으로 목, 어깨, 팔, 허리, 다리 등을 순차적으로 스트레칭합니다.\n2. 목은 천천히 좌우로 돌리고, 어깨는 앞뒤로 돌려줍니다.\n3. 팔과 허리는 양옆으로 천천히 늘려주고, 다리는 허벅지를 들어올리며 스트레칭합니다.\n4. 각 부위별로 10~15초간 스트레칭을 유지하며 근육을 풀어줍니다.",
                                "warning": "스트레칭 시 무리하게 당기지 않도록 주의하며, 부위별로 천천히 움직여줍니다.\n호흡을 자연스럽게 유지하며, 통증이 느껴지면 즉시 멈춥니다.",
                                "tags": [],
                                "path": "https://khtback.s3.ap-northeast-2.amazonaws.com/bd9db9e2a81f2b4c935814efecd15a23.gif"
                            },
                    )}>
                        <View>
                            <CustomText style={Styles.boxText}>운동 후 마무리 운동</CustomText>
                            <CustomText style={Styles.boxTextInner}>운동을 한 후, 신체 각 부위의</CustomText>
                            <CustomText style={Styles.boxTextInner}>근육을 풀어줘요.</CustomText>
                        </View>
                        <Image source={require('../../../assets/image/finally.png')} style={Styles.img}></Image>
                    </TouchableOpacity>
                </View>
                <CustomText style={Styles.boldText}>{userData.name}님을 위한 운동</CustomText>
                <View style={Styles.dataContainer}>
                    {recommendData ? recommendData.map((item, index) => {
                            return (
                                <TouchableOpacity style={Styles.data} onPress={() => onClickData(item)}>
                                    <View style={Styles.imgContainer}>
                                        <Image style={Styles.image} source={{uri: item.thumbnail}}></Image>
                                    </View>
                                    <CustomText style={Styles.boxText}>{item.title}</CustomText>
                                    <View style={Styles.gap} >
                                        {item.tags.map((item, index) => {
                                            return (
                                                    <CustomText style={Styles.boxTextInner}>
                                                        {item == 'CARDIO' ? '유산소' : (
                                                            item == 'SHOULDER' ? '어깨' : (
                                                                item == 'ARM' ? '팔  가슴' : (
                                                                    item == 'ABDOMINAL' ? '복근' : (
                                                                        item == 'BACK' ? '등' : (
                                                                            item == 'THIGH' ? '허벅지' : (
                                                                                item == 'CALF' ? '종아리' : undefined
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )}
                                                    </CustomText>
                                                )
                                            })
                                        }
                                    </View>
                                </TouchableOpacity>
                            );
                        }) : undefined
                    }
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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
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
        width: constants.width/2.2,
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
    data: {
        width: constants.width/2.3,
        height: constants.width/2.2,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.Gray[1],
        padding: 10,
    },
    linear: {
        position: 'absolute',
        width: constants.width,
        height: constants.height/7,
        bottom: 0,
    },
    imgContainer: {
        width: constants.width/2.5,
        height: constants.width/3.2,
        alignItems: 'center',
    },
    image: {
        width: constants.width/2.5,
        height: constants.width/3.5,
        resizeMode: 'contain'
    },
    gap: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    }
})

export default SearchPage;