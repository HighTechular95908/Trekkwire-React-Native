import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const component = ({ items, color }) => {
  return (
    <>
      {items.map((text, index) => (
        <TouchableOpacity
          key={index}
          style={{
            margin: 5,
            borderRadius: 32,
            padding: 5,
            height: 32,
            backgroundColor: color,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              backgroundColor: color,
            }}
          >
            {text}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
