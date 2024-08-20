import axios from 'axios';
import { Alert } from 'react-native';
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

import onRefresh from "./Refresh";

const onSearch = async ( data ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);

    try {
        if(data.tag !== '전체') {
            const response = await axios.get(`${process.env.API_KEY}/guide/search?title=${data.title}&tag=${data.tag}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if(response.status == 200) {
                console.log("검색에 성공하였습니다.");
                return response.data;
            }
        } else {
            const response = await axios.get(`${process.env.API_KEY}/guide/search?title=${data.title}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if(response.status == 200) {
                console.log("검색에 성공하였습니다.");
                console.log(response.data);
                return response.data;
            }
        }
    } catch (error) {
        if (error.response) {
            if(error.response.status === 401) {
                onRefresh();
            } else if (error.response.status === 404) {
              console.log('search : 잘못된 요청입니다.');
              Alert.alert('잘못된 요청입니다.');
            } else {
              console.log('search : 검색 오류');
              Alert.alert('검색 오류입니다.');
            }
        } else {
            console.log('search : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onSearch;