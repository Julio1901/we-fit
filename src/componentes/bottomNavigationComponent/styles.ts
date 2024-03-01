import styled from "styled-components/native";
import { Platform } from "react-native";

export const MainContainer = styled.View`
    height: 56px;
    margin-top: auto;
    flex-direction: row;
    background-color: #FFFFFF;

    ${Platform.select({
    ios: `
      shadow-color: #000000;
      shadow-offset: 0px 1px;
      shadow-opacity: 0.12;
      shadow-radius: 8px;
    `,
    android: `
      elevation: 3;
      shadow-color: #000000;
      shadow-opacity: 0.12;
      shadow-radius: 8px;
    `,
  })}
`

export const RepositoriesButtonContainer = styled.View`
     flex: 1;
     height: 56px;
     align-items: center;
`

export const FavoritesButtonContainer = styled.View`
    flex: 1;
    height: 56px;
    align-items: center;
`

export const IconGitHub = styled.Image`
    width: 24px;
    height: 24px;
    margin-top: 6px;
`

export const RepositoriesText = styled.Text`
    font-family: 'Roboto-Regular-400';
    font-size: 14px;
    
`
export const IconStar = styled.Image`
    width: 24px;
    height: 24px;
    margin-top: 6px;
`

export const FavoritesText = styled.Text`
    font-family: 'Roboto-Regular-400';
    font-size: 12px;
`

