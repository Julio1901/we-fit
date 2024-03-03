import { BottomUnderline, ButtonFilled, ButtonFilledTitle, ButtonText, ButtonTextTitle, ButtonsContainer, DraggableView, HeaderContainer, MainContainer, Overlay, SearchComponentTitle, SearchInputText, SearchInputTextContainer, SearchInputTextTitle } from "./styles";

interface IBottomSearchComponentProps {
    onCancelPressed : () => void;
    onSavePressed : () => void;
    bottomSheetIsOpen : boolean;
}

const BottomSearchComponent : React.FC<IBottomSearchComponentProps> = ({onCancelPressed, onSavePressed, bottomSheetIsOpen = false}) => {
    return (
        <MainContainer>
            {bottomSheetIsOpen ? (<Overlay/>) : null}
            <HeaderContainer>
                <DraggableView/>
            </HeaderContainer>
            <SearchComponentTitle>Alterar usuário selecionado</SearchComponentTitle>
            <SearchInputTextContainer>
                <SearchInputTextTitle>Nome do usuário</SearchInputTextTitle>
                <SearchInputText /> 
                <BottomUnderline/>
            </SearchInputTextContainer>
            <ButtonsContainer>
                <ButtonText onPress={onCancelPressed}>
                    <ButtonTextTitle>CANCELAR</ButtonTextTitle>
                </ButtonText>
                <ButtonFilled onPress={onSavePressed}>
                    <ButtonFilledTitle>SALVAR</ButtonFilledTitle>
                </ButtonFilled>
            </ButtonsContainer>
        </MainContainer>
    )
}

export default BottomSearchComponent;