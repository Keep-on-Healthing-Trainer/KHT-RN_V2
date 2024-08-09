import axios from 'axios';
import { Alert } from 'react-native';
import * as SecureStore from "expo-secure-store";

const onCommunityList = async ( data ) => {

    const result = await SecureStore.getItemAsync('token');
    const token = result && JSON.parse(result);
    
    try {
        const response = await axios.get(`${process.env.API_KEY}/post/list`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 200) {
            console.log("목록 가져오기에 성공하였습니다.");
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              console.log('list : 잘못된 요청입니다.');
              Alert.alert('잘못된 요청입니다.');
            } else {
              console.log('list : 검색 오류');
              Alert.alert('검색 오류입니다.');
            }
        } else {
            console.log('list : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onCommunityList;