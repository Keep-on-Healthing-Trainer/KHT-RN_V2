import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CommunityScreen from "./CommunityScreen";
import SearchScreen from './SearchScreen';
import TrainingPage from "../../screens/Training";
import RankingPage from "../../screens/Ranking";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    const navigation = useNavigation();

    return (
      <Tab.Navigator>
        <Tab.Screen
            name="TrainingPage"
            component={TrainingPage}
        />
        <Tab.Screen
            name="SearchScreen"
            component={SearchScreen}
        />
        <Tab.Screen
            name="RankingPage"
            component={RankingPage}
        />
        <Tab.Screen
            name="CommunityScreen"
            component={CommunityScreen}
        />
    </Tab.Navigator>
    );
}

export default MainScreen;