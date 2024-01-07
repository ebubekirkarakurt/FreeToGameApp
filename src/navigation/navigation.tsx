import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack"
import GamesFilterScreen from "../screens/GamesFilterScreen";
import HomeScreen from "../screens/HomeScreen";


export type RootStackParamsList = {
  HomeScreen: undefined,
  GamesFilterScreen: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions: NativeStackNavigationOptions = { headerShown: false };
const gamesFilterScreenOptions: NativeStackNavigationOptions = {
  presentation: 'modal',
};


export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <RootStack.Screen
        name="GamesFilterScreen"
        component={GamesFilterScreen}
        options={gamesFilterScreenOptions}
      />
    </RootStack.Navigator>
  );
};