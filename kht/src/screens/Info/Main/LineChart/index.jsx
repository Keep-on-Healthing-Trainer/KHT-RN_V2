import React from "react";
import { View } from "react-native";
import LineChart from "./Chart";
import useXY from './useXY';

const Chart = (props) => {
  const data = props.data;
  const [arr] = useXY(data);

  return (
    <View>
      <LineChart points={arr} data={data} />
    </View>
  );
}

export default Chart;