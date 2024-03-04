import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Text } from 'react-native';
export const MainContainer = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column; 
    background-color: orange;
`

export const BodyContainer = styled.View`
    flex:1;
    flex-direction: column;
    margin-left: 16px;
    margin-right: 16PX;
    overflow: hidden;
    background-color: blue;
    z-index: 1;
`

export const TitleContainer = styled.View`
    margin-top: 16px;
    flex-direction: row;
    overflow: hidden;
    background-color: aqua;
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
    flex: 1;
    font-family: 'Inter-Regular-400';
    font-size: 16px;
    margin-top: 16px;
    overflow: hidden;
    color: #9A9A9A;
`

export const BottomButtonsContainer = styled.View`
    height: 126px;
    background-color: blueviolet;
    margin-top: auto;
    z-index: 0;
`

export const LanguageContainer = styled.View`
    height: 17px;
    margin-top: 16px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
    background-color: chartreuse;
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
