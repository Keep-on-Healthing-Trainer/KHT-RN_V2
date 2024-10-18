import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Alert,  } from "react-native";
import CustomText from "../../styles/CustomText";
import { useIsFocused } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useFocusEffect } from '@react-navigation/native';
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Header from "../../components/Header";
import Button from "../../components/Button";

import onWeb from "../../apis/WebSocket";
import onGetUserData from "../../apis/GetUserData";

const TrainingPage = ({navigation}) => {
    const [ scanned, setScanned ] = useState(false);
    const [ userData, setUserData ] = useState({});
    const [permission, requestPermission] = useCameraPermissions();
    const isFocused = useIsFocused();

    useEffect(() => {
      getUserData();
      setScanned(true);
    }, []);

    useFocusEffect(
      useCallback(() => {
        setScanned(true);
      }, [])
    );

    const getUserData = async () => {
      const res = await onGetUserData();
      if(res) {
        setUserData(res);
      }
    }

    if (!isFocused) {
      return null;
    }
    
    if (!permission) {
      return <View />;
    }
    
    if (!permission.granted) {
      return (
          <View style={{ width: constants.width, height: constants.height, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: 50 }}>
            <CustomText style={{ fontSize: 18, alignItems: 'center', justifyContent: 'center' }}>카메라 권한을 허용해주세요</CustomText>
            <Button onPress={requestPermission} innerText="권한 허용하기" />
          </View>
      );
    }
    
    const handleBarCodeScanned = ( data ) => {
      setScanned(false);
      const sessionId = (data.data.split('?')[1]).split('=')[1];
      const res = onWeb(sessionId, userData.id);
      if(res) { 
        Alert.alert(`QR코드 스캔에 성공했습니다.`);
      }
    };

    return(
        <View style={Styles.container}>
          <Header />
          <CameraView
          style={Styles.camera} 
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }} 
          onBarcodeScanned={scanned ? handleBarCodeScanned : undefined}
          >
          <View style={Styles.mainContainer}>
            <View style={Styles.cameraContainer}></View>
            <Text style={Styles.traningTypeText}>KHT 기기 화면에 표시된{"\n"}QR을 스캔해주세요</Text>
          </View>
        </CameraView>
      </View>
    );
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.White,
      width: constants.width,
      height: constants.height,
    },
    camera: {
      flex: 1,
    },
    cameraContainer: {
      width: 300,
      height: 300,
      borderColor: color.Blue[10],
      borderRadius: 30,
      borderWidth: 3
    },
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent: 'space-evenly',
      paddingTop: constants.height/30,
      paddingBottom: constants.height/30
    },
    traningTypeText: {
      fontSize: 25,
      textAlign: 'center',
      color: color.White,
      marginBottom: constants.height/80
    },
    noCheckText: {
      fontSize: 20,
      color: color.Black,
    }
  })

export default TrainingPage;