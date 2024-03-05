import React from "react";

import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native'
import BottomNavigationComponent from "../../src/componentes/bottomNavigationComponent/BottomNavigationComponent";

describe('HeaderBarWithIcon', () => {
    it('Should render repositories button correctly', () => {
      const { queryByText } = render(<BottomNavigationComponent onFavoriteButtonClicked={() => {}} onRepositoriesButtonClicked={() => {}} type="repositories"/>);
      expect(queryByText('Repositórios')).toBeDefined();
    });

    it('Should render favorites button correctly', () => {
        const { queryByText } = render(<BottomNavigationComponent onFavoriteButtonClicked={() => {}} onRepositoriesButtonClicked={() => {}} type="repositories"/>);
        expect(queryByText('Favoritos')).toBeDefined();
      });
  });