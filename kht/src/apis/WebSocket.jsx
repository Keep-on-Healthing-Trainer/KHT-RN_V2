import axios from 'axios';

const onWeb = async ( sessionId, id ) => {
    const webSocket = new WebSocket(`${process.env.SOCKET_KEY}`);
    const message = {
        messageType: "ENTER",
        sessionId: sessionId,
        senderId: id
    };

    console.log(message);

    webSocket.onopen = () => {
        console.log("WebSocket is open");
        webSocket.send(JSON.stringify(message));
    };

    webSocket.onmessage = () => {
        webSocket.close();
        console.log('정상적으로 작동했습니다.');
        return true;
    }

    webSocket.onerror = (error) => {
        webSocket.close();
        console.log(error);
        return false;
    };
};

export default onWeb;