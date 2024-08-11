import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import { color } from "../../../../../styles/theme";
import constants from "../../../../../styles/constants";

import More from "../../../../../assets/icon/More";

import onCommentDelete from "../../../../../apis/CommentDelete";

const CommentDataComponents = ( props ) => {
    const [ moreState, setMoreState ] = useState(false);

    const onClickMore = () => {
        setMoreState(!moreState);
    }

    const onClickDelete = async () => {
        const res = await onCommentDelete(id);
        if(res) {
            Alert.alert('댓글 삭제에 성공했습니다.');
        }
    }

    return(
            <View style={Styles.container}>
                <Text style={Styles.text}>댓글</Text>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profileContainer}>
                        <View style={Styles.profile}></View>
                        <View>
                            <Text style={Styles.profileText}>사나경</Text>
                            <Text style={Styles.dataText}>근데 몸빵 지리긴 한다 ㅋㅋㅋ</Text>
                        </View>
                    </View>
                    {moreState ? (
                        <TouchableOpacity style={Styles.delete} onPress={() => onClickDelete()}>
                            <Text style={Styles.dataText}>댓글 삭제하기</Text>
                        </TouchableOpacity>
                    ) :
                    undefined}
                    <TouchableOpacity style={Styles.seeMore} onPress={() => onClickMore()}>
                        <More />
                    </TouchableOpacity>
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
        justifyContent: 'space-between',
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
    seeMore: {
        width: 20,
        height: 40,
        justifyContent: 'center',
    },
    delete: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: color.Gray[2],
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    }
})

export default CommentDataComponents;