import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import HeaderBackComponent from "../../componentes/headerBackComponent/HeaderBackComponent";
import { BodyContainer, BottomButtonsContainer, Description, FavoriteButton, FavoriteButtonIcon, FavoriteButtonText, LanguageCircleIcon, LanguageContainer, MainContainer, SeeRepositoryButton, SeeRepositoryButtonContentContainer, SeeRepositoryButtonIcon, SeeRepositoryButtonText, TitleContainer, TitleOwner, TitleRepositoryName } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LanguageTitle } from "../../componentes/repositoryCard/styles";
import { RootStackParamList } from "../../../App";
import { Linking } from 'react-native';

// type FavoriteButtonState = "favorite" | "unfavorite"

interface DetailsScreenProps {
    route: RouteProp<RootStackParamList, 'Details'>;
}

const DetailsScreen : React.FC<DetailsScreenProps> = ({route}) => {
    const { repositoryJson } = route.params;

    const navigator = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const repository = JSON.parse(repositoryJson) as IGitHubUserRepository

    // const favoriteButtonConfigs = {
    //     favorite : {
    //         backGroundColor: '#FFD02C',
    //         text: 'Favoritar',
    //         icon: require('./../../../assets/icons/icon-star-black.png')
    //     },
    //     unfavorite : {
    //         backGroundColor: "#FFFFFF",
    //         text: 'Desfavoritar',
    //         icon: require('./../../../assets/icons/icon-start-not-fill.png')
    //     }
    // }

    const handleWithBackButtonPressed = () =>{
        navigator.navigate('Home')
    }
    
    const handleWithSeeRepositoryClicked = () =>{
        Linking.openURL(repository.html_url)
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
                <FavoriteButton>
                    <FavoriteButtonText>Favoritar</FavoriteButtonText>
                    <FavoriteButtonIcon  source={require('./../../../assets/icons/icon-star-black.png')}/>
                </FavoriteButton>
            </BottomButtonsContainer>
        </MainContainer>
  
    )
}

export default DetailsScreen;