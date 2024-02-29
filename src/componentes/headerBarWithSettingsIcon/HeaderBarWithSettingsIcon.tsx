import { IconContainer, MainContainer, Title, TitleContainer } from "./styles"
import {useFonts} from 'expo-font'
import { Text } from "react-native"


const HeaderBarWithSettingsIcon: React.FC = () =>{

    const [fontsLoaded] = useFonts({
        "Roboto-Medium": require("../../../assets/fonts/Roboto-Medium.ttf")
    })

    if(!fontsLoaded){
        //TODO: Make an loader here
        return undefined
    }


    return(
        <MainContainer>
            <TitleContainer>
               <Title>WeFit</Title>
            </TitleContainer>
            <IconContainer>
                
            </IconContainer>
        </MainContainer>
    )
}

export default HeaderBarWithSettingsIcon
