
import HeaderBarWithIcon from "../../src/componentes/headerBarWithIcon/HeaderBarWithSettingsIcon";
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native'
import BottomSearchComponent from "../../src/componentes/bottomSearchComponent/BottomSearchComponent";


describe('BottomShearchComponent', () => {
    it('Should render title correctly', () => {
      const { queryByText } = render(<BottomSearchComponent bottomSheetIsOpen={true} onCancelPressed={() => {}} onSavePressed={() => {}}/>);
      expect(queryByText('Alterar usuário selecionado')).toBeDefined();
    });


    it('Should render save button correctly', () => {
        const { queryByText } = render(<BottomSearchComponent bottomSheetIsOpen={true} onCancelPressed={() => {}} onSavePressed={() => {}}/>);
        expect(queryByText('Salvar')).toBeDefined();
    });
  

    it('Should render cancel button correctly', () => {
        const { queryByText } = render(<BottomSearchComponent bottomSheetIsOpen={true} onCancelPressed={() => {}} onSavePressed={() => {}}/>);
        expect(queryByText('Cancelar')).toBeDefined();
    });
  

    it('Should render input text title correctly', () => {
        const { queryByText } = render(<BottomSearchComponent bottomSheetIsOpen={true} onCancelPressed={() => {}} onSavePressed={() => {}}/>);
        expect(queryByText('Nome do usuário')).toBeDefined();
    });
  


  });