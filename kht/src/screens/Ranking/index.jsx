import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Header from '../../components/Header';
import TopRankingComponent from './components/topRanking';
import BottomRankingComponent from './components/bottomRanking';

import onRanking from "../../apis/RankingList";
import onGetUserData from "../../apis/GetUserData";

const RankingPage = ({navigation}) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ userData, setUserData ] = useState({});

  useFocusEffect(
    useCallback(() => {
      getUserData();
    }, [])
  );

  const getUserData = async () => {
    const res = await onGetUserData();
    if(res) {
      setUserData(res);
    }
  }

  useEffect(() => {
    setIsLoading(false);
    onGetRanking();
  }, []);

  useEffect(() => {
    if(data != null) {
      setIsLoading(true);
    }
  }, [data]);

  const onGetRanking = async () => {
    try {
      const rank = await onRanking();
      if(rank) {
        setData(rank);
      }
    } catch (error) {
      console.log("랭킹 정보 가져오기 오류");
    }
  }

    return(
    <View style={Styles.container}>
        <Header />
        <View style={Styles.textConteiner}>
          <Text style={Styles.boldText}>유저 랭킹</Text>
          <Text style={Styles.text}>KHT로 측정한 운동의 총합 횟수입니다.</Text>
        </View>
        {isLoading && data ? (
            <View>
                <TopRankingComponent data={data} />
                <BottomRankingComponent data={data} />
            </View>
        ) : (
            <View></View>
        )}
        <View style={Styles.bottom}>
            <Image style={Styles.myRankingImg} source={userData ? {uri: userData.profileImgeUrl} : undefined}></Image>
            <Text style={Styles.myBoldText}>{userData.name}</Text>
            <Text style={Styles.myBoldText}>{userData.totalCounts}회</Text>
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
        justifyContent: 'space-between',
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
        width: constants.width/1.1,
        alignItems: 'flex-start',
    },
    bottom: {
        borderColor: color.Gray[2],
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: constants.width,
        height: constants.height/10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    myRankingImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: color.Gray[2]
    },
    myBoldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.Black
    },
})

export default RankingPage;