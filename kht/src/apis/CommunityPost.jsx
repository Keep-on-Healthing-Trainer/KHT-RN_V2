import axios from 'axios';
import { Alert } from 'react-native';
import * as SecureStore from "expo-secure-store";

const onCommunityPost = async ( data ) => {

    const result = await SecureStore.getItemAsync('token');
    const token = result && JSON.parse(result);
    
    try {
        const response = await axios.post(`${process.env.API_KEY}/post`, {
            title: data.title,
            content: data.content,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 201) {
            console.log("게시물 등록에 성공하였습니다.");
            return response.data.id;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 403) {
              console.log('post : 존재하지 않는 유저입니다.');
              Alert.alert('존재하지 않는 유저입니다.');
            } else {
              console.log('post : 게시물 추가 오류');
              Alert.alert('게시물 추가 오류입니다.');
            }
        } else {
            console.log('post : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onCommunityPost;