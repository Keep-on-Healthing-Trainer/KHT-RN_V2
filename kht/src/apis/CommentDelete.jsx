import axios from 'axios';
import { Alert } from 'react-native';
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onCommentDelete = async ( id ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);
    
    try {
        const response = await axios.delete(`${process.env.API_KEY}/comment/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 204) {
            console.log("댓글 삭제에 성공하였습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              console.log('comment del : 일치하지 유저입니다.');
              Alert.alert('삭제할 수 없는 댓글입니다.');
            } else {
              console.log('comment del : 댓글 삭제 오류');
              Alert.alert('댓글 삭제 오류입니다.');
            }
        } else {
            console.log('comment del : 네트워크 오류');
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onCommentDelete;