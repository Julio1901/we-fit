import { SafeAreaView, Text, Button } from "react-native"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


const FavoritesScreen : React.FC = () => {
    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const handleWithBackButtonPressed = () => {
        navigator.navigate('Home')
    }

    return (
        <SafeAreaView>
            <Text>Favorites Screen</Text>
            <Button title="Go to back Home" onPress={handleWithBackButtonPressed}/>
        </SafeAreaView>
    )
}

export default FavoritesScreen