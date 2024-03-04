import { useEffect, useState } from "react";
import { BottomContainer, DescriptionText, Divider, FavoriteButton, StarIcon, FavoriteButtonTitle, HeaderContainer, MainContainer, OwnerImage, OwnerTitle, StarsCounterContainer, TitleContainer, TitleName, StarsCounterText, LanguageContainer, LanguageIcon, LanguageTitle } from "./styles";


interface IRepositoryCardProps {
    showFavoriteButton : boolean;
    item: IGitHubUserRepository;
    onFavoriteButtonPressed ? : (item : IGitHubUserRepository) => void;
    onCardPressed : (item: IGitHubUserRepository) => void;
}

const RepositoryCard : React.FC<IRepositoryCardProps> = ({showFavoriteButton, item, onFavoriteButtonPressed = null, onCardPressed}) => {

    const [imageError, setImageError] = useState(false)

    return(
        <MainContainer onPress={onCardPressed}>
            <HeaderContainer>
                <TitleContainer>
                    <OwnerTitle numberOfLines={1}>{item.owner.login}</OwnerTitle>
                    <TitleName numberOfLines={1}>/{item.name}</TitleName>
                </TitleContainer>
                { !imageError ? (
                    <OwnerImage source={{uri: item.owner.avatar_url}} onError={() => {setImageError(true)}}/>
                ) : (
                    <OwnerImage source={require("../../../assets/images/image-profile-not-found.png")}/>
                )
                }
              
            </HeaderContainer>
            <Divider/>
            <DescriptionText numberOfLines={2}>{item.description}</DescriptionText>
            <BottomContainer>
                { showFavoriteButton ? (
                    <FavoriteButton onPress={() => { onFavoriteButtonPressed? onFavoriteButtonPressed(item) : null}}>
                        <StarIcon source={require("../../../assets/icons/icon-star.png")} style={{marginLeft:11.67}}/>
                        <FavoriteButtonTitle>Favoritar</FavoriteButtonTitle> 
                    </FavoriteButton>
                ) : null          
                }   
                <StarsCounterContainer>
                    <StarIcon source={require("../../../assets/icons/icon-star.png")} style={{marginLeft:1.67}}/>
                    <StarsCounterText>{item.stargazers_count}</StarsCounterText>
                </StarsCounterContainer>
                <LanguageContainer>
                    <LanguageIcon source={require("../../../assets/icons/icon-red-circle.png")}/>
                    <LanguageTitle>{ item.language ? item.language : "Language not informed"}</LanguageTitle>
                </LanguageContainer>
            </BottomContainer>
        </MainContainer>
    )
}

export default RepositoryCard;