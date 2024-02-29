import { ImageSourcePropType } from "react-native";
import { Icon, IconContainer, MainContainer, Title, TitleContainer } from "./styles"

interface IHeaderBarWithSettingsIconProps {
    title: string;
    icon: ImageSourcePropType;
}

const HeaderBarWithIcon: React.FC<IHeaderBarWithSettingsIconProps> = ({title, icon}) =>{

    return(
        <MainContainer>
            <TitleContainer>
               <Title>{title}</Title>
            </TitleContainer>
            <IconContainer>
                <Icon source={icon}/>
            </IconContainer>
        </MainContainer>
    )
}

export default HeaderBarWithIcon
