// This import is required if you are defining react components in this module.
import React from 'react';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.
import { StyleSheet, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';

export const component = () => {
  return (
    <View style={styles.container}>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};
export const showToast = (type, text1, text2, position) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
    position: position,
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 24,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
