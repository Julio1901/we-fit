import { View, Text } from "react-native";
import { IconContainer, MainContainer, Title, TitleContainer } from "./styles"
import {useFonts} from 'expo-font'

interface IHeaderBarWithSettingsIconProps {
    title: string;
}

const HeaderBarWithSettingsIcon: React.FC<IHeaderBarWithSettingsIconProps> = ({title}) =>{

    return(
        <MainContainer>
            <TitleContainer>
               <Title>{title}</Title>
            </TitleContainer>
            <IconContainer>
                
            </IconContainer>
        </MainContainer>
    )
}

export default HeaderBarWithSettingsIcon
