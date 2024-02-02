import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Chip } from 'react-native-paper';

type Props = {
  label: string;
  onFilterChange: (value: string) => void;
};

const OptionChip = ({ label, onFilterChange }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.main}>
      <Chip
        style={[
          styles.chipStyle,
          active ? { backgroundColor: '#BC0148' } : null,
        ]}
        mode={active ? 'flat' : 'outlined'}
        onTouchCancel={true}
        elevated={false}
        textStyle={[
          active ? { color: 'white' } : null,
          { padding: 2, fontSize: 16 },
        ]}
        onPress={() => {
          setActive(!active);
          onFilterChange(label.toLowerCase());
        }}
      >
        <Text>{label}</Text>
      </Chip>
    </View>
  );
};

export default OptionChip;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  chipStyle: {
    borderColor: '#BC0148',
    borderWidth: 0.5,
  },
});
