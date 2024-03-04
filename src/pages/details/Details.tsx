import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import HeaderBackComponent from "../../componentes/headerBackComponent/HeaderBackComponent";
import { BodyContainer, BottomButtonsContainer, Description, LanguageCircleIcon, LanguageContainer, MainContainer, RepositoryName, TitleContainer, TitleOwner, TitleRepositoryName } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LanguageTitle } from "../../componentes/repositoryCard/styles";

const DetailsScreen : React.FC = () => {

    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const handleWithBackButtonPressed = () =>{
        navigator.navigate('Home')
    }
    
    return(
        <MainContainer>
            <HeaderBackComponent screenName="Detalhes" onBackButtonPressed={handleWithBackButtonPressed}/>
            <BodyContainer>
                <TitleContainer >
                    <TitleOwner  numberOfLines={1}>appswefit</TitleOwner>
                    <TitleRepositoryName numberOfLines={1}>/create-react-appaaaaaaaaaappaaaaaaaaaappaaaaaaaaaappaaaaaaaaaappaaaaaaaaaappaaaaaaaaaaaaaaaaaaaaaaaaaaa</TitleRepositoryName>
                </TitleContainer>
                <Description numberOfLines={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.
                final
                </Description>
                <LanguageContainer>
                    <LanguageCircleIcon source={require('../../../assets/icons/icon-red-circle.png')}/>
                    <LanguageTitle>TypeScript</LanguageTitle>
                </LanguageContainer>
            </BodyContainer>
            <BottomButtonsContainer>

            </BottomButtonsContainer>
        </MainContainer>
  
    )
}

export default DetailsScreen;