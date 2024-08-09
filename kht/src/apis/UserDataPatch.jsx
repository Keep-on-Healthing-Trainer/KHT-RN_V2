import axios from 'axios';
import { Alert } from 'react-native';
import * as SecureStore from "expo-secure-store";

const onUserDataPatch = async ( data ) => {

    const result = await SecureStore.getItemAsync('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.patch(`${process.env.API_KEY}/user`, {
            userId: data.userId,
            name: data.name,
            phoneNumber: data.phoneNumber
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 200) {
            console.log("정보 수정에 성공하였습니다.");
            //console.log(response.data);
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              console.log('patch : 잘못된 요청입니다.');
              Alert.alert('잘못된 요청입니다.');
            } else {
              console.log('patch : 수정 오류');
              Alert.alert('수정 오류입니다.');
            }
        } else {
            console.log('patch : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onUserDataPatch;