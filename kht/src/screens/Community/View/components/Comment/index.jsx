import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "../../../../../styles/theme";
import constants from "../../../../../styles/constants";

const CommentDataComponents = ( props ) => {

    return(
            <View style={Styles.container}>
                <Text style={Styles.text}>댓글</Text>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profile}></View>
                    <View>
                        <Text style={Styles.profileText}>사나경</Text>
                        <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                    </View>
                </View>
            </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
    },
    dataContainer: {
        width: constants.width,
        borderBottomColor: color.Gray[1],
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        padding: 20,
    },
    dataText: {
        fontSize: 14,
        fontWeight: '500',
        color: color.Black,
    },
    profileText: {
        fontSize: 14,
        fontWeight: '500',
        color: color.Gray[5],
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: color.Black,
        paddingLeft: 20,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: color.Black,
    },
})

export default CommentDataComponents;