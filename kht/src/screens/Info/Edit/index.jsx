import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackHeader from '../components/Header';
import Delete from '../../../assets/icon/Delete';

const EditPage = ({navigation, route}) => {
    const name = route.params.name;

    const onClickBack = () => {
      navigation.navigate("SelectPage", { screen: 'SelectPage' });
    }

    return (
        <View style={Styles.container}>
            <BackHeader data={name} onPress={() => onClickBack()}/>
            <View style={Styles.titleContainer}>
                <Text style={Styles.nameTitle}>{name}</Text>
                <View>
                    <TextInput style={Styles.Bottom}></TextInput>
                    <TouchableOpacity style={Styles.topItem}>
                        <Delete></Delete>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        marginBottom: constants.height/2
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
    }
    })
    

export default EditPage;