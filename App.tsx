import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowRepositoriesScreen from './src/pages/showRepositories/showRepositoriesScreen';
import {useFonts} from 'expo-font'
import { View, Text } from 'react-native';
import DetailsScreen from './src/pages/details/Details';


export type RootStackParamList = {
  Home: undefined;
  Details: { name: string };
};

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Regular-400": require("./assets/fonts/Inter-Regular-400.ttf"),
    "Inter-Bold-700": require("./assets/fonts/Inter-Bold-700.ttf"),
    "Roboto-Regular-400": require("./assets/fonts/Roboto-Regular-400.ttf"),
})

if(!fontsLoaded){
  return(
      <View>
         <Text>Loading...</Text>
      </View>
  )
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ShowRepositoriesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Details' component={DetailsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

