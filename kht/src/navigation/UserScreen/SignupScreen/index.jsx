import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CountPage from "../../../screens/User/Count";
import ExitPage from "../../../screens/User/Exit";
import InputPage from "../../../screens/User/Input";
import IntentPage from "../../../screens/User/Intent";
import SickPage from "../../../screens/User/Sick";

const Stack = createStackNavigator();

const SignupScreen = () => {
    return (
        <Stack.Navigator initialRouteName="InputPage">
            <Stack.Screen name="InputPage" component={InputPage} options={{ headerShown: false }} />
            <Stack.Screen name="IntentPage" component={IntentPage} options={{ headerShown: false }} />
            <Stack.Screen name="CountPage" component={CountPage} options={{ headerShown: false }} />
            <Stack.Screen name="SickPage" component={SickPage} options={{ headerShown: false }} />
            <Stack.Screen name="ExitPage" component={ExitPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default SignupScreen;