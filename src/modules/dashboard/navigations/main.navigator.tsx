import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainRoutes} from "../../../../@types/enum";
import {MainParams} from "../../../../@types/navigation";
import Home from "../screens/Home";
import Products from "../screens/Products";

const MainStack = createNativeStackNavigator<MainParams>();

export const MainNavigator: FC = () => {
    return (
        <MainStack.Navigator initialRouteName={MainRoutes.HOME}>
            <MainStack.Screen
                name={MainRoutes.HOME}
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name={MainRoutes.PRODUCTS}
                component={Products}
                options={{
                    headerShown: false,
                }}
            />
        </MainStack.Navigator>
    );
};
