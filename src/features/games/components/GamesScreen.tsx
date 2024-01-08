import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getGames from '../api/getGames'
import GameCard from './GameCard'
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store/store';


function GamesScreen() {

    const selectedPlatform = useAppSelector((state: RootState) => state.selectPlatform.platform);
    const selectedCategory = useAppSelector((state: RootState) => state.selectCategory.category);
    const selectedSortBy = useAppSelector((state: RootState) => state.selectSortBy.sortBy);

    console.log(selectedPlatform, selectedCategory, selectedSortBy)
    const result = getGames(selectedPlatform, selectedCategory, selectedSortBy) || [];

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                    {
                        result && result.map((game: any) => {
                            return (
                                <View key={game.id}>
                                    <GameCard title={game.title} thumbnail={game.thumbnail} genre={game.genre} platform={game.platform}/>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default GamesScreen

const styles = StyleSheet.create({
    main: {
        backgroundColor:'#F4E8F1'
    }
})