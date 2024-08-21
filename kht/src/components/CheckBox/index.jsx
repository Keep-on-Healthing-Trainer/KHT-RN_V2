import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomText from "../../styles/CustomText";
import { color } from "../../styles/theme";
import constants from '../../styles/constants';

import Check from "../../assets/icon/Check";

const CheckBox = ( props ) => {
  const [loginSelect, setLoginSelect] = useState(false);

  useEffect(() => {
    props.onGetInPress(loginSelect);
  }, [loginSelect]);

  return (
    <TouchableOpacity style={Styles.Bottom} onPress={() => setLoginSelect(!loginSelect)}>
        {loginSelect ? (
          <Check></Check>
        ) : (
          <View style={Styles.checkbox}></View>
        )}
        <CustomText style={Styles.text}>자동 로그인</CustomText>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        width: constants.width/10*8,
        height: constants.height/40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: color.Gray[8]
    },
    text: {
        marginLeft: 10,
        fontSize: 14,
        color: color.Gray[8],
    }
})

export default CheckBox;