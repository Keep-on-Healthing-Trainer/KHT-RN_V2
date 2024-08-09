import axios from 'axios';
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

const onLogin = async ( data, state ) => {

    try {
        const response = await axios.post(`${process.env.API_KEY}/user/login`, {
            userId: data.userId,
            password: data.password
        });

        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        
        if(response.status == 201) {
            await SecureStore.setItemAsync('token', JSON.stringify(accessToken));
            await SecureStore.setItemAsync('refreshToken', JSON.stringify(refreshToken));
            await SecureStore.setItemAsync('autoLogin', JSON.stringify(state));
            console.log("로그인에 성공하였습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              console.log('login : 비밀번호가 일치하지 않습니다');
              Alert.alert('비밀번호가 일치하지 않습니다.');
            } else if (error.response.status === 404) {
              console.log('login : 아이디를 찾을 수 없습니다');
              Alert.alert('아이디를 찾을 수 없습니다.');
            } else {
              console.log('login : 로그인 오류');
              Alert.alert('로그인 오류입니다.');
            }
        } else {
            console.log('login : 네크워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onLogin;