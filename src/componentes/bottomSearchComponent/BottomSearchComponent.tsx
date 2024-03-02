import { BottomUnderline, DraggableView, HeaderContainer, MainContainer, SearchComponentTitle, SearchInputText, SearchInputTextContainer, SearchInputTextTitle } from "./styles";

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
          
            
        </MainContainer>
    )
}

export default BottomSearchComponent;