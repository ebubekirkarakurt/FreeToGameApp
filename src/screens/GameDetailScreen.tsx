import { StyleSheet, View } from 'react-native';
import React from 'react';
import GameDetails from '../features/games/components/GameDetails';
import { RouteProp } from '@react-navigation/native';

type GameDetailRouteProp = RouteProp<
  RootStackParamsList,
  'GameDetails'
>;

type Props = {
  route: GameDetailRouteProp;
};

const GameDetailScreen = ({route}: Props) => {
  const item = route.params.item;

  return (
    <View>
      <GameDetails item={item}/>
    </View>
  );
};

export default GameDetailScreen;

const styles = StyleSheet.create({});
