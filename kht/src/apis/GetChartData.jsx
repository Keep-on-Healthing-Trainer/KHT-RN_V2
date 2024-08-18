import axios from 'axios';
import { Alert } from 'react-native';
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onGetChartData = async ( ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);
    
    try {
        const response = await axios.get(`${process.env.API_KEY}/exercise/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 200) {
            console.log("차트 데이터 가져오기에 성공하였습니다.");
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              console.log('chartdata : 잘못된 요청입니다.');
              Alert.alert('잘못된 요청입니다.');
            } else {
              console.log('chartdata : 차트 데이터 가져오기 오류');
              Alert.alert('차트 데이터 가져오기 오류입니다.');
            }
        } else {
            console.log('chartdata : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onGetChartData;