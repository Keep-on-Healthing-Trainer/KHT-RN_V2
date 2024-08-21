import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import Textarea from 'react-native-textarea';
import * as DocumentPicker from 'expo-document-picker';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import Header from "./components/Header";
import ImageIcon from "../../../assets/icon/ImageIcon";

import onCommunityPost from '../../../apis/CommunityPost';
import onCommunityPostImage from '../../../apis/CommunityPostImage';

const CreatePage = ({navigation}) => {
    const [ postData, setPostData ] = useState({
        title: "",
        content: "",
      });
    const [ postState, setPostState ] = useState(false);
    const [imageData, setImageData] = useState();
    const formData = new FormData();

    const onClickEdit = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
            });

            //console.log(result);

            setImageData(result.assets[0]);
        } catch (err) {
            //console.error(err);
        }
    }

    const onImageUpload = async ( id ) => {
        const data = {
            uri: imageData.uri,
            type: imageData.mimeType,
            name: imageData.name,
        }

        if(imageData) {
            formData.append("image", data);
            //console.log('폼데이터 추가');
        } else {
            formData.append("image", "");
        }

        try {
            const data = await onCommunityPostImage(formData, id);

            if(data) {
                navigation.navigate("MainPage", { screen: 'MainPage' });
            }
        } catch (error) {
            //console.log("게시물 이미지 등록 실패");
        }
    }

    useEffect(() => {
        if(postData.title.length >= 1 && postData.title.length <= 25) {
            if(postData.content.length >= 1 && postData.title.length <= 2000) {
                setPostState(true);
            }
        }
    }, [postData]);

    const handleInputChange = (text, field) => {
        setPostData(prevData => ({
          ...prevData,
          [field]: text
        }));
    };

    const onClickBack = () => {
        navigation.navigate("MainPage", { screen: 'MainPage' });
    }

    const onClickPost = async () => {
        try {
            const data = await onCommunityPost(postData);

            if(data) {
                onImageUpload(data);
            }
        } catch (error) {
            //console.log("게시물 등록 실패");
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <Header onBackPress={() => onClickBack()} backState={postState}  onPostPress={() => onClickPost()} />
                <View style={Styles.inputContainer}>
                    <TextInput
                        placeholder="제목을 작성해주세요"
                        placeholderTextColor={color.Gray[3]}
                        style={Styles.input}
                        onChangeText={(text) => handleInputChange(text, "title")}
                    ></TextInput>
                </View>
                <View>
                    <Textarea
                        containerStyle={Styles.textareaContainer}
                        style={Styles.textarea}
                        onChangeText={(text) => handleInputChange(text, "content")}
                        maxLength={400}
                        placeholder={`커뮤니티 게시글 작성 시 유의사항\n\nKHT 커뮤니티는 운동 내역을 기록하고 다른 사용자들에게\n도움이 될 만한 정보를 공유하며 소통할 수 있는 공간입니다.\n\n커뮤니티를 사용하는 사용자들에게 상처가 되는\n욕설, 비방, 명예훼손성 표현은 사용하지 말아주세요.\n\n또한 사용자들에게 혼란을 줄 수 있는 정보의 공유는\n자제해주시길 바랍니다.`}
                        placeholderTextColor={color.Gray[3]}
                        textAlignVertical="top"
                    />
                </View>
                <View style={Styles.fontContainer}>
                    <Text style={Styles.boldText}>이미지</Text>
                    <Text style={Styles.text}>업로드된 이미지를 다시 클릭하면 삭제할 수 있습니다.</Text>
                    <View style={Styles.ImageContainer}>
                        <TouchableOpacity style={Styles.image} onPress={() => onClickEdit()}>
                            <ImageIcon />
                        </TouchableOpacity>
                        {imageData ? (
                                <TouchableOpacity onPress={() => setImageData(null)}>
                                    <Image style={Styles.image} source={{uri: imageData.uri}} />
                                </TouchableOpacity>
                            ) : (
                                undefined
                        )}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    },
    ImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
  });

export default CreatePage;