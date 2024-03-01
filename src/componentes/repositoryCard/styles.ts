import styled from "styled-components/native";
import { Platform } from "react-native";

export const MainContainer = styled.View`
    height: 167px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    border-radius: 4px;
    background-color: #FFFFFF;

    ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.2;
      shadow-radius: 4px;
    `,
    android: `
      elevation: 4;
      shadow-color: #000;
      shadow-opacity: 0.2;
    `,
  })}
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

export const Divider = styled.View`
    height: 1px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    background-color: #DADADA;
`

export const DescriptionContainer = styled.View`
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
`

export const DescriptionText = styled.Text`
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    font-size: 12px;
    color: #9A9A9A;
`

export const BottomContainer = styled.View`
    height: 36px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    background-color: blueviolet;
`

export const FavoriteButton = styled.TouchableOpacity`
    width: 103px;
    height: 36px;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    background-color: #FAF3DC;
`

export const FavoriteButtonIcon = styled.Image`
    width: 16.67px;
    height: 16.67px;
    margin-left: 11.67px;
`

export const FavoriteButtonTitle = styled.Text`
    font-size: 12px;
    font-family: "Inter-Bold-700";
    margin-left: 10px;
    color: #FFD02C;
`