import { FavoritesButtonContainer, FavoritesText, IconGitHub, IconStar, MainContainer, RepositoriesButtonContainer, RepositoriesText } from "./styles";

type BottomNavigationComponentType = "repositories" | "favorites" ;

interface IBottomNavigationComponentProps {
    type: BottomNavigationComponentType;
    onFavoriteButtonClicked : () => void;
}

const BottomNavigationComponent : React.FC<IBottomNavigationComponentProps> = ({type, onFavoriteButtonClicked}) => {

    const buttonsConfigs = {
        repositories: {
          gitHub: require('../../../assets/icons/icon-git-hub-blue.png'),
          star: require('../../../assets/icons/icon-star-gray.png'),
          repositoriesTextColor : "#1976D2",
          favoritesTextColor: "#00000099"
        },
        favorites: {
          gitHub: require('../../../assets/icons/icon-git-hub-grey.png'),
          star: require('../../../assets/icons/icon-star-blue.png'),
          repositoriesTextColor : "#00000099",
          favoritesTextColor: "#1976D2"
        }
      };
      
    return(
        <MainContainer>
            <RepositoriesButtonContainer>
                <IconGitHub source={buttonsConfigs[type].gitHub}/>
                <RepositoriesText style={{ color: buttonsConfigs[type].repositoriesTextColor}}>Repositórios</RepositoriesText>
            </RepositoriesButtonContainer>
            <FavoritesButtonContainer onPress={onFavoriteButtonClicked}>
                <IconStar source={buttonsConfigs[type].star}/>
                <FavoritesText style={{ color: buttonsConfigs[type].favoritesTextColor}}>Favoritos</FavoritesText>
            </FavoritesButtonContainer>
        </MainContainer>
    )
}

export default BottomNavigationComponent;