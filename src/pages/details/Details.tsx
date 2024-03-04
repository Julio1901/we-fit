import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import HeaderBackComponent from "../../componentes/headerBackComponent/HeaderBackComponent";
import { BodyContainer, BottomButtonsContainer, Description, LanguageCircleIcon, LanguageContainer, MainContainer, TitleContainer, TitleOwner, TitleRepositoryName } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LanguageTitle } from "../../componentes/repositoryCard/styles";
import { RootStackParamList } from "../../../App";


interface DetailsScreenProps {
    route: RouteProp<RootStackParamList, 'Details'>;
}

const DetailsScreen : React.FC<DetailsScreenProps> = ({route}) => {
    const { repositoryJson } = route.params;

    const navigator = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const repository = JSON.parse(repositoryJson) as IGitHubUserRepository
    console.log(repository.name)
    const handleWithBackButtonPressed = () =>{
        navigator.navigate('Home')
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

            </BottomButtonsContainer>
        </MainContainer>
  
    )
}

export default DetailsScreen;