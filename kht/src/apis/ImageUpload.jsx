import axios from 'axios';
import { Alert } from 'react-native';
import * as SecureStore from "expo-secure-store";

const ImageUpload = async (data) => {

    const result = await SecureStore.getItemAsync('token');
    const token = result && JSON.parse(result);

    //console.log(token);

    try {
        const response = await axios.post(`${process.env.API_KEY}/user/modifyProfile`,
            data,
            {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'multipart/form-data',
              },
            }
          );
        if(response.status == 201) {
            console.log("이미지 업로드에 성공했습니다.");
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 403) {
              console.log('image : 유저를 찾을 수 없습니다');
              Alert.alert('유저를 찾을 수 없습니다.');
            } else {
              console.log('image : 이미지 업로드 오류');
              Alert.alert('이미지 업로드 오류입니다.');
            }
        } else {
            console.log('image : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
    }
};

export default ImageUpload;