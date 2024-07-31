import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreatePage from "../../../screens/Community/Create";
import MainPage from "../../../screens/Community/Main";
import ViewPage from "../../../screens/Community/View";

const Stack = createStackNavigator();

const CommunityScreen = () => {
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }}/>
            <Stack.Screen name="CreatePage" component={CreatePage} options={{ headerShown: false }} />
            <Stack.Screen name="ViewPage" component={ViewPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default CommunityScreen;
