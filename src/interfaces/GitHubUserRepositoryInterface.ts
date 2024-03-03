  
  interface IGitHubUserRepository {
    id: number;
    name: string;
    owner: IOwner;
    description: string;
    language: string | null;
    stargazers_count: number;
  }