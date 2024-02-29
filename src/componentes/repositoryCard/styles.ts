import styled from "styled-components/native";

export const MainContainer = styled.View`
    height: 167px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    background-color: aqua;
`

export const HeaderContainer = styled.View`
    height: 29px;
    flex-direction: row;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    align-items: center;
    background-color: blue;
`

export const TitleContainer = styled.View`
    display: flex;
    height: 15px;
    flex-direction: row;
    margin-right: auto;
    flex: 1;
    background-color: bisque;
`

export const OwnerTitle = styled.Text`
    font-size: 12px;
    font-family: "Inter-Regular-400";
    color: #070707;
`

export const TitleName = styled.Text`
    max-width: 100%;
    font-size: 12px;
    flex: 1;
    font-family: "Inter-Bold-700";
    color: #070707;
`

export const OwnerImage = styled.Image`
    width: 29px;
    height: 29px;
`