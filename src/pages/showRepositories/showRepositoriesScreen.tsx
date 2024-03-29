import { Text, FlatList, View, KeyboardAvoidingView, Platform, Keyboard } from "react-native"
import { useNavigation, ParamListBase, useFocusEffect } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { EmptyScenarioContainer, MainContainer } from "./styles";
import HeaderBarWithIcon from "../../componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import RepositoryCard from "../../componentes/repositoryCard/RepositoryCard";
import BottomNavigationComponent, { BottomNavigationComponentType } from "../../componentes/bottomNavigationComponent/BottomNavigationComponent";
import { Animated, Easing } from 'react-native';
import { useEffect, useRef, useState } from "react";
import BottomSearchComponent from "../../componentes/bottomSearchComponent/BottomSearchComponent";
import { GitHubRepository } from "../../repositories/GitHubRepository";
import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

const ShowRepositoriesScreen : React.FC = () => {
    
  type ShowRepositoriesScreenType = 'repositories' | 'favorites' 

  const HOME_EMPTY_STATE_MESSAGE =  'Pesquise um usuário para ver seus repositórios'
  const FAVORITES_EMPTY_STATE_MESSAGE = 'Você não possui repositórios favoritados'

  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const settingsIcon = require("../../../assets/icons/icon-settings.png")
  const [repositories, setRepositories] = useState<IGitHubUserRepository[] | null>(null)
  const [ownerName, setOwnerName] = useState('')
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [bottomSheetHeight] = useState(new Animated.Value(0))
  const [screenType, setScreenType] = useState<ShowRepositoriesScreenType>('repositories')
  const [emptyStateMessage, setEmptyStateMessage] = useState(HOME_EMPTY_STATE_MESSAGE)
  const [showEmptyStateMessate, setShowEmptyStateMessage] = useState(true)
  const [bottomNavigateType, setBottomNavigationType] = useState<BottomNavigationComponentType>("repositories")
  const [showLoadingMessage, setShowLoadingMessage] = useState(false)
  const origin = useRef('splashScreen')
  const ownerNameFilter = useRef('')

    const fetchGitHubRepository = async () => {
        setShowLoadingMessage(true)
        try{
          if(ownerName === '' && ownerNameFilter.current === '' && screenType === 'repositories'){
            setRepositories([])
            setShowEmptyStateMessage(true)
            setShowLoadingMessage(false)
            return
          }else if (screenType === 'favorites') {
            getLocalData()
          }else {
            const response = await GitHubRepository.getRemoteRepositories(ownerNameFilter.current)
            if(response.length !== 0){
              setShowEmptyStateMessage(false)
              setRepositories(response)
            }else{
              setShowEmptyStateMessage(true)
            }
          }
        }catch(error){
            setShowLoadingMessage(false)
            console.error('Error when making request:', error);
        }
        setShowLoadingMessage(false)
    }

      useEffect(() => {
         fetchGitHubRepository()
      }, [ownerName, screenType]);

      const getLocalData = async () => {
        setShowLoadingMessage(true)
        const response = await GitHubRepository.getLocalRepositories()
            if(response.length !== 0){
              setShowEmptyStateMessage(false)
              setRepositories(response)
            }else{
              setShowEmptyStateMessage(true)
            }
        setShowLoadingMessage(false)
      }

      useFocusEffect(
        React.useCallback(() => {
         
          if(origin.current === 'detailsScreenfavorites'){
            getLocalData()
          }else{
            fetchGitHubRepository()
          }
        }, [])
      );

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
      ownerNameFilter.current = value
    } 

    const handleWithFavoriteButtonPressed = (repository: IGitHubUserRepository) => {
      GitHubRepository.saveLocalRepository(repository)
      removeRepositoryById(repository.id)
    }

    const removeRepositoryById = (idToRemove: number) => {
      if (repositories) {
        const updatedRepositories = repositories.filter(repo => repo.id !== idToRemove);
        setRepositories(updatedRepositories);
      }
    };
    
    const handleWithBottomMenuFavoritesButtonPressed = () =>{
      setScreenType('favorites')
      setBottomNavigationType('favorites')
      setEmptyStateMessage(FAVORITES_EMPTY_STATE_MESSAGE)
    } 

    const handleWithBottomMenuRepositoriesButtonPressed = () => {
      setScreenType('repositories')
      setBottomNavigationType('repositories')
      setEmptyStateMessage(HOME_EMPTY_STATE_MESSAGE)
    }

    const handleWithCardPressed = (item : IGitHubUserRepository) => {
      origin.current= `detailsScreen${screenType}`
      const itemJSON = JSON.stringify(item);
      const buttonState = screenType === 'repositories' ? 'favorite' : 'unfavorite';
      navigator.navigate('Details', {repositoryJson: itemJSON, buttonState: buttonState});
    }

    useEffect(() => {
      if(!isBottomSheetOpen){
        Keyboard.dismiss()
      }
     
    }, [isBottomSheetOpen])

    return (
        <MainContainer>
          <Spinner
            visible={showLoadingMessage}
            textContent="Carregando..."
          />
            <HeaderBarWithIcon title="WeFit" icon={settingsIcon} onIconPressed={handleBottomSheetToggle}/>
              {showEmptyStateMessate? (<EmptyScenarioContainer><Text>{emptyStateMessage}</Text></EmptyScenarioContainer>) : (
                  <FlatList
                  data={repositories}
                  renderItem={({ item }) => <RepositoryCard showFavoriteButton={screenType === 'repositories' ? true : false} item={item} onFavoriteButtonPressed={handleWithFavoriteButtonPressed} onCardPressed={() => handleWithCardPressed(item)}/>}
                  keyExtractor={item => item.id.toString()}
                  contentContainerStyle={{ paddingBottom: 16}}
                  />
              )}
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Animated.View style={{ height: bottomSheetHeight, backgroundColor: 'rgba(52, 52, 52, 0.8)', borderTopLeftRadius: 4, borderTopRightRadius: 4}}>
                  <View style={{ marginTop: isBottomSheetOpen ? 0 : 200 }}>
                    <BottomSearchComponent onCancelPressed={handleBottomSheetToggle} onSavePressed={handleWithSaveButtonPressed} bottomSheetIsOpen={isBottomSheetOpen}/>
                  </View>
                 </Animated.View>
              </KeyboardAvoidingView>
             {!isBottomSheetOpen ? ( <BottomNavigationComponent type={bottomNavigateType} onFavoriteButtonClicked={handleWithBottomMenuFavoritesButtonPressed} onRepositoriesButtonClicked={handleWithBottomMenuRepositoriesButtonPressed} />) : null} 
        </MainContainer>
    )
}

export default ShowRepositoriesScreen