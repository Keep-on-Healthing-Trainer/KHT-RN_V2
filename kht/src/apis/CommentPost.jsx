import axios from 'axios';
import { Alert } from 'react-native';
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

import onRefresh from "./Refresh";

const onCommentPost = async ( data, id ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);
    
    try {
        const response = await axios.post(`${process.env.API_KEY}/comment`, {
            id: id,
            content: data,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 201) {
            //console.log("댓글 등록에 성공하였습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if(error.response.status === 401) {
                onRefresh();
            } else if (error.response.status === 403) {
              //console.log('comment post : 존재하지 않는 유저입니다.');
              Alert.alert('존재하지 않는 유저입니다.');
            } else {
              //console.log('comment post : 댓글 추가 오류');
              Alert.alert('댓글 추가 오류입니다.');
            }
        } else {
            //console.log('comment post : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onCommentPost;