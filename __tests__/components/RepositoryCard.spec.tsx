

import React from "react";


import '@testing-library/jest-native/extend-expect';
import {  render } from '@testing-library/react-native'
import RepositoryCard from "../../src/componentes/repositoryCard/RepositoryCard";

describe('RepositoryCard', () => {

    const mockData: IGitHubUserRepository[] = [
        {
          id: 1,
          name: "React",
          owner: {
            login: "facebook",
            id: 69631,
            avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4"
          },
          description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
          language: "JavaScript",
          stargazers_count: 172824,
          html_url: "https://github.com/facebook/react"
        },
        {
          id: 2,
          name: "TensorFlow",
          owner: {
            login: "tensorflow",
            id: 15658638,
            avatar_url: "https://avatars.githubusercontent.com/u/15658638?v=4"
          },
          description: "An Open Source Machine Learning Framework for Everyone",
          language: "Python",
          stargazers_count: 156506,
          html_url: "https://github.com/tensorflow/tensorflow"
        }
      ]

    it('Should title owner correctly', () => {
    const { queryByText } = render(<RepositoryCard item={mockData[0]} onCardPressed={() => {}} showFavoriteButton={true} onFavoriteButtonPressed={() => {}}/>);
    expect(queryByText('facebook/React')).toBeDefined();
    });

    it('Should render owner correctly', () => {
      const { getByText } = render(<RepositoryCard item={mockData[0]} onCardPressed={() => {}} showFavoriteButton={true} onFavoriteButtonPressed={() => {}}/>);
      expect(getByText('facebook')).toBeDefined();
    });

    it('Should render description correctly', () => {
        const { getByText } = render(<RepositoryCard item={mockData[0]} onCardPressed={() => {}} showFavoriteButton={true} onFavoriteButtonPressed={() => {}}/>);
        expect(getByText('A declarative, efficient, and flexible JavaScript library for building user interfaces.')).toBeDefined();
      });
  

      it('Should render component with Favorite Button', () => {
        const { getByText } = render(<RepositoryCard item={mockData[0]} onCardPressed={() => {}} showFavoriteButton={true} onFavoriteButtonPressed={() => {}}/>);
        expect(getByText('Favoritar')).toBeDefined();
      });

      it('Should render component without Favorite Button', () => {
        const {queryAllByText } = render(<RepositoryCard item={mockData[0]} onCardPressed={() => {}} showFavoriteButton={false} onFavoriteButtonPressed={() => {}}/>);
        expect(queryAllByText('Favoritar')).toBeNull
      });
  

      it('Should render stargazers count', () => {
        const { queryAllByText } = render(<RepositoryCard item={mockData[0]} onCardPressed={() => {}} showFavoriteButton={true} onFavoriteButtonPressed={() => {}}/>);
        expect(queryAllByText('69631')).toBeDefined();
      });

      it('Should render languague name', () => {
        const { queryAllByText } = render(<RepositoryCard item={mockData[0]} onCardPressed={() => {}} showFavoriteButton={true} onFavoriteButtonPressed={() => {}}/>);
        expect(queryAllByText('JavaScript')).toBeDefined();
      });


  });