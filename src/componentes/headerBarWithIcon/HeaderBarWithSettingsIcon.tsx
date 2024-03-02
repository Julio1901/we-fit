import { ImageSourcePropType } from "react-native";
import { Icon, IconContainer, MainContainer, Title, TitleContainer } from "./styles"

interface IHeaderBarWithSettingsIconProps {
    title: string;
    icon: ImageSourcePropType;
    onIconPressed: () => void;
}

const HeaderBarWithIcon: React.FC<IHeaderBarWithSettingsIconProps> = ({title, icon, onIconPressed}) =>{

    return(
        <MainContainer>
            <TitleContainer>
               <Title>{title}</Title>
            </TitleContainer>
            <IconContainer onPress={onIconPressed}>
                <Icon source={icon}/>
            </IconContainer>
        </MainContainer>
    )
}

export default HeaderBarWithIcon
