import React from 'react';
import * as Progress from 'react-native-progress';
import constants from "../../../../styles/constants";
import { color } from "../../../../styles/theme";

const ProgressBarComponents = ( props ) => {

    return(
        <Progress.Bar
            progress={props.data}
            width={constants.width/1.2}
            height={constants.height/100}
            color={color.Blue[10]}
            borderRadius={50}
            borderColor={color.Gray[2]}
            backgroundColor={color.Gray[2]}
        />
    );
}

export default ProgressBarComponents;