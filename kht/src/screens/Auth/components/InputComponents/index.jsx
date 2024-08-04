import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import constants from '../../../../styles/constants';

import Input from '../../../../components/Input';

const InputComponents = ( props ) => {
    const [loginData, setLoginData] = useState({
        userId: "",
        password: "",
      });

      const handleInputChange = (text, field) => {
        setLoginData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

      useEffect(() => {
        props.onGetInText(loginData);
      }, [loginData]);

    return(
        <View style={Styles.inputContainer}>
            <Input innerText="아이디" state={false} onGetInText={(text) => handleInputChange(text, "userId")}/>
            <Input innerText="비밀번호" state={true} onGetInText={(text) => handleInputChange(text, "password")}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    inputContainer: {
        width: constants.width,
        alignItems: 'center',
        rowGap: constants.height/60
    },
})

export default InputComponents;