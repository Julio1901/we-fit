import { BottomUnderline, ButtonFilled, ButtonFilledTitle, ButtonText, ButtonTextTitle, ButtonsContainer, DraggableView, HeaderContainer, MainContainer, SearchComponentTitle, SearchInputText, SearchInputTextContainer, SearchInputTextTitle } from "./styles";

const BottomSearchComponent : React.FC = () => {
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
                <ButtonText>
                    <ButtonTextTitle>CANCELAR</ButtonTextTitle>
                </ButtonText>
                <ButtonFilled>
                    <ButtonFilledTitle>SALVAR</ButtonFilledTitle>
                </ButtonFilled>
            </ButtonsContainer>
        </MainContainer>
    )
}

export default BottomSearchComponent;