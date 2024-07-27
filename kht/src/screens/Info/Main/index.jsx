import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from '../../../components/Header';
import Chart from "./LineChart";

const MainPage = ({navigation}) => {
    const [ data, setData ] = useState({});

    const onClickSelect = () => {
        navigation.navigate("SelectPage", { screen: 'SelectPage' });
    }

    return (
        <View style={Styles.container}>
          <Header></Header>
          <ScrollView>
            <View style={Styles.topContainer}>
              <View style={Styles.profileMargin}></View>
              <View style={Styles.profileContainer}>
                <TouchableOpacity style={Styles.editButton} onPress={() => onClickSelect()}>
                  <Text style={Styles.editButtonText}>편집</Text>
                </TouchableOpacity>
                <View style={Styles.nameContanier}>
                  <Text style={Styles.IdName}>이기혁</Text>
                  <Text style={Styles.IdComment}>누적 운동 횟수 : 1510</Text>
                </View>
              </View>
              <View style={Styles.profile}></View>
            </View>
            <View style={Styles.containerGap}>
              <View style={Styles.dataContainer}>
                <Text style={Styles.textCount}>총 1004회</Text>
                <Text style={Styles.textComment}>KHT와 함께 1004회 윗몸일으키기를 진행했어요</Text>
                <Chart data={data.exerciseResponses}></Chart>
              </View>
              <View style={Styles.dataContainer}>
                <Text style={Styles.textCount}>총 1004회</Text>
                <Text style={Styles.textComment}>KHT와 함께 1004회 스쿼트를 진행했어요</Text>
                <Chart data={data.exerciseResponses}></Chart>
              </View>
              <View style={Styles.dataContainer}>
                <Text style={Styles.textCount}>총 1004회</Text>
                <Text style={Styles.textComment}>KHT와 함께 1004회 팔굽혀펴기를 진행했어요</Text>
                <Chart data={data.exerciseResponses}></Chart>
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