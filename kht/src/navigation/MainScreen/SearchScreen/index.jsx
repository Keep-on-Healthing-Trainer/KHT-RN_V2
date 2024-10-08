import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchPage from "../../../screens/Search/Search";
import ResultPage from "../../../screens/Search/Result";
import DataPage from "../../../screens/Search/Data";

const Stack = createStackNavigator();

const SearchScreen = () => {
    return (
        <Stack.Navigator initialRouteName="SearchPage">
            <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
            <Stack.Screen name="ResultPage" component={ResultPage} options={{ headerShown: false }} />
            <Stack.Screen name="DataPage" component={DataPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default SearchScreen;
