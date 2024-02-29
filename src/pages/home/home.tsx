import { Button, SafeAreaView } from "react-native"
import { Text } from "react-native"
import FavoritesScreen from "../favorites/favorites";
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainContainer } from "./styles";

const HomeScreen : React.FC = () => {

    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const handleWithGoToFavoritesClick = () => {
        navigator.navigate('Favorites')
    }

    return (
        <MainContainer>
               <Text>Component created HOME</Text>
                <Button title="Go to favorites Screen" onPress={handleWithGoToFavoritesClick}/>
        </MainContainer>
    )
}

export default HomeScreen