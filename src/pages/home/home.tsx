import { Button, View, Text, FlatList } from "react-native"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainContainer } from "./styles";
import HeaderBarWithIcon from "../../componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import RepositoryCard from "../../componentes/repositoryCard/RepositoryCard";
import BottomNavigationComponent from "../../componentes/bottomNavigationComponent/BottomNavigationComponent";
import axios from "axios";
import { USERS_ENDPOINT, getReposEndPoint } from "../../network/endpoints";
import { Animated, Easing } from 'react-native';
import { useEffect, useState } from "react";
import BottomSearchComponent from "../../componentes/bottomSearchComponent/BottomSearchComponent";

const HomeScreen : React.FC = () => {
    
    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const settingsIcon = require("../../../assets/icons/icon-settings.png")
    const [repositories, setRepositories] = useState<IGitHubRepository[] | null>(null);
    //TODO: solution to handle with url
    // const [ownerName, setOwnerName] = useState('')
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [bottomSheetHeight] = useState(new Animated.Value(0));
  

    const fetchGitHubRepository = async () => {
        try{
            const response = await axios.get<IGitHubRepository[]>(getReposEndPoint('facebook'))
            setRepositories(response.data)  
        }catch(error){
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

    const handleBottomSheetToggle = () => {
        setIsBottomSheetOpen(!isBottomSheetOpen);

        Animated.timing(bottomSheetHeight, {
          toValue: isBottomSheetOpen ? 0 : 200, 
          duration: 300, 
          easing: Easing.ease,
          useNativeDriver: false
        }).start();
      };

    return (
        <MainContainer>
            <HeaderBarWithIcon title="WeFit" icon={settingsIcon} onIconPressed={handleBottomSheetToggle}/>
                <FlatList
                    data={repositories}
                    renderItem={({ item }) => <RepositoryCard showFavoriteButton={true} item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
                <Animated.View style={{ height: bottomSheetHeight }}>
                    <BottomSearchComponent onCancelPressed={handleBottomSheetToggle} onSavePressed={handleBottomSheetToggle}/>
                </Animated.View>
                {!isBottomSheetOpen ? ( <BottomNavigationComponent type="repositories"/>) : null}
        </MainContainer>
    )
}

export default HomeScreen