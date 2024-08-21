import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import CustomText from "../../../styles/CustomText";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from '../components/Header';
import Delete from '../../../assets/icon/Delete';

import onUserDataPatch from "../../../apis/UserDataPatch";
import onGetUserData from '../../../apis/GetUserData';

const EditPage = ({navigation, route}) => {
    const [ data, setData ] = useState({});
    const [ name, setName ] = useState(null); 

    useEffect(() => {
      userData();
    }, []);

    useEffect(() => {
      setName(route.params.name);
    }, [data]);

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

    const handleInputChange = (text, field) => {
      setData(prevData => ({
        ...prevData,
        [field]: text
      }));
    };

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Styles.container}>
            <BackHeader
            data={name === 'name' ? '사용자 이름' : (name === 'userId' ? '사용자 아이디' : '사용자 전화번호')}
            onPress={() => onClickBack()}
            />
            <View style={Styles.titleContainer}>
                <CustomText style={Styles.nameTitle}>{name === 'name' ? '이름' : (name === 'userId' ? '아이디' : '전화번호')}</CustomText>
                <View>
                    <TextInput
                    style={Styles.Bottom}
                    value={name === 'name' ? data.name : (name === 'userId' ? data.userId : data.phoneNumber)}
                    onChangeText={(text) => handleInputChange(text, name)}
                    />
                    <TouchableOpacity style={Styles.topItem} onPress={() => handleInputChange(null, name)}>
                        <Delete />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={Styles.button} onPress={() => onClickPatch()}>
              <CustomText style={Styles.buttonText}>저장하기</CustomText>
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
      titleContainer: {
        marginTop: constants.height/30,
        marginBottom: constants.height/1.7
      },
      nameTitle: {
        color: color.Gray[4],
        fontSize: 12,
        marginLeft: constants.width/40,
      },
      Bottom: {
        backgroundColor: color.White,
        marginBottom: "5%",
        width: constants.width/10*8,
        height: 50,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        color: color.Black,
        borderBottomColor: color.Gray[4],
        borderBottomWidth: 1
    },
    topItem: {
        position: 'absolute',
        width: constants.width/12,
        height: constants.height/40,
        left: constants.width/1.5,
        top: constants.height/50,
        justifyContent: 'center',
        alignItems: 'flex-end'
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
    

export default EditPage;
