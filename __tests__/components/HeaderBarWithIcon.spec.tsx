import React from "react";

import HeaderBarWithIcon from "../../src/componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import '@testing-library/jest-native/extend-expect';
import {  render } from '@testing-library/react-native'

describe('HeaderBarWithIcon', () => {
    it('Should render title correctly', () => {
      const { getByText } = render(<HeaderBarWithIcon title="Some Title Here" icon={require('../../assets/icons/icon-settings.png')} onIconPressed={() =>{}}/>);
      expect(getByText('Some Title Here')).toBeDefined();
    });
  });