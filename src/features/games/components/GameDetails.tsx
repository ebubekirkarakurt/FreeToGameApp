import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Surface } from 'react-native-paper';
import CustomIcon from '../../../components/Icon/CustomIcon';

type Props = {
  item: Array<object>;
};

const GameDetails = ({ item }: Props) => {
  return (
    <Surface
      style={{ height: '100%', backgroundColor: '#f0e1ec' }}
      elevation={2}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.img}></Image>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={[styles.titleContainer, styles.btn]}>
          <Text style={{ fontSize: 18, padding: 2, marginRight: 5 }}>
            Play Now
          </Text>
          <CustomIcon name="play-box" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{item.short_description}</Text>
      <View style={styles.propertyContainer}>
        <Text style={styles.propertyTitle}>Properties: </Text>
        <Text style={styles.props}>Genre: {item.genre}</Text>
        <Text style={styles.props}>Platform: {item.platform}</Text>
        <Text style={styles.props}>Publisher: {item.publisher}</Text>
        <Text style={styles.props}>Developer: {item.developer}</Text>
        <Text style={styles.props}>Relaese Date: {item.release_date}</Text>
      </View>
    </Surface>
  );
};

export default GameDetails;

const styles = StyleSheet.create({
  img: {
    height: 250,
    flexWrap: 'nowrap',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#BC0148',
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: '#BC0148',
    borderWidth: 1,
  },
  description: {
    padding: 10,
    fontSize: 24,
  },
  propertyContainer: {
    padding: 10,
  },
  propertyTitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 5,
    color: '#BC0148',
  },
  props: {
    fontSize: 20,
    paddingBottom: 5,
  },
});
