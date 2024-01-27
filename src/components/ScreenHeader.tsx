import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { useAppNavigation } from '../navigation/utils/useAppNavigation';

const ScreenHeader = () => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.placeholder} />
      <Text style={styles.headerTxt}>Free Games</Text>
      <View style={styles.filterBtnContainer}>
        <IconButton
          icon="filter-outline"
          size={25}
          iconColor="#BC0148"
          onPress={() => navigation.navigate('GamesFilterScreen')}
        />
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  filterBtnContainer: {
    alignItems: 'flex-end',
    flex: 0.3,
  },
  placeholder: {
    flex: 0.3,
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    textAlign: 'center',
    flex: 1,
  },
});
