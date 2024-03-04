import { BackIcon, BackIconContainer, MainContainer, Title } from "./styles";

interface IHeaderBackComponentProps{
    screenName : string;
    onBackButtonPressed: () => void;
}

const HeaderBackComponent : React.FC<IHeaderBackComponentProps> = ({screenName, onBackButtonPressed}) => {
    return(
        <MainContainer>
            <BackIconContainer onPress={onBackButtonPressed}>
                <BackIcon source={require('../../../assets/icons/icon-back-arrow.png')}/>
            </BackIconContainer>
            <Title>{screenName}</Title>
        </MainContainer>
    )
}

export default HeaderBackComponent;