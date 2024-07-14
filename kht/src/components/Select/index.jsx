import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

const Select = (props) => {
    const borderAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (props.state) {
            startAnimation();
        } else {
            stopAnimation();
        }
    }, [props.state]);

    const startAnimation = () => {
        Animated.timing(borderAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const stopAnimation = () => {
        Animated.timing(borderAnim, {
            toValue: 0,
            duration: 10,
            useNativeDriver: false,
        }).start();
    };

    const borderWidth = borderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    return (
        <TouchableOpacity onPress={props.onPress}>
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
        width: constants.width/1.2,
        height: constants.height/20,
        backgroundColor: color.Gray[0],
        borderRadius: 10,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: color.Blue[10],
    },
    font: {
        color: color.Black,
        fontSize: 15
    }
});

export default Select;
