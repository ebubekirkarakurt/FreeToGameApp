import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FilterOptions from '../features/games/components/FilterOptions';
import {
  categoryItems,
  platformItems,
  sortByItems,
} from '../features/games/config';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setPlatform } from '../redux/reducer/selectPlatform';
import { setCategory } from '../redux/reducer/selectCategory';
import { setSortBy } from '../redux/reducer/selectSortBy';
import FilterScreenButtons from '../features/games/components/FilterScreenButtons';
import { Surface } from 'react-native-paper';

function GamesFilterScreen() {
  const dispatch = useAppDispatch();

  const onPlatformChange = (newPlatform: string) => {
    dispatch(setPlatform(newPlatform));
  };
  const onCategoryChange = (newCategory: string) => {
    dispatch(setCategory(newCategory));
  };
  const onSortByChange = (newSortBy: string) => {
    dispatch(setSortBy(newSortBy));
  };

  return (
    <Surface style={styles.main} elevation={4}>
      <View style={{ flex: 0.9 }}>
        <FilterOptions
          title="Platform"
          optionItems={platformItems}
          onFilterChange={onPlatformChange}
          iconName="layers-triple"
          iconSize={21}
          iconColor="#BC0148"
        />
        <FilterOptions
          title="Category"
          optionItems={categoryItems}
          onFilterChange={onCategoryChange}
          iconName="shape"
          iconSize={21}
          iconColor="#BC0148"
        />
        <FilterOptions
          title="Sort By"
          optionItems={sortByItems}
          onFilterChange={onSortByChange}
          iconName="sort"
          iconSize={21}
          iconColor="#BC0148"
        />
      </View>
      <View>
        <FilterScreenButtons />
      </View>
    </Surface>
  );
}

export default GamesFilterScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ebd5e5',
    height: '90%',
    marginTop: 80,
    justifyContent: 'center',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
