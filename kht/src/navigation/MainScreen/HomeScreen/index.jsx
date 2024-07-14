import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../SearchScreen';
import MyScreen from '../CommunityScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MyScreen" component={MyScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HomeScreen;