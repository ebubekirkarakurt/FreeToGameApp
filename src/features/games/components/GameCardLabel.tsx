import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomIcon from '../../../components/Icon/CustomIcon';

type GameCardLabelProps = {
  genre: string;
  platform: string;
};

const GameCardLabel = ({ genre, platform }: GameCardLabelProps) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <CustomIcon name="layers-triple" size={20} color="#BC0148" />
        <Text style={styles.txt}>{platform}</Text>
      </View>
      <View style={styles.container}>
        <CustomIcon name="shape" size={20} color="#BC0148" />
        <Text style={styles.txt}>{genre}</Text>
      </View>
    </View>
  );
};

export default GameCardLabel;

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        margin: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        padding:5
    }
});
