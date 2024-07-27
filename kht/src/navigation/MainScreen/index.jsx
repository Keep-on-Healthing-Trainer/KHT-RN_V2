import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { color } from '../../styles/theme';
import constants from '../../styles/constants';

import CommunityScreen from "./CommunityScreen";
import HomeScreen from './HomeScreen';
import TrainingPage from "../../screens/Training";
import RankingPage from "../../screens/Ranking";

import Training from "../../assets/icon/TabBar/Training";
import NoTraining from "../../assets/icon/TabBar/NoTraining";
import Home from "../../assets/icon/TabBar/Home";
import NoHome from "../../assets/icon/TabBar/NoHome";
import Ranking from "../../assets/icon/TabBar/Ranking";
import NoRanking from "../../assets/icon/TabBar/NoRanking";
import Community from "../../assets/icon/TabBar/Community";
import NoCommunity from "../../assets/icon/TabBar/NoCommunity";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.navigate("HomeScreen", { screen: 'HomeScreen'});
    }, []);

    return (
      <Tab.Navigator
        screenOptions={() => ({
            tabBarShowLabel: false,
            tabBarStyle: {
            height: constants.height/10,
            }
        })}
      >
        <Tab.Screen
            name="TrainingPage"
            component={TrainingPage}
            options={{ headerShown: false,
                tabBarIcon: ({ focused }) => {
                return (
                  <>
                    {focused ? (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("TrainingPage", { screen: 'TrainingPage' })}
                      >
                        <Training></Training>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("TrainingPage", { screen: 'TrainingPage' })}
                      >
                        <NoTraining></NoTraining>
                      </TouchableOpacity>
                    )}
                  </>
                  );
                } }}
        />
        <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false,
                tabBarIcon: ({ focused }) => {
                return (
                  <>
                    {focused ? (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("HomeScreen", { screen: 'HomeScreen' })}
                      >
                        <Home></Home>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("HomeScreen", { screen: 'HomeScreen' })}
                      >
                        <NoHome></NoHome>
                      </TouchableOpacity>
                    )}
                  </>
                  );
                } }}
        />
        <Tab.Screen
            name="RankingPage"
            component={RankingPage}
            options={{ headerShown: false,
                tabBarIcon: ({ focused }) => {
                return (
                  <>
                    {focused ? (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("RankingPage", { screen: 'RankingPage' })}
                      >
                        <Ranking></Ranking>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("RankingPage", { screen: 'RankingPage' })}
                      >
                        <NoRanking></NoRanking>
                      </TouchableOpacity>
                    )}
                  </>
                  );
                } }}
        />
        <Tab.Screen
            name="CommunityScreen"
            component={CommunityScreen}
            options={{ headerShown: false,
                tabBarIcon: ({ focused }) => {
                return (
                  <>
                    {focused ? (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("CommunityScreen", { screen: 'CommunityScreen' })}
                      >
                        <Community></Community>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("CommunityScreen", { screen: 'CommunityScreen' })}
                      >
                        <NoCommunity></NoCommunity>
                      </TouchableOpacity>
                    )}
                  </>
                  );
                } }}
        />
    </Tab.Navigator>
    );
}

export default MainScreen;