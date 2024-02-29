import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/home/home';
import FavoritesScreen from './src/pages/favorites/Favorites';
import {useFonts} from 'expo-font'
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf")
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
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Favorites' component={FavoritesScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

