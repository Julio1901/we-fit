import { BottomContainer, DescriptionContainer, DescriptionText, Divider, FavoriteButton, FavoriteButtonIcon, FavoriteButtonTitle, HeaderContainer, MainContainer, OwnerImage, OwnerTitle, TitleContainer, TitleName } from "./styles";

const RepositoryCard : React.FC = () => {
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
                <FavoriteButton>
                    <FavoriteButtonIcon source={require("../../../assets/icons/icon-star.png")}/>
                    <FavoriteButtonTitle>Favoritar</FavoriteButtonTitle>
                </FavoriteButton>
            </BottomContainer>
        </MainContainer>
    )
}

export default RepositoryCard;