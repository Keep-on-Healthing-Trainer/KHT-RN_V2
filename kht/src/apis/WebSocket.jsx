import axios from 'axios';
import { Alert } from "react-native";

const onWeb = async ( sessionId, id ) => {
    const webSocket = new WebSocket(`${process.env.SOCKET_KEY}`);

    webSocket.onopen = () => {
        console.log("WebSocket is open");

        const message = {
            messageType: "ENTER",
            sessionId: sessionId,
            senderId: id
        };

        webSocket.send(JSON.stringify(message));
    };

    webSocket.onmessage = () => {
        webSocket.close();
        console.log('정상적으로 작동했습니다.');
        Alert.alert(`정상적으로 작동했습니다.`);
        return true;
    }

    webSocket.onerror = (error) => {
        webSocket.close();
        console.log(error);
        Alert.alert(`${error}`);
        return false;
    };
};

export default onWeb;