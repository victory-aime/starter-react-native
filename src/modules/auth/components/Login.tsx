import {Button, View, Text, StyleSheet} from "react-native";
import {AuthParams, AuthScreenProps} from "../../../../@types/navigation";
import {AuthRoutes} from "../../../../@types/enum";


const Login = ({navigation } : AuthScreenProps<AuthRoutes.LOGIN>)=> {
    return (
        <View style={styles.container}>
            <Text>
                Bonjour Login
            </Text>
            <Button title={'go register'} onPress={()=> navigation.navigate(AuthRoutes.REGISTER,{
                goBack: true
            })} />
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});