import axios from 'axios';
import { Alert } from 'react-native';
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onRefresh = async ( ) => {

    const result = await getStorage('refreshToken');
    const token = result && JSON.parse(result);
    
    try {
        const response = await axios.post(`${process.env.API_KEY}/user/refresh`, {
            headers: {
                "Refresh-Token": `${token}`
            }
        });
        
        if(response.status == 201) {
            await setStorage('token', JSON.stringify(accessToken));
            await setStorage('refreshToken', JSON.stringify(refreshToken));
            //console.log("token refresh에 성공하였습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              //console.log('refresh : 잘못된 요청입니다.');
              Alert.alert('잘못된 요청입니다.');
            } else {
              //console.log('refresh : token refresh 오류');
              Alert.alert('자동 로그인 실패입니다.');
            }
        } else {
            //console.log('refresh : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onRefresh;