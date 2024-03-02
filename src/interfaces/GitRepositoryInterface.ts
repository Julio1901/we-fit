  
  interface IGitHubRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: IOwner;
  }