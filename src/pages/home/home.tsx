import { Button, View, Text, FlatList } from "react-native"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainContainer } from "./styles";
import HeaderBarWithIcon from "../../componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import RepositoryCard from "../../componentes/repositoryCard/RepositoryCard";
import BottomNavigationComponent from "../../componentes/bottomNavigationComponent/BottomNavigationComponent";
import axios from "axios";
import { USERS_ENDPOINT, getReposEndPoint } from "../../network/endpoints";
import { Animated, Easing } from 'react-native';
import { useEffect, useState } from "react";
import BottomSearchComponent from "../../componentes/bottomSearchComponent/BottomSearchComponent";


const HomeScreen : React.FC = () => {
    
    const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const settingsIcon = require("../../../assets/icons/icon-settings.png")
    const [repositories, setRepositories] = useState<IGitHubRepository[] | null>(null);
    //TODO: solution to handle with url
    // const [ownerName, setOwnerName] = useState('')
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [bottomSheetHeight] = useState(new Animated.Value(0));
  

    const fetchGitHubRepository = async () => {
        try{
            const response = await axios.get<IGitHubRepository[]>(getReposEndPoint('facebook'))
            setRepositories(response.data)  
        }catch(error){
            //TODO: Remove this mock
            const mockRepositories: IGitHubRepository[] = [
                {
                  id: 1,
                  name: "awesome-project",
                  owner: { login: "user1", id: 123, avatar_url: "https://avatars.githubusercontent.com/u/123" },
                  description: "This is a fantastic project!",
                  language: "TypeScript",
                  stargazers_count: 100
                },
                {
                  id: 2,
                  name: "cool-app",
                  owner: { login: "user2", id: 456, avatar_url: "https://avatars.githubusercontent.com/u/456" },
                  description: "Check out this amazing tool!",
                  language: "JavaScript",
                  stargazers_count: 200
                },
                {
                  id: 3,
                  name: "mega-library",
                  owner: { login: "user3", id: 789, avatar_url: "https://avatars.githubusercontent.com/u/789" },
                  description: "A must-have library for developers!",
                  language: "Python",
                  stargazers_count: 300
                },
                {
                  id: 4,
                  name: "super-tool",
                  owner: { login: "user4", id: 1011, avatar_url: "https://avatars.githubusercontent.com/u/1011" },
                  description: "Explore the possibilities with this app!",
                  language: "Java",
                  stargazers_count: 400
                },
                {
                  id: 5,
                  name: "amazing-website",
                  owner: { login: "user5", id: 1213, avatar_url: "https://avatars.githubusercontent.com/u/1213" },
                  description: "Simplify your workflow with this project!",
                  language: "Ruby",
                  stargazers_count: 500
                },
                {
                  id: 6,
                  name: "great-library",
                  owner: { login: "user6", id: 1415, avatar_url: "https://avatars.githubusercontent.com/u/1415" },
                  description: "An awesome library for developers!",
                  language: "TypeScript",
                  stargazers_count: 600
                },
                {
                  id: 7,
                  name: "awesome-project",
                  owner: { login: "user7", id: 1617, avatar_url: "https://avatars.githubusercontent.com/u/1617" },
                  description: "This is a fantastic project!",
                  language: "JavaScript",
                  stargazers_count: 700
                },
                {
                  id: 8,
                  name: "cool-app",
                  owner: { login: "user8", id: 1819, avatar_url: "https://avatars.githubusercontent.com/u/1819" },
                  description: "Check out this amazing tool!",
                  language: "Python",
                  stargazers_count: 800
                },
                {
                  id: 9,
                  name: "mega-library",
                  owner: { login: "user9", id: 2021, avatar_url: "https://avatars.githubusercontent.com/u/2021" },
                  description: "A must-have library for developers!",
                  language: "Java",
                  stargazers_count: 900
                },
                {
                  id: 10,
                  name: "super-tool",
                  owner: { login: "user10", id: 2223, avatar_url: "https://avatars.githubusercontent.com/u/2223" },
                  description: "Explore the possibilities with this app!",
                  language: "Ruby",
                  stargazers_count: 1000
                }
              ];
            setRepositories(mockRepositories)  
            console.error('Error when making request:', error);
        }
    }


        //TODO: Implement name into dependencies to refetch when name search change
      useEffect(() => {
        fetchGitHubRepository()
      }, []);

    const handleWithGoToFavoritesClick = () => {
        navigator.navigate('Favorites')
    }

    const handleBottomSheetToggle = () => {
        setIsBottomSheetOpen(!isBottomSheetOpen);

        Animated.timing(bottomSheetHeight, {
          toValue: isBottomSheetOpen ? 0 : 200, 
          duration: 300, 
          easing: Easing.ease,
          useNativeDriver: false
        }).start();
      };

    return (
        <MainContainer>
            <HeaderBarWithIcon title="WeFit" icon={settingsIcon} onIconPressed={handleBottomSheetToggle}/>
                <FlatList
                    data={repositories}
                    renderItem={({ item }) => <RepositoryCard showFavoriteButton={true} item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
              <Animated.View style={{ height: bottomSheetHeight }}>
                    <BottomSearchComponent onCancelPressed={handleBottomSheetToggle} onSavePressed={handleBottomSheetToggle} bottomSheetIsOpen={isBottomSheetOpen}/>
                </Animated.View>
             {!isBottomSheetOpen ? ( <BottomNavigationComponent type="repositories"/>) : null} 
        </MainContainer>
    )
}

export default HomeScreen