import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getReposEndPoint } from '../network/endpoints';

export interface IGitHubRepository{
    saveLocalRepository: (data: IGitHubUserRepository) => Promise<void> ;
    getLocalRepositories: () => Promise<IGitHubUserRepository[]>;
    removeRepositoryFromLocalStorage : (data: IGitHubUserRepository)  => Promise<void> ;
    getRemoteRepositories : (ownerName: string) => Promise<IGitHubUserRepository[]>;
}

export const GitHubRepository : IGitHubRepository = {

    saveLocalRepository: async (data: IGitHubUserRepository): Promise<void> => {
        try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem(String(data.id), jsonValue);
        } catch (error) {
            console.error('Error while saving repository:', error);
            throw error;
        }
    },

    getLocalRepositories: async (): Promise<IGitHubUserRepository[]> => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const repositories: IGitHubUserRepository[] = [];

            for (const key of keys) {
                const jsonValue = await AsyncStorage.getItem(key);

                if (jsonValue !== null) {
                    const repository: IGitHubUserRepository = JSON.parse(jsonValue);
                    repositories.push(repository);
                }
            }
            return repositories;
        } catch (error) {
            console.error('Error fetching repositories:', error);
            throw error;
        }
    },
    
    removeRepositoryFromLocalStorage : async (data: IGitHubUserRepository) => {
        try {
          await AsyncStorage.removeItem(String(data.id))
        } catch(e) {
         console.log(`Repository note removed. Error: ${e}`)
        }
      },

    getRemoteRepositories: async function (ownerName: string): Promise<IGitHubUserRepository[]> {
        let response = await axios.get<IGitHubUserRepository[]>(getReposEndPoint(ownerName))
        const favoriteRepositories = await this.getLocalRepositories()
        if(favoriteRepositories.length !== 0){
            response.data = response.data.filter(repo => !favoriteRepositories.some(favRepo => favRepo.name === repo.name));
        }
        return response.data
    }
}