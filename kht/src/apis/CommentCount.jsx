import axios from 'axios';
import { Alert } from 'react-native';
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

import onRefresh from "./Refresh";

const onCommentCount = async ( id ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);
    
    try {
        const response = await axios.get(`${process.env.API_KEY}/post/${id}/comments/count`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 200) {
            //console.log("댓글 정보 가져오기에 성공하였습니다.");
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if(error.response.status === 401) {
                onRefresh();
            } else if (error.response.status === 404) {
              //console.log('comment count : 잘못된 요청입니다.');
              Alert.alert('잘못된 요청입니다.');
            } else {
              //console.log('comment count : 댓글 오류');
              Alert.alert('댓글 오류입니다.');
            }
        } else {
            //console.log('comment count : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onCommentCount;