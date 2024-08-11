import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { color } from "../../../../styles/theme";
import constants from "../../../../styles/constants";

const BottomRankingComponent = (props) => {

    return(
        <View>
            {props.data.RankingResponse.map((item , index) => {
                if(index > 2) {
                return(
                    <View style={Styles.rankingContainer}>
                        <Image style={Styles.rankingImg} source={item.profileImgUrl ? {uri: item.profileImgUrl} : undefined}></Image>
                        <Text>{item.userName}</Text>
                        <Text>{item.totalCounts}회</Text>
                    </View>
                );
                }
            })}
        </View>
    );
}

const Styles = StyleSheet.create({
    rankingContainer: {
        width: constants.width,
        height: constants.height/20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    rankingImg: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: color.Gray[2]
    },
});

export default BottomRankingComponent;