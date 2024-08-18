import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from '../../../components/Header';
import Chart from "./LineChart";

import onGetUserData from "../../../apis/GetUserData";
import onGetChartData from "../../../apis/GetChartData";

const MainPage = ({navigation}) => {
    const [ data, setData ] = useState({});
    const [ chartData, setChartData ] = useState({});

    useFocusEffect(
      useCallback(() => {
          userData();
      }, [])
    );

    const userData = async () => {
      const res = await onGetUserData();
      if(res) {
        setData(res);
        getChartData();
      }
    }

    const getChartData = async () => {
      const res = await onGetChartData();
      if(res) {
        setChartData(res);
        console.log(res);
      }
    }

    const onClickSelect = () => {
        navigation.navigate("SelectPage", { screen: 'SelectPage' });
    }

    return (
        <View style={Styles.container}>
          <ScrollView>
            <Header></Header>
            <View style={Styles.topContainer}>
              <View style={Styles.profileMargin}></View>
              <View style={Styles.profileContainer}>
                <TouchableOpacity style={Styles.editButton} onPress={() => onClickSelect()}>
                  <Text style={Styles.editButtonText}>편집</Text>
                </TouchableOpacity>
                <View style={Styles.nameContanier}>
                  <Text style={Styles.IdName}>{data.name}</Text>
                  <Text style={Styles.IdComment}>누적 운동 횟수 : {data.totalCounts}</Text>
                </View>
              </View>
              <Image style={Styles.profile} source={data ? {uri: data.profileImgeUrl} : undefined}></Image>
            </View>
            <View style={Styles.containerGap}>
              <View style={Styles.dataContainer}>
                <Text style={Styles.textCount}>총 {data.sitUpCounts == null ? 0 : data.sitUpCounts}회</Text>
                <Text style={Styles.textComment}>KHT와 함께 {chartData.totalSitUpCounts == null ? 0 : chartData.totalSitUpCounts}회 윗몸일으키기를 진행했어요</Text>
                <Chart data={chartData.sitUpResponses}></Chart>
              </View>
              <View style={Styles.dataContainer}>
                <Text style={Styles.textCount}>총 {data.squatCounts == null ? 0 : data.squatCounts}회</Text>
                <Text style={Styles.textComment}>KHT와 함께 {chartData.totalSquatCounts == null ? 0 : chartData.totalSquatCounts}회 스쿼트를 진행했어요</Text>
                <Chart data={chartData.squatResponses}></Chart>
              </View>
              <View style={Styles.dataContainer}>
                <Text style={Styles.textCount}>총 {data.pushUpCounts == null ? 0 : data.pushUpCounts}회</Text>
                <Text style={Styles.textComment}>KHT와 함께 {chartData.totalPushUpCounts == null ? 0 : chartData.totalPushUpCounts}회 팔굽혀펴기를 진행했어요</Text>
                <Chart data={chartData.pushUpResponses}></Chart>
              </View>
            </View>
          </ScrollView>
      </View>
      )
    }
    
    const Styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: color.Gray[1],
        width: constants.width,
        height: constants.height,
        alignContent: 'center',
        justifyContent: 'center',
      },
      topContainer: {
        width: constants.width,
        height: constants.height/4,
        alignItems: 'center',
        position: 'relative',
        marginTop: constants.height/20
      },
      profileMargin: {
        backgroundColor: color.Gray[1],
        width: constants.width,
        height: constants.height/20,
      },
      profile: {
        borderRadius: 50,
        width: 100,
        height: 100,
        position: 'absolute',
        backgroundColor: color.Gray[5],
        borderRadius: 100,
      },
      profileContainer: {
        width: constants.width,
        height: constants.height/5.5,
        backgroundColor: color.White,
        borderRadius: 20,
        alignItems: 'flex-end',
      },
      dataContainer: {
        width: constants.width,
        height: constants.height/2.5,
        backgroundColor: color.White,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      editButton: {
        width: constants.width/8,
        height: constants.height/40,
        borderRadius: 20,
        backgroundColor: color.Gray[3],
        justifyContent: 'center',
        alignItems: 'center',
        margin: constants.width/20
      },
      editButtonText: {
        color: color.White
      },
      textCount: {
        color: color.Black,
        fontSize: 20,
      },
      textComment: {
        color: color.Black,
        fontSize: 12,
        marginBottom: 50,
      },
      nameContanier: {
        width: constants.width,
        alignItems: 'center'
      },
      IdName: {
        fontSize: 20,
        color: color.Gray[5],
        marginTop: 10,
        marginBottom: 10
      },
      IdComment: {
        fontSize: 14,
        color: color.Gray[4]
      },
      containerGap: {
        rowGap: 20,
      }
    })

export default MainPage;