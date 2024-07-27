import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line, Circle, Text } from 'react-native-svg';

import useLine from './useLine'
import constants from "../../../../styles/constants";
import { color } from "../../../../styles/theme";

const LineChart = ({ points, data }) => {
    const [lines] = useLine(points);

    return (
      <View style={Styles.container}>
        <Svg viewBox="0 0 150 100" style={Styles.viewbox}>
          {lines.map(({ x1, x2, y1, y2 }, index) => (
            <Line x1={x1} x2={x2} y1={y1} y2={y2} key={index} stroke={color.Blue[6]} strokeWidth="1" />
          ))}
          {points.map(({ x, y }, index) => {
            return(
              <>
                <Circle cx={x} cy={y} r="1" style={Styles.circle} key={index}></Circle>
                <Text x={x} y={100} style={Styles.text} key={index+'00'}>
                  {data[index].exerciseDate}
                </Text>
              </>
            );
          })}
        </Svg>
      </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/4
    },
    circle: {
      fill: color.Blue[6]
    },
    text: {
      fontSize: 4,
    }
})

export default LineChart;