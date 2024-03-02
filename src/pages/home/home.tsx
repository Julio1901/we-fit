import { Button, View, Text, FlatList } from "react-native"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainContainer } from "./styles";
import HeaderBarWithIcon from "../../componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import RepositoryCard from "../../componentes/repositoryCard/RepositoryCard";
import BottomNavigationComponent from "../../componentes/bottomNavigationComponent/BottomNavigationComponent";
import axios from "axios";
import { USERS_ENDPOINT, getReposEndPoint } from "../../network/endpoints";
import { useEffect, useState } from "react";

const HomeScreen : React.FC = () => {
    
    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const settingsIcon = require("../../../assets/icons/icon-settings.png")
    const [repositories, setRepositories] = useState<IGitHubRepository[] | null>(null);
    //TODO: solution to handle with url
    // const [ownerName, setOwnerName] = useState('')


    const fetchGitHubRepository = async () => {
        try{
            const response = await axios.get<IGitHubRepository[]>(getReposEndPoint('facebook'))
            setRepositories(response.data)
            console.log('TEST REQUEST')
            console.log(response.data)
        }catch(error){
            console.log(`${USERS_ENDPOINT}/facebook/repos`)
            console.error('Error when making request:', error);
        }
    }


        //TODO: Implement name into dependencies to refetch when name search change
      useEffect(() => {
        fetchGitHubRepository()
      }, []);

    const handleWithGoToFavoritesClick = () => {
        navigator.navigate('Favorites')
    }

    return (
        <MainContainer>
            <HeaderBarWithIcon title="WeFit" icon={settingsIcon}/>
                <FlatList
                    data={repositories}
                    renderItem={({ item }) => <RepositoryCard showFavoriteButton={true} cardImageUri={item.owner.avatar_url} />}
                    keyExtractor={item => item.id.toString()}
                />
                <BottomNavigationComponent type="repositories"/>
        </MainContainer>
    )
}

export default HomeScreen