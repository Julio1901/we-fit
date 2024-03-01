import { BottomContainer, DescriptionText, Divider, FavoriteButton, StarIcon, FavoriteButtonTitle, HeaderContainer, MainContainer, OwnerImage, OwnerTitle, StarsCounterContainer, TitleContainer, TitleName, StarsCounterText, LanguageContainer, LanguageIcon, LanguageTitle } from "./styles";

interface IRepositoryCardProps {
    showFavoriteButton : boolean;
}

const RepositoryCard : React.FC<IRepositoryCardProps> = ({showFavoriteButton}) => {
    return(
        <MainContainer>
            <HeaderContainer>
                <TitleContainer>
                    <OwnerTitle numberOfLines={1}>appswefit</OwnerTitle>
                    <TitleName numberOfLines={1}>/create-react-appaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbb</TitleName>
                </TitleContainer>
                <OwnerImage source={require("../../../assets/icons/icon-example-profile.png")}/>
            </HeaderContainer>
            <Divider/>
            <DescriptionText numberOfLines={2}>Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.</DescriptionText>
            <BottomContainer>
                { showFavoriteButton ? (
                    <FavoriteButton>
                        <StarIcon source={require("../../../assets/icons/icon-star.png")} style={{marginLeft:11.67}}/>
                        <FavoriteButtonTitle>Favoritar</FavoriteButtonTitle> 
                    </FavoriteButton>
                ) : null          
                }   
                <StarsCounterContainer>
                    <StarIcon source={require("../../../assets/icons/icon-star.png")} style={{marginLeft:1.67}}/>
                    <StarsCounterText>0</StarsCounterText>
                </StarsCounterContainer>
                <LanguageContainer>
                    <LanguageIcon source={require("../../../assets/icons/icon-red-circle.png")}/>
                    <LanguageTitle>TypeScript</LanguageTitle>
                </LanguageContainer>
            </BottomContainer>
        </MainContainer>
    )
}

export default RepositoryCard;