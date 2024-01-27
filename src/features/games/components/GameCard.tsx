import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Surface } from 'react-native-paper';
import GameCardLabel from './GameCardLabel';
import { useAppNavigation } from '../../../navigation/utils/useAppNavigation';
import CardSkeleton from './CardSkeleton';

type IGameCardProps = {
  isLoading: boolean;
  item: any;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
};

function GameCard({
  isLoading,
  item,
  title,
  thumbnail,
  genre,
  platform,
}: IGameCardProps) {
  const navigation = useAppNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('GameDetails', { item: item })}
    >
      <Surface style={styles.gameCard} elevation={1}>
        {isLoading ? (
          <View style={{ width: '100%', height: '100%' }}>
            <CardSkeleton />
          </View>
        ) : (
          <View style={{ width: '100%', height: '100%' }}>
            <Image style={styles.img} source={{ uri: thumbnail }} />
            <Text style={styles.gameTitle}>{title}</Text>
            <View>
              <GameCardLabel genre={genre} platform={platform} />
            </View>
          </View>
        )}
      </Surface>
    </Pressable>
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
  },
});
