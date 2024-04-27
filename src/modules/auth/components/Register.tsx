import {Button, View, Text} from "react-native";
import {AuthScreenProps} from "../../../../@types/navigation";
import {AuthRoutes} from "../../../../@types/enum";


const Register =({navigation } : AuthScreenProps<AuthRoutes.REGISTER
>)=> {
    return (
        <View>
            <Text>
                Bonjour Register
            </Text>
            <Button title={'go login'} onPress={()=> navigation.navigate(AuthRoutes.LOGIN,{
                goBack: true
            })} />
        </View>
    )
}

export default Register