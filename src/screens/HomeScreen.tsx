import { StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../components/ScreenHeader'
import GamesScreen from '../features/games/components/GamesScreen'

type Props = {}

const HomeScreen = (props: Props) => {
  
  return (
    <View style={{marginTop:50}}>
      <ScreenHeader/>
      <GamesScreen/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})