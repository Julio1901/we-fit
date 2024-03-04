import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import HeaderBackComponent from "../../componentes/headerBackComponent/HeaderBackComponent";
import { MainContainer } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const DetailsScreen : React.FC = () => {

    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const handleWithBackButtonPressed = () =>{
        navigator.navigate('Home')
    }
    
    return(
        <MainContainer>
            <HeaderBackComponent screenName="Detalhes" onBackButtonPressed={handleWithBackButtonPressed}/>
        </MainContainer>
  
    )
}

export default DetailsScreen;