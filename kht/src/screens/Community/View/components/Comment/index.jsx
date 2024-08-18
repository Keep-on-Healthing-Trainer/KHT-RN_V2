import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert, Image, StyleSheet } from "react-native";
import { color } from "../../../../../styles/theme";
import constants from "../../../../../styles/constants";

import More from "../../../../../assets/icon/More";

import onCommentDelete from "../../../../../apis/CommentDelete";

const CommentDataComponents = ( props ) => {
    const [ state, setState ] = useState(false);
    const [ moreState, setMoreState ] = useState(false);

    const onClickMore = () => {
        setMoreState(!moreState);
    }

    const onClickDelete = async () => {
        const res = await onCommentDelete(props.id);

        if(res) {
            Alert.alert('댓글 삭제에 성공했습니다.');
            setState(true);
        }
    }

    useEffect(() => {
        props.onGetInState(state);
        setState(false);
    }, [state]);

    return(
            <View style={Styles.container}>
                <View style={Styles.dataContainer}>
                    <View style={Styles.profileContainer}>
                        <Image style={Styles.profile} source={props.profileImage ? {uri: props.profileImage} : undefined}></Image>
                        <View>
                            <Text style={Styles.profileText}>{props.userNickname}</Text>
                            <Text style={Styles.dataText}>{props.content}</Text>
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