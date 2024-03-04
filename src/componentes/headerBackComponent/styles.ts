import styled from "styled-components/native";

export const MainContainer = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    background-color: #000000;
`   

export const BackIconContainer = styled.TouchableOpacity`
    width: 48px;
    height: 48px;   
    margin-left: 16px;
`

export const BackIcon = styled.Image`
    width: 48px;
    height: 48px;   
`

export const Title = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: 20px;
    color: #FFFFFFDE;
`