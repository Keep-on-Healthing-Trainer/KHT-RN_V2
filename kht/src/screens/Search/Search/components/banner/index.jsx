import React, { useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet } from "react-native";
import constants from '../../../../../styles/constants';

export default function Banner() {
  const [slideTime, setSlideTime] = useState(1);
  const imageList = [
    'https://khtback.s3.ap-northeast-2.amazonaws.com/Frame+330.png',
    'https://khtback.s3.ap-northeast-2.amazonaws.com/gjgjgj.png'
  ]

  useEffect(() => {
    const autoTimer = setTimeout(() => setSlideTime(8), 1000);
    return () => clearTimeout(autoTimer);
  }, [])
  
  return (
    <>
      <Swiper 
        autoplay 
        showsPagination={false} 
        width={constants.width}
        height={constants.height/4.6}
        autoplayTimeout={slideTime}
      >
        {imageList.map((banner) => {
          return (
            <Image style={Styles.banner} source={{uri: banner}}></Image>
          )}
        )}
      </Swiper>
    </>
  )
}

const Styles = StyleSheet.create({
    banner: {
        width: constants.width,
        height: constants.height/4.6,
    },
});