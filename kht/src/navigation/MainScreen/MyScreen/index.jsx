import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EditPage from "../../../screens/Info/Edit";
import MainPage from "../../../screens/Info/Main";
import ProfilePage from "../../../screens/Info/Profile";
import SelectPage from "../../../screens/Info/Select";

const Stack = createStackNavigator();

const MyScreen = () => {
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name="SelectPage" component={SelectPage} options={{ headerShown: false }} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
            <Stack.Screen name="EditPage" component={EditPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MyScreen;
