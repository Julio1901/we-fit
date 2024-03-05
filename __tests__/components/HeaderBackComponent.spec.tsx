
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native'
import HeaderBackComponent from "../../src/componentes/headerBackComponent/HeaderBackComponent";

describe('HeaderBackComponent', () => {
    it('Should render title correctly', () => {
      const { queryByText } = render(<HeaderBackComponent screenName="Home" onBackButtonPressed={ () => {}}/>);
      expect(queryByText('Home')).toBeDefined();
    });
  });