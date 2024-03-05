import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import HeaderBackComponent from "../../componentes/headerBackComponent/HeaderBackComponent";
import { BodyContainer, BottomButtonsContainer, Description, FavoriteButton, FavoriteButtonIcon, FavoriteButtonText, LanguageCircleIcon, LanguageContainer, MainContainer, SeeRepositoryButton, SeeRepositoryButtonContentContainer, SeeRepositoryButtonIcon, SeeRepositoryButtonText, TitleContainer, TitleOwner, TitleRepositoryName, UnfavoriteButton } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LanguageTitle } from "../../componentes/repositoryCard/styles";
import { RootStackParamList } from "../../../App";
import { Linking } from 'react-native';
import { useState } from "react";
import { GitHubRepository } from "../../repositories/GitHubRepository";

 type FavoriteButtonState = "favorite" | "unfavorite"

interface DetailsScreenProps {
    route: RouteProp<RootStackParamList, 'Details'>;
    buttonState: FavoriteButtonState
}

const DetailsScreen : React.FC<DetailsScreenProps> = ({route, buttonState}) => {
    const { repositoryJson } = route.params;

    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const repository = JSON.parse(repositoryJson) as IGitHubUserRepository
    const [favoriteButtonType, setFavoriteButtonType] = useState<FavoriteButtonState>()

    const handleWithfavoriteButtonState = () => {
        if(favoriteButtonType === 'favorite'){
            setFavoriteButtonType('unfavorite')
        }else{
            setFavoriteButtonType('favorite')
        }
    }

    const handleWithBackButtonPressed = () =>{
        navigator.navigate('Home')
    }
    
    const handleWithSeeRepositoryClicked = () =>{
        Linking.openURL(repository.html_url)
    }

    const handleWithFavoriteButtonClicked = async () => {
        if(favoriteButtonType === 'favorite'){
            await GitHubRepository.saveLocalRepository(repository)
        }else{
            await GitHubRepository.removeRepositoryFromLocalStorage(repository)
        }    
        handleWithfavoriteButtonState()
    }

    return(
        <MainContainer>
            <HeaderBackComponent screenName="Detalhes" onBackButtonPressed={handleWithBackButtonPressed}/>
            <BodyContainer>
                <TitleContainer >
                    <TitleOwner  numberOfLines={1}>{repository.owner.login}</TitleOwner>
                    <TitleRepositoryName numberOfLines={1}>/{repository.name}</TitleRepositoryName>
                </TitleContainer>
                <Description numberOfLines={20}>{repository.description}</Description>
                <LanguageContainer>
                    <LanguageCircleIcon source={require('../../../assets/icons/icon-red-circle.png')}/>
                    <LanguageTitle>{repository.language}</LanguageTitle>
                </LanguageContainer>
            </BodyContainer>
            <BottomButtonsContainer>
                <SeeRepositoryButton onPress={handleWithSeeRepositoryClicked}> 
                    <SeeRepositoryButtonText>Ver repositório</SeeRepositoryButtonText>
                    <SeeRepositoryButtonIcon source={require('./../../../assets/icons/icon-link.png')}/>
                </SeeRepositoryButton>
                {
                    favoriteButtonType === 'favorite' ? (
                        <FavoriteButton onPress={handleWithFavoriteButtonClicked}>
                            <FavoriteButtonText>Favoritar</FavoriteButtonText>
                            <FavoriteButtonIcon  source={require('./../../../assets/icons/icon-star-black.png')}/>
                        </FavoriteButton>
                    ):
                    (
                        <UnfavoriteButton onPress={handleWithFavoriteButtonClicked}>
                            <FavoriteButtonText>Desfavoritar</FavoriteButtonText>
                            <FavoriteButtonIcon  source={require('./../../../assets/icons/icon-start-not-fill.png')}/>
                        </UnfavoriteButton>
                    )
                }

            </BottomButtonsContainer>
        </MainContainer>
  
    )
}

export default DetailsScreen;