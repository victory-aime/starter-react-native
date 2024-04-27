import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationStackParamList} from '../../@types/navigation';
import {MainNavigator} from "../modules/dashboard/navigations/main.navigator";
import {AuthNavigator} from "../modules/auth/navigations/auth.navigator";

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="AUTH" component={AuthNavigator} />
                <Stack.Screen name="MAIN" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ApplicationNavigator;