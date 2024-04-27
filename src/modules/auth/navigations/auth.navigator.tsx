import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthRoutes} from "../../../../@types/enum";
import Login from "../components/Login";
import Register from "../components/Register";
import {AuthParams} from "../../../../@types/navigation";

const AuthStack = createNativeStackNavigator<AuthParams>();

export const AuthNavigator: FC = () => {
    return (
        <AuthStack.Navigator initialRouteName={AuthRoutes.LOGIN}>
            <AuthStack.Screen
                name={AuthRoutes.LOGIN}
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name={AuthRoutes.REGISTER}
                component={Register}
                options={{
                    headerShown: true,
                }}
            />
        </AuthStack.Navigator>
    );
};
