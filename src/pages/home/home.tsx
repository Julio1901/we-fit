import { Button } from "react-native"
import { Text } from "react-native"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainContainer } from "./styles";
import HeaderBarWithSettingsIcon from "../../componentes/headerBarWithSettingsIcon/HeaderBarWithSettingsIcon";

const HomeScreen : React.FC = () => {
    
    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const settingsIcon = require("../../../assets/icons/icon-settings.png")

    const handleWithGoToFavoritesClick = () => {
        navigator.navigate('Favorites')
    }

    return (
        <MainContainer>
            <HeaderBarWithSettingsIcon title="WeFit" icon={settingsIcon}/>
               <Text>Component created HOME</Text>
                <Button title="Go to favorites Screen" onPress={handleWithGoToFavoritesClick}/>
        </MainContainer>
    )
}

export default HomeScreen