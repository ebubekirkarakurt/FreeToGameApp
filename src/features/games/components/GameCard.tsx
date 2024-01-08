import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Surface } from 'react-native-paper';
import GameCardLabel from './GameCardLabel';

type IGameCardProps = {
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
};

function GameCard({ title, thumbnail, genre, platform }: IGameCardProps) {
  return (
    <Surface style={styles.gameCard} elevation={1}>
      <Image style={styles.img} source={{ uri: thumbnail }} />
      <Text style={styles.gameTitle}>{title}</Text>
      <View>
        <GameCardLabel genre={genre} platform={platform} />
      </View>
    </Surface>
  );
}

export default GameCard;

const styles = StyleSheet.create({
  gameCard: {
    width: 350,
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    margin: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gameTitle: {
    padding: 5,
    margin: 5,
    fontSize: 20,
    fontWeight: '600',
  }
});
