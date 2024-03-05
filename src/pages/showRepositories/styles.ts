import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const MainContainer = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column; 
    background-color: #F6F6F5;
    background-color: aqua;
`

export const EmptyScenarioContainer = styled.View`
    flex: 1;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`
