import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import getGames from '../api/getGames';
import GameCard from './GameCard';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store/store';
import { Surface } from 'react-native-paper';

function GamesScreen() {
  const selectedPlatform = useAppSelector(
    (state: RootState) => state.selectPlatform.platform,
  );
  const selectedCategory = useAppSelector(
    (state: RootState) => state.selectCategory.category,
  );
  const selectedSortBy = useAppSelector(
    (state: RootState) => state.selectSortBy.sortBy,
  );

  const { result } =
    getGames(selectedPlatform, selectedCategory, selectedSortBy) || [];

  const isLoading = getGames(
    selectedPlatform,
    selectedCategory,
    selectedSortBy,
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <Surface elevation={4} style={{ backgroundColor: '#f0e1ec' }}>
          <View>
            {result &&
              result.map((game: any) => {
                return (
                  <View key={game.id}>
                    <GameCard
                      isLoading={isLoading.isLoading}
                      item={game}
                      title={game.title}
                      thumbnail={game.thumbnail}
                      genre={game.genre}
                      platform={game.platform}
                    />
                  </View>
                );
              })}
          </View>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GamesScreen;

const styles = StyleSheet.create({});
