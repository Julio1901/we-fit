import { useState } from "react";
import { BottomUnderline, ButtonFilled, ButtonFilledTitle, ButtonText, ButtonTextTitle, ButtonsContainer, DraggableView, HeaderContainer, MainContainer, Overlay, SearchComponentTitle, SearchInputText, SearchInputTextContainer, SearchInputTextTitle } from "./styles";

interface IBottomSearchComponentProps {
    onCancelPressed : () => void;
    onSavePressed : (value: string) => void;
    bottomSheetIsOpen : boolean;
}

const BottomSearchComponent : React.FC<IBottomSearchComponentProps> = ({onCancelPressed, onSavePressed, bottomSheetIsOpen = false}) => {
    
    const [inputValue, setInputValue] = useState<string>('');

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    // };

    const handleWithInputValueChange = (value : string) => {
        setInputValue(value)    
    }

    return (
        <MainContainer>
            {bottomSheetIsOpen ? (<Overlay/>) : null}
            <HeaderContainer>
                <DraggableView/>
            </HeaderContainer>
            <SearchComponentTitle>Alterar usuário selecionado</SearchComponentTitle>
            <SearchInputTextContainer>
                <SearchInputTextTitle>Nome do usuário</SearchInputTextTitle>
                <SearchInputText value={inputValue} onChangeText={handleWithInputValueChange}  /> 
                <BottomUnderline/>
            </SearchInputTextContainer>
            <ButtonsContainer>
                <ButtonText onPress={onCancelPressed}>
                    <ButtonTextTitle>CANCELAR</ButtonTextTitle>
                </ButtonText>
                <ButtonFilled onPress={ () => onSavePressed(inputValue)}>
                    <ButtonFilledTitle>SALVAR</ButtonFilledTitle>
                </ButtonFilled>
            </ButtonsContainer>
        </MainContainer>
    )
}

export default BottomSearchComponent;