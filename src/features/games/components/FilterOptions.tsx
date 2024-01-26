import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OptionChip from './OptionChip';
import CustomIcon from '../../../components/Icon/CustomIcon';

type IProps<T> = {
  title: string;
  optionItems: { label: string; value: string }[];
  onFilterChange: (value: string) => void;
  iconName: string;
  iconSize: number;
  iconColor: string;
};

const FilterOptions = <T,>({
  title,
  optionItems,
  onFilterChange,
  iconName,
  iconSize,
  iconColor,
}: IProps<T>) => {
  return (
    <View style={styles.main}>
      <View style={styles.categoryTitleContainer}>
        <CustomIcon name={iconName} size={iconSize} color={iconColor} />
        <Text style={styles.title}>{title}:</Text>
      </View>
      <View style={styles.container}>
        {optionItems.map((item) => {
          return (
            <View style={styles.chipContainer} key={`${title}_${item.label}`}>
              <OptionChip label={item.label} onFilterChange={onFilterChange} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FilterOptions;

const styles = StyleSheet.create({
  main: {
    margin: 20,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 20,
    padding: 4,
  },
  chipContainer: {
    margin: 4,
  },
});
