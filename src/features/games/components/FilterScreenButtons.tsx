import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useAppNavigation } from '../../../navigation/utils/useAppNavigation';

const FilterScreenButtons = () => {
  const navigation = useAppNavigation();

  const onHandleClick = () => navigation.navigate('HomeScreen');

  return (
    <View style={styles.main}>
      <View style={styles.clearBtnContainer}>
        <Pressable style={styles.clearBtn} onPress={onHandleClick}>
          <AntDesign name="close" size={20} color="#BC0148" />
          <Text style={[styles.btnText, { color: '#BC0148' }]}>Clear</Text>
        </Pressable>
      </View>
      <View style={styles.filterBtnContainer}>
        <Pressable style={styles.filterBtn} onPress={onHandleClick}>
          <EvilIcons name="search" size={24} color="white" />
          <Text style={[styles.btnText, { color: 'white' }]}>Filter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FilterScreenButtons;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  clearBtnContainer: {
    flex: 0.4,
  },
  filterBtnContainer: {
    flex: 0.4,
  },
  clearBtn: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderColor: '#BC0148',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterBtn: {
    backgroundColor: '#BC0148',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});
