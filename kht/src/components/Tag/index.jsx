import React, { useRef, useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

const Tag = (props) => {
    const borderAnim = useRef(new Animated.Value(0)).current;
    const [isAnimated, setIsAnimated] = useState(false);

    const onAnimationPress = () => {
        Animated.timing(borderAnim, {
            toValue: isAnimated ? 0 : 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
        setIsAnimated(!isAnimated);
    };

    const borderWidth = borderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    return (
        <TouchableOpacity onPress={onAnimationPress}>
            <Animated.View style={[Styles.container, { borderWidth }]}>
                <Text style={Styles.font}>
                    {props.innerText}
                </Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: color.Gray[0],
        borderRadius: 10,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: color.Blue[10],
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    font: {
        color: color.Black,
        fontSize: 15
    }
});

export default Tag;
