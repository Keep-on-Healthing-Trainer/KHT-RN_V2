import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import constants from '../../styles/constants';

import CommunityScreen from "./CommunityScreen";
import MyScreen from "./MyScreen";
import SearchScreen from "./SearchScreen";
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
      navigation.navigate("SearchScreen", { screen: 'SearchScreen'});
    }, []);

    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';
        if (
            routeName === 'CreatePage' || 
            routeName === 'ViewPage' || 
            routeName === 'ResultPage' || 
            routeName === 'DataPage' || 
            routeName === 'SelectPage' || 
            routeName === 'ProfilePage' || 
            routeName === 'EditPage'
        ) {
            return false;
        }
        return true;
    };

    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: getTabBarVisibility(route) ? 'flex' : 'none',
            height: constants.height/10,
          },
        })}
      >
        <Tab.Screen
            name="TrainingPage"
            component={TrainingPage}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TouchableOpacity
                      onPress={() => navigation.navigate("TrainingPage", { screen: 'TrainingPage' })}
                  >
                      {focused ? <Training /> : <NoTraining />}
                  </TouchableOpacity>
              )
            }}
        />
        <Tab.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                  <TouchableOpacity
                      onPress={() => navigation.navigate("SearchScreen", { screen: 'SearchScreen' })}
                  >
                      {focused ? <Home /> : <NoHome />}
                  </TouchableOpacity>
              ),
              tabBarStyle: {
                display: getTabBarVisibility(route) ? 'flex' : 'none',
                height: constants.height/10,
              },
          })}
        />
        <Tab.Screen
            name="RankingPage"
            component={RankingPage}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                  <TouchableOpacity
                      onPress={() => navigation.navigate("RankingPage", { screen: 'RankingPage' })}
                  >
                      {focused ? <Ranking /> : <NoRanking />}
                  </TouchableOpacity>
              )
          }}
        />
        <Tab.Screen
            name="CommunityScreen"
            component={CommunityScreen}
            options={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                  <TouchableOpacity
                      onPress={() => navigation.navigate("CommunityScreen", { screen: 'CommunityScreen' })}
                  >
                      {focused ? <Community /> : <NoCommunity />}
                  </TouchableOpacity>
              ),
              tabBarStyle: {
                display: getTabBarVisibility(route) ? 'flex' : 'none',
                height: constants.height/10,
              },
            })}
        />
        <Tab.Screen
            name="MyScreen"
            component={MyScreen}
            options={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                  <TouchableOpacity
                      onPress={() => navigation.navigate("MyScreen", { screen: 'MyScreen' })}
                  >
                      {focused ? <Community /> : <NoCommunity />}
                  </TouchableOpacity>
              ),
              tabBarStyle: {
                display: getTabBarVisibility(route) ? 'flex' : 'none',
                height: constants.height/10,
              },
            })}
        />
    </Tab.Navigator>
    );
}

export default MainScreen;
