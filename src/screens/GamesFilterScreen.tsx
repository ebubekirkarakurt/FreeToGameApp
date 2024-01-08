import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FilterOptions from '../features/games/components/FilterOptions'
import { categoryItems, platformItems, sortByItems } from '../features/games/config'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setPlatform } from '../redux/reducer/selectPlatform'
import { setCategory } from '../redux/reducer/selectCategory'
import { setSortBy } from '../redux/reducer/selectSortBy'
import FilterScreenButtons from '../features/games/components/FilterScreenButtons'


function GamesFilterScreen() {

  const dispatch = useAppDispatch();

  const onPlatformChange = (newPlatform: string) => {
    dispatch(setPlatform(newPlatform))
  }
  const onCategoryChange = (newCategory: string) => {
    dispatch(setCategory(newCategory))
      
  }
  const onSortByChange = (newSortBy: string) => {
    dispatch(setSortBy(newSortBy))
  }

  return (
    <View style={styles.main}>
      <View>
        <FilterOptions title='Platform' optionItems={platformItems} onFilterChange={onPlatformChange}  />
        <FilterOptions title='Category' optionItems={categoryItems} onFilterChange={onCategoryChange} />
        <FilterOptions title='Sort By' optionItems={sortByItems} onFilterChange={onSortByChange} />
      </View>
      <View>
        <FilterScreenButtons/>
      </View>
    </View>
  )
}

export default GamesFilterScreen

const styles = StyleSheet.create({
  main: {
    marginTop:80,
    backgroundColor:'#ebd5e5',
    height: '90%',
    justifyContent: 'space-around',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    
  }
})