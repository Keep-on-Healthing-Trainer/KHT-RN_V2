import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../../styles/constants';

import Input from '../../../../../components/Input';

const InputComponents = ( props ) => {
    const [signupData, setSignupData] = useState({
        name: "",
        phoneNumber: "",
        userId: "",
        password: "",
        passwordCheck: ""
      });

      const handleInputChange = (text, field) => {
        setSignupData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

      useEffect(() => {
        props.onGetInText(signupData);
      }, [signupData]);

    return(
        <View style={Styles.inputContainer}>
            <Input innerText="이름" state={false} onGetInText={(text) => handleInputChange(text, "name")}/>
            <Input innerText="전화번호" state={false} onGetInText={(text) => handleInputChange(text, "phoneNumber")}/>
            <Input innerText="아이디" state={false} onGetInText={(text) => handleInputChange(text, "userId")}/>
            <Input innerText="비밀번호" state={true} onGetInText={(text) => handleInputChange(text, "password")}/>
            <Input innerText="비밀번호 확인" state={true} onGetInText={(text) => handleInputChange(text, "passwordCheck")}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    inputContainer: {
        width: constants.width,
        height: constants.height/3,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: constants.height/60
    },
})

export default InputComponents;