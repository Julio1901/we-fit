import { Text, FlatList, View } from "react-native"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { EmptyScenarioContainer, MainContainer } from "./styles";
import HeaderBarWithIcon from "../../componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import RepositoryCard from "../../componentes/repositoryCard/RepositoryCard";
import BottomNavigationComponent from "../../componentes/bottomNavigationComponent/BottomNavigationComponent";
import axios from "axios";
import {getReposEndPoint } from "../../network/endpoints";
import { Animated, Easing } from 'react-native';
import { useEffect, useState } from "react";
import BottomSearchComponent from "../../componentes/bottomSearchComponent/BottomSearchComponent";
import { GitHubRepository } from "../../repositoryies/GitHubRepository";




const ShowRepositoriesScreen : React.FC = () => {
    
  type ShowRepositoriesScreenType = 'home' | 'favorites' 
  const HOME_EMPTY_STATE_MESSAGE =  'Pesquise um usuário para ver seus repositórios'
  const FAVORITES_EMPTY_STATE_MESSAGE = 'Você não possui repositórios favoritados'

  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const settingsIcon = require("../../../assets/icons/icon-settings.png")
  const [repositories, setRepositories] = useState<IGitHubUserRepository[] | null>(null)
  const [ownerName, setOwnerName] = useState('')
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [bottomSheetHeight] = useState(new Animated.Value(0))
  const [screenType, setScreenType] = useState<ShowRepositoriesScreenType>('home')
  const [emptyStateMessage, setEmptyStateMessage] = useState(HOME_EMPTY_STATE_MESSAGE)
  const [showEmptyStateMessate, setShowEmptyStateMessage] = useState(true)

  
    const fetchGitHubRepository = async () => {
        try{
          if(ownerName === '' && screenType === 'home'){
            return
          }else if (screenType === 'favorites') {
            const response = await GitHubRepository.getLocalRepositories()
            if(response.length !== 0){
              setShowEmptyStateMessage(false)
              setRepositories(response)
            }else{
              setShowEmptyStateMessage(true)
            }
          
          }else{
            const response = await axios.get<IGitHubUserRepository[]>(getReposEndPoint(ownerName))
            if(response.data.length !== 0){
              setShowEmptyStateMessage(false)
              setRepositories(response.data)
            }else{
              setShowEmptyStateMessage(true)
            }
          
          }
          
        }catch(error){
              console.error('Error when making request:', error);
        }
    }


      useEffect(() => {
         fetchGitHubRepository()
      }, [ownerName, screenType]);

    const handleBottomSheetToggle = () => {
        setIsBottomSheetOpen(!isBottomSheetOpen);

        Animated.timing(bottomSheetHeight, {
          toValue: isBottomSheetOpen ? 0 : 200, 
          duration: 300, 
          easing: Easing.ease,
          useNativeDriver: false
        }).start();
      };

    const handleWithSaveButtonPressed = (value: string) => {  
      handleBottomSheetToggle()
      setOwnerName(value)
    } 

    const handleWithFavoriteButtonPressed = (repository: IGitHubUserRepository) => {
      console.log('favorite button pressed')
      console.log(repository)
      GitHubRepository.saveLocalRepository(repository)
    }



  //TODO: Remove message for her to handle with request delay when screen change
    const handleWithBottomMenuFavoritesButtonPressed = () =>{
      setScreenType('favorites')
      setEmptyStateMessage(FAVORITES_EMPTY_STATE_MESSAGE)
    } 

    const handleWithBottomMenuRepositoriesButtonPressed = () => {
      setScreenType('home')
      setEmptyStateMessage(HOME_EMPTY_STATE_MESSAGE)
    }

    const handleWithCardPressed = (item : IGitHubUserRepository) => {
      const itemJSON = JSON.stringify(item);
      navigator.navigate('Details', {repositoryJson: itemJSON});
    }

    return (
        <MainContainer>
            <HeaderBarWithIcon title="WeFit" icon={settingsIcon} onIconPressed={handleBottomSheetToggle}/>
              {showEmptyStateMessate? (<EmptyScenarioContainer><Text>{emptyStateMessage}</Text></EmptyScenarioContainer>) : (
                                <FlatList
                                data={repositories}
                                renderItem={({ item }) => <RepositoryCard showFavoriteButton={true} item={item} onFavoriteButtonPressed={handleWithFavoriteButtonPressed} onCardPressed={() => handleWithCardPressed(item)}/>}
                                keyExtractor={item => item.id.toString()}
                                
                            />
              )}

          
              <Animated.View style={{ height: bottomSheetHeight, backgroundColor: 'rgba(52, 52, 52, 0.8)', borderTopLeftRadius: 4, borderTopRightRadius: 4}}>
                    <View style={{ marginTop: isBottomSheetOpen ? 0 : 200 }}>
                      <BottomSearchComponent onCancelPressed={handleBottomSheetToggle} onSavePressed={handleWithSaveButtonPressed} bottomSheetIsOpen={isBottomSheetOpen}/>
                    </View>
              </Animated.View>
             {!isBottomSheetOpen ? ( <BottomNavigationComponent type="repositories" onFavoriteButtonClicked={handleWithBottomMenuFavoritesButtonPressed} onRepositoriesButtonClicked={handleWithBottomMenuRepositoriesButtonPressed} />) : null} 
        </MainContainer>
    )
}

export default ShowRepositoriesScreen