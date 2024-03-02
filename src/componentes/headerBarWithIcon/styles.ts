import styled from "styled-components/native";

export const MainContainer = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    background-color: #FFFFFF;
`   

export const TitleContainer = styled.View`
    flex: 1;
    height: 32px;
    margin-left: 16px;
    justify-content: center;
`

export const IconContainer = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-family: "Roboto-Medium";
    font-size: 20px;
    color: #000000DE;
`

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`