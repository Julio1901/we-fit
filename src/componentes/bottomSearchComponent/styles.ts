import styled from "styled-components/native";

export const MainContainer = styled.View`
    height: 200px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background-color: #FFFFFF;
    z-index: 2; 
`

export const HeaderContainer = styled.View`
    height: 38px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`

export const DraggableView = styled.View`
    width: 30px;
    height: 6px;
    border-radius: 12px;
    background-color: #E0E0E0;
`

export const SearchComponentTitle = styled.Text`
    font-size: 16px;
    font-family: 'Roboto-Regular-400';
    margin-left: 16px;
    color: #000000DE;
`

export const SearchInputTextContainer = styled.View`
    height: 56px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 10px;
    background-color: #0000000F;
`

export const SearchInputText = styled.TextInput`
   height: 24px;
   margin-left: 12px;
   margin-right: 12px;
   margin-top: 3px;
   font-size: 16px;
   font-family: 'Roboto-Regular-400';
   color: #000000DE;
`

export const SearchInputTextTitle = styled.Text`
    margin-top: 9px;
    margin-left: 12px;
    font-family: 'Roboto-Regular-400';
    font-size: 12px;
    color: #00000099;
`

export const BottomUnderline = styled.View`
    height: 1px;
    margin-top: auto;
    background-color: #0000006B;
`

export const ButtonsContainer = styled.View`
    height: 42px;
    margin-top: 10px;
    margin-left: 16px;
    margin-right: 16px;
    gap: 10px;
    flex-direction: row;
`

export const ButtonText = styled.TouchableOpacity`
    flex: 1;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`

export const ButtonTextTitle = styled.Text`
    font-size: 15px;
    font-family: 'Roboto-Medium';
    color: #1976D2;
`

export const ButtonFilled = styled.TouchableOpacity`
    flex: 1;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: #1976D2;
`

export const ButtonFilledTitle = styled.Text`
    font-size: 15px;
    font-family: 'Roboto-Medium';
    color: #FFFFFF;
`

export const Overlay = styled.View`
    position: absolute;
    top: -50000px;
    left: 0;
    right: 0;
    bottom: 200px;
    background-color: #00000080;
    z-index: 1; 
    backdrop-filter: blur(5px); 
`;