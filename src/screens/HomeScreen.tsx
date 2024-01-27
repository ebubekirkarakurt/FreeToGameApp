import { View } from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import GamesScreen from '../features/games/components/GamesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <GestureHandlerRootView>
      <View>
        <ScreenHeader />
        <GamesScreen />
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
