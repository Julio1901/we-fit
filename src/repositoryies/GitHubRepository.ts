import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IGitHubRepository{
    saveLocalRepository: (data: IGitHubUserRepository) => Promise<void> ;
    getLocalRepositories: () => Promise<IGitHubUserRepository[]>;
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
            const keys = await AsyncStorage.getAllKeys()
            const repositories: IGitHubUserRepository[] = []
           
            for (const key of keys) {
                const jsonValue = await AsyncStorage.getItem(key)
               
                if (jsonValue !== null) {
                    const repository: IGitHubUserRepository = JSON.parse(jsonValue)
                    repositories.push(repository);
                }
            }
            return repositories;
        } catch (error) {
            console.error('Error fetching repositories:', error)
            throw error;
        }
    }
}