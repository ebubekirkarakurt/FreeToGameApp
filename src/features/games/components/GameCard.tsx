import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type IGameCardProps = {
    title: string,
    thumbnail: string,
    genre: string,
    platform: string
}

function GameCard ({title, thumbnail, genre, platform} : IGameCardProps){
  return (
    <View style={[styles.gameCard, styles.shadow, styles.shadowAndroid]}>
            <Image style={styles.img} source={{ uri: thumbnail }} />
            <Text style={styles.gameTitle}>{title}</Text>
          <View style={styles.footer}>
                <Text>{platform}</Text>
                <Text>{genre}</Text>
            </View>
    </View>
  )
}   

export default GameCard

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
        borderRadius:10
    },
    img: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
    },
    gameTitle: {
        padding: 5,
        margin: 5,
        fontSize: 20,
        fontWeight: '600'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        margin:5
    },
    shadow: {
        
    },
    shadowAndroid: {
        shadowColor: 'black',
        elevation: 10
    }
})