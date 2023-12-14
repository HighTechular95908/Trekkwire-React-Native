import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export const Select = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const options = [
    { label: 'Traveler', value: 'Traveler' },
    { label: 'Guide', value: 'Guide' },
  ];

  return (
    <View style={styles.container}>
      <DropDownPicker
        items={options}
        defaultValue={selectedValue}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownList}
        onChangeItem={item => setSelectedValue(item.value)}
        placeholder="Select an Account type"
        placeholderStyle={styles.placeholder}
        arrowColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    height: 40,
    width: 200,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    height: 40,
    width: 200,
  },
  dropdownList: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  placeholder: {
    color: '#999',
  },
});
