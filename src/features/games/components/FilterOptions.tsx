import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OptionChip from './OptionChip';

type IProps<T> = {
    title: string;
    optionItems: { label: string, value: string }[];
    onFilterChange: (value: string) => void,
};

const FilterOptions = <T,>({title, optionItems, onFilterChange}: IProps<T>) => {
  
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.container}>
                {
                    optionItems.map((item) => {
                        return (
                            <View style={styles.chipContainer} key={`${title}_${item.label}`}>
                                <OptionChip label={item.label} onFilterChange={onFilterChange}/>
                            </View>
                        )
                    })    
                }
            </View>
        </View>
    )
}

export default FilterOptions

const styles = StyleSheet.create({
    main: {
        margin:20,
    },
    container: {
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    title: {
        fontSize: 20,
        padding: 4
    },
    chipContainer: {
        margin: 4,        
    }
})