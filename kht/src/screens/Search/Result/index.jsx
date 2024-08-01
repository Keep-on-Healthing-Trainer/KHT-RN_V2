import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Search from "../../../components/Search";
import BackButton from "../../../assets/icon/Back";

const ResultPage = ({navigation}) => {

    const onClickData = () => {
        navigation.navigate("DataPage", { screen: 'DataPage' });
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.back}>
                <View style={Styles.button}>
                    <BackButton />
                </View>
                <Search />
            </View>
            <View style={Styles.select}>
                <TouchableOpacity style={Styles.focusSelect}>
                    <Text style={Styles.focusSelectText}>전체</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={Styles.noFocusSelect}>
                    <Text style={Styles.noFocusSelectText}>허리</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={Styles.noFocusSelect}>
                    <Text style={Styles.noFocusSelectText}>복근</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={Styles.noFocusSelect}>
                    <Text style={Styles.noFocusSelectText}>팔</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={Styles.noFocusSelect}>
                    <Text style={Styles.noFocusSelectText}>허벅지</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={Styles.noFocusSelect}>
                    <Text style={Styles.noFocusSelectText}>종아리</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={Styles.noFocusSelect}>
                    <Text style={Styles.noFocusSelectText}>등</Text> 
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TouchableOpacity style={Styles.box} onPress={() => onClickData()}>
                    <View style={Styles.img}></View>
                    <View style={Styles.right}> 
                        <Text style={Styles.boldText}>캡틴스 체어 레그 레이즈</Text>
                        <Text style={Styles.text}>복근, 허벅지</Text>
                        <Text style={Styles.text}>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box}>
                    <View style={Styles.img}></View>
                    <View style={Styles.right}> 
                        <Text style={Styles.boldText}>캡틴스 체어 레그 레이즈</Text>
                        <Text style={Styles.text}>복근, 허벅지</Text>
                        <Text style={Styles.text}>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box}>
                    <View style={Styles.img}></View>
                    <View style={Styles.right}> 
                        <Text style={Styles.boldText}>캡틴스 체어 레그 레이즈</Text>
                        <Text style={Styles.text}>복근, 허벅지</Text>
                        <Text style={Styles.text}>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box}>
                    <View style={Styles.img}></View>
                    <View style={Styles.right}> 
                        <Text style={Styles.boldText}>캡틴스 체어 레그 레이즈</Text>
                        <Text style={Styles.text}>복근, 허벅지</Text>
                        <Text style={Styles.text}>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box}>
                    <View style={Styles.img}></View>
                    <View style={Styles.right}> 
                        <Text style={Styles.boldText}>캡틴스 체어 레그 레이즈</Text>
                        <Text style={Styles.text}>복근, 허벅지</Text>
                        <Text style={Styles.text}>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box}>
                    <View style={Styles.img}></View>
                    <View style={Styles.right}> 
                        <Text style={Styles.boldText}>캡틴스 체어 레그 레이즈</Text>
                        <Text style={Styles.text}>복근, 허벅지</Text>
                        <Text style={Styles.text}>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box}>
                    <View style={Styles.img}></View>
                    <View style={Styles.right}> 
                        <Text style={Styles.boldText}>캡틴스 체어 레그 레이즈</Text>
                        <Text style={Styles.text}>복근, 허벅지</Text>
                        <Text style={Styles.text}>기본 레그 레이즈는 누워서 했다면 캡틴스 체어 레그 레이즈는 선채로  다리를 드는 운동이에요. 서서 다리를 올리는 운동이다 보니 코어뿐만 아니라 전신 근육이 쓰이게 돼요!</Text>
                    </View>
                </TouchableOpacity>
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
        width: 70,
        height: 100,
        backgroundColor: color.Black,
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
    focusSelect: {
        paddingLeft: 2,
        paddingRight: 2,
        height: constants.height/32,
        display: 'flex',
        alignItems: 'center',
        borderBottomColor: color.Black,
        borderBottomWidth: 1,
    },
    focusSelectText: {
        fontSize: 15,
        color: color.Black,
        fontWeight: '500',
    },
    noFocusSelect: {
        paddingLeft: 2,
        paddingRight: 2,
        height: constants.height/32,
        display: 'flex',
        alignItems: 'center',
    },
    noFocusSelectText: {
        fontSize: 15,
        color: color.Gray[4],
        fontWeight: '500',
    }
});

export default ResultPage;