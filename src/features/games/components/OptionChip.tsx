import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Chip } from 'react-native-paper'

type Props = {
    label: string
    onFilterChange: (value: string) => void
}

const OptionChip = ({ label, onFilterChange }: Props) => {
    const [active, setActive] = useState(false)
    
    return (
        <View style={styles.main}>
            <Chip
                style={styles.chipStyle}
                mode={active ? 'flat' : 'outlined'}
                textStyle={{padding:2, fontSize:16}}
                onPress={() => {
                        
                        onFilterChange(label.toLowerCase())
                }}
            >
                <Text>{label}</Text>
            </Chip>    
        </View>
  )
}

export default OptionChip

const styles = StyleSheet.create({
    main: {
        alignItems: 'center'
    },
    chipStyle: {
    }
})