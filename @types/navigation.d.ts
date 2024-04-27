import {NavigatorScreenParams} from '@react-navigation/native';
import {MainRoutes,AuthRoutes} from "./enum";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainParams = {
    [MainRoutes.HOME]: { goBack: boolean };
    [MainRoutes.PRODUCTS]: { goBack: boolean };
};
export type AuthParams = {
    [AuthRoutes.LOGIN]: { goBack: boolean };
    [AuthRoutes.REGISTER]: { goBack: boolean };
};

export type ApplicationStackParamList = {
    MAIN: NavigatorScreenParams<MainParams>;
    AUTH: NavigatorScreenParams<AuthParams>;
};

export type AuthScreenProps<T extends keyof AuthParams> =
    NativeStackScreenProps<AuthParams, T>;
export type MainScreenProps<T extends keyof MainParams> =
    NativeStackScreenProps<MainParams, T>;
