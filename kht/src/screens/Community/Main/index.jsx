import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from "../../../components/Header";
import Create from "../../../assets/icon/Create";
import DataComponents from './components/Data';

import onCommunityList from '../../../apis/CommunityList';

const MainPage = ({navigation}) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ listData, setListData ] = useState();

    useFocusEffect(
        useCallback(() => {
            setIsLoading(false);
            onDataList();
        }, [])
    );

    useEffect(() => {
        if(listData != null) {
          setIsLoading(true);
        }
      }, [listData]);

    const onClickCreate = () => {
        navigation.navigate("CreatePage", { screen: 'CreatePage' });
    }

    const onClickView = ( key ) => {
        navigation.navigate("ViewPage", { screen: 'ViewPage', data: key });
    }

    const onDataList = async () => {
        try {
            const data = await onCommunityList();
            setListData(data);
        } catch (error) {
            console.log("게시물 목록 불러오기 실패");
        }
    }

    return(
        <View style={Styles.container}>
            <Header />
            <TouchableOpacity style={Styles.create} onPress={() => onClickCreate()}>
                <View style={Styles.createLeft}>
                    <Text style={Styles.boldText}>운동에 관한 생각을 나누어보세요!</Text>
                    <Text style={Styles.text}>KHT 커뮤니티에서 의견을 나누며 도움을 받아요.</Text>
                </View>
                <Create />
            </TouchableOpacity>
            <ScrollView style={Styles.mainContainer}>
                {isLoading && listData ? listData.map((item, index) => {
                        return (
                            <DataComponents
                            key={index}
                            name={item.userNickname}
                            profile={item.profile}
                            title={item.title}
                            content={item.content}
                            path={item.path}
                            onPress={() => onClickView(item.id)} />
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
    },
    create: {
        width: constants.width,
        height: constants.height/15,
        backgroundColor: color.White,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    createLeft: {
        width: constants.width/1.5,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.Black,
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: color.Gray[5],
    },
    mainContainer: {
        width: constants.width,
        backgroundColor: color.Gray[1],
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 50,
    },
})


export default MainPage;