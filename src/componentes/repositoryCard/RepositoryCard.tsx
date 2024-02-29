import { HeaderContainer, MainContainer, OwnerImage, OwnerTitle, TitleContainer, TitleName } from "./styles";

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
        </MainContainer>
    )
}

export default RepositoryCard;