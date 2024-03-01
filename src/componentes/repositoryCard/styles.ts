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
      shadow-color: #000000;
      shadow-offset: 0px 1px;
      shadow-opacity: 0.25;
      shadow-radius: 4px;
    `,
    android: `
      elevation: 4;
      shadow-color: #000000;
      shadow-opacity: 0.25;
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
`

export const TitleContainer = styled.View`
    display: flex;
    height: 15px;
    flex-direction: row;
    margin-right: auto;
    flex: 1;
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
    border-radius: 50px;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const FavoriteButton = styled.TouchableOpacity`
    width: 103px;
    height: 36px;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    background-color: #FAF3DC;
`

export const StarIcon = styled.Image`
    width: 16.67px;
    height: 16.67px;
`

export const FavoriteButtonTitle = styled.Text`
    font-size: 12px;
    font-family: "Inter-Bold-700";
    margin-left: 10px;
    color: #FFD02C;
`

export const StarsCounterContainer = styled.View`
    width: 34px;
    height: 20px;
    flex-direction: row;
    align-items: center;
`

export const StarsCounterText = styled.Text `
    font-size: 12px;
    font-family: "Inter-Regular-400";
    margin-left: auto;
    color: #9A9A9A;
`

export const LanguageContainer = styled.View`
    height: 15px;
    flex-direction: row;
    align-items: center;
`

export const LanguageIcon = styled.Image`
    width: 8px;
    height: 8px;
`

export const LanguageTitle = styled.Text`
    font-size: 12px;
    font-family: "Inter-Regular-400";
    margin-left: 6px;
    color: #9A9A9A;
`