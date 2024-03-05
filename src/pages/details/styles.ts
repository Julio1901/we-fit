import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Platform, Text } from 'react-native';

export const MainContainer = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column; 
    background-color: #FFFFFF;
`

export const BodyContainer = styled.View`
    flex:1;
    height: auto;
    flex-direction: column;
    margin-left: 16px;
    margin-right: 16PX;
    overflow: hidden;
    z-index: 1;
`

export const TitleContainer = styled.View`
    margin-top: 16px;
    flex-direction: row;
    overflow: hidden;
`

export const TitleOwner = styled.Text`
    font-family: 'Inter-Regular-400';
    font-size: 20px;
    color: #070707;
`

export const TitleRepositoryName = styled(Text)`
    flex:1;
    font-family: 'Inter-Bold-700';
    font-size: 20px;
    color: #070707;
`

export const Description = styled(Text)`
    font-family: 'Inter-Regular-400';
    font-size: 16px;
    margin-top: 16px;
    overflow: hidden;
    color: #9A9A9A;
`

export const BottomButtonsContainer = styled.View`
    height: 126px;
    margin-top: auto;
    z-index: 0;
`

export const LanguageContainer = styled.View`
    height: 17px;
    margin-top: 16px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
`

export const LanguageCircleIcon = styled.Image`
    width: 12px;
    height: 12px;
`

export const LanguageName = styled.Image`
    font-family: 'Inter-Regular-400';  
    font-size: 14px;
    color: #9A9A9A;
`

export const SeeRepositoryButton = styled.TouchableOpacity`
    height: 42px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SeeRepositoryButtonText = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: 15px;
    color: #1976D2;
`

export const SeeRepositoryButtonIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 10px;
`

export const FavoriteButton = styled.TouchableOpacity`
    height: 42px;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 4px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #FFD02C;

    ${Platform.select({
    ios: `
      shadow-color: #000000;
      shadow-offset: 0px 3px;
      shadow-opacity: 0.20;
      shadow-radius: 1px;
    `,
    android: `
      elevation: 2;
      shadow-color: #000000;
      shadow-opacity: 0.20;
    `,
  })}

`

export const FavoriteButtonText = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: 15px;
    color: #000000;
`

export const FavoriteButtonIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 8px;
`