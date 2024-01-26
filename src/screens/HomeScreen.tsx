import { StyleSheet, View } from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import GamesScreen from '../features/games/components/GamesScreen';
import CardSkeleton from '../features/games/components/CardSkeleton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <GestureHandlerRootView>
      <View>
        <ScreenHeader />
        <GamesScreen />
        {/* <CardSkeleton/> */}
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
