import { BottomUnderline, ButtonFilled, ButtonFilledTitle, ButtonText, ButtonTextTitle, ButtonsContainer, DraggableView, HeaderContainer, MainContainer, SearchComponentTitle, SearchInputText, SearchInputTextContainer, SearchInputTextTitle } from "./styles";

interface IBottomSearchComponentProps {
    onCancelPressed : () => void;
    onSavePressed : () => void;
}

const BottomSearchComponent : React.FC<IBottomSearchComponentProps> = ({onCancelPressed, onSavePressed}) => {
    return (
        <MainContainer>
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