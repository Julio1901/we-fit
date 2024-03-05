import { useEffect } from "react";
import { LogoImage, MainContainer } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";

const SplashScreen : React.FC = () =>{

    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    useEffect(() => {
       
        setTimeout(() => {
            navigator.navigate('Home')
        }, 1500); 
      }, []);

    return(
        <MainContainer>
            <LogoImage source={require('../../../assets/images/we-fit-logo.png')}/>
        </MainContainer>
    )
}

export default SplashScreen;