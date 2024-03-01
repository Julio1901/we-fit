import { Button, View } from "react-native"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainContainer } from "./styles";
import HeaderBarWithIcon from "../../componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import RepositoryCard from "../../componentes/repositoryCard/RepositoryCard";
import BottomNavigationComponent from "../../componentes/bottomNavigationComponent/BottomNavigationComponent";

const HomeScreen : React.FC = () => {
    
    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const settingsIcon = require("../../../assets/icons/icon-settings.png")

    const handleWithGoToFavoritesClick = () => {
        navigator.navigate('Favorites')
    }

    return (
        <MainContainer>
            <HeaderBarWithIcon title="WeFit" icon={settingsIcon}/>
                <RepositoryCard showFavoriteButton={true} cardImageUri="https://avatars.githubusercontent.com/u/47728178?v=4"/>
                <RepositoryCard showFavoriteButton={false} cardImageUri="https://i..com/originals/4f/ed/e4/4fede4476616eea97aa3cb1d6abb69fe.png"/>
                <BottomNavigationComponent type="repositories"/>
                {/* <View style={{marginTop: 30}}><Button title="Go to favorites Screen" onPress={handleWithGoToFavoritesClick}/></View> */}
        </MainContainer>
    )
}

export default HomeScreen