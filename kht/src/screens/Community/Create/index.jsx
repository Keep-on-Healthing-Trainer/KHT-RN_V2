import React, { useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from "react-native";
import Textarea from 'react-native-textarea';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from "./components/Header";
import ImageIcon from "../../../assets/icon/ImageIcon";

const CreatePage = ({navigation}) => {

    const onClickBack = () => {
        navigation.navigate("MainPage", { screen: 'MainPage' });
    }

    return(
        <View style={Styles.container}>
            <Header onPress={() => onClickBack()}/>
            <View style={Styles.inputContainer}>
                <TextInput placeholder="제목을 작성해주세요" placeholderTextColor={color.Gray[3]} style={Styles.input}></TextInput>
            </View>
            <View>
                <Textarea
                    containerStyle={Styles.textareaContainer}
                    style={Styles.textarea}
                    //onChangeText={this.onChange}
                    //defaultValue={this.state.text}
                    maxLength={400}
                    placeholder={`커뮤니티 게시글 작성 시 유의사항\n\nKHT 커뮤니티는 운동 내역을 기록하고 다른 사용자들에게\n도움이 될 만한 정보를 공유하며 소통할 수 있는 공간입니다.\n\n커뮤니티를 사용하는 사용자들에게 상처가 되는\n욕설, 비방, 명예훼손성 표현은 사용하지 말아주세요.\n\n또한 사용자들에게 혼란을 줄 수 있는 정보의 공유는\n자제해주시길 바랍니다.`}
                    placeholderTextColor={color.Gray[3]}
                    textAlignVertical="top"
                />
            </View>
            <View style={Styles.fontContainer}>
                <Text style={Styles.boldText}>이미지</Text>
                <Text style={Styles.text}>업로드된 이미지를 다시 클릭하면 취소할 수 있습니다.</Text>
                <View style={Styles.image}>
                    <ImageIcon />
                </View>
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
    },
    inputContainer: {
        width: constants.width,
        borderBottomWidth: 1,
        borderBottomColor: color.Gray[1],
        borderTopWidth: 1,
        borderTopColor: color.Gray[1],
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        fontSize: 18,
    },
    textareaContainer: {
      height: constants.height/2,
      padding: 20,
      backgroundColor: color.White,
    },
    textarea: {
      fontSize: 16,
      color: color.Black,
    },
    fontContainer: {
        width: constants.width,
        height: constants.height/5,
        padding: 20,
    },
    boldText: {
        fontSize: 16,
        color: color.Black,
        fontWeight: '600',
    },
    text: {
        fontSize: 12,
        color: color.Gray[4],
        fontWeight: '500',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 40,
        borderWidth: 2,
        borderColor: color.Gray[3],
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default CreatePage;