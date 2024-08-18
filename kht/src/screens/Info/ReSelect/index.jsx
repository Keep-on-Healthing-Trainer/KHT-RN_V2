import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from '../components/Header';
import InputComponents from './components/InputComponents';

import onUserDataPatch from "../../../apis/UserDataPatch";
import onGetUserData from '../../../apis/GetUserData';

const ReSelectPage = ({navigation, route}) => {
    const [ data, setData ] = useState({});
    const [ patch, setPatch ] = useState();

    useEffect(() => {
      console.log(patch);
    }, [patch]);

    useEffect(() => {
      userData();
    }, []);

    const userData = async () => {
      const res = await onGetUserData();
      if(res) {
        setData(res);
      }
    }

    const onClickPatch = async () => {
      const res = await onUserDataPatch(data);
      if(res) {
        navigation.navigate("SelectPage", { screen: 'SelectPage' });
      }
    }

    const onClickBack = () => {
      navigation.navigate("SelectPage", { screen: 'SelectPage' });
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <BackHeader
                data='부상 부위'
                onPress={() => onClickBack()}
                />
                <View style={Styles.selectContainer}>
                  <InputComponents 
                    state={(state) => setPatch(state)}
                  />
                </View>
                <TouchableOpacity style={Styles.button} onPress={() => onClickPatch()}>
                <Text style={Styles.buttonText}>저장하기</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
      )
  }
    
  const Styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: color.White,
        width: constants.width,
        height: constants.height,
        alignItems: 'center'
      },
      selectContainer: {
        height: constants.height/1.5,
        paddingTop: 50,
      },
    button: {
      borderColor: color.Blue[10],
      borderWidth: 1,
      borderRadius: 10,
      width: 300,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: color.Blue[10],
        fontWeight: '600',
    }
  })

export default ReSelectPage;
