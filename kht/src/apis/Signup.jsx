import axios from 'axios';
import { Alert } from 'react-native';

const onSignup = async ( data ) => {

    try {
        const response = await axios.post(`${process.env.API_KEY}/user/signup`, {
            "userId" : data.userId,
            "name" : data.name,
            "phoneNumber" : data.phoneNumber,
            "password" : data.password
        });

        if(response.status == 201) {
            console.log("회원가입에 성공하였습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 409) {
              console.log('signup : 아이디가 이미 존재함');
              Alert.alert('아이디가 이미 존재합니다.');
            } else {
              console.log('signup : 회원가입 오류');
              Alert.alert('회원가입 오류입니다.');
            }
        } else {
            console.log('signup : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onSignup;