import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const LabelInputBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View>
      {/* Full name */}
      <Text accessible={true} allowFontScaling={true}>
        {'Full name\n'}
      </Text>
      {/* Full name */}
      <TextInput
        editable={true}
        keyboardType={'default'}
        placeholder={'Steve Jobs'}
        placeholderTextColor={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderBottomWidth: 1,
            borderColor: theme.colors['Light'],
            borderLeftWidth: 1,
            borderRadius: 10,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderWidth: 1,
            fontFamily: 'Poppins_400Regular',
            fontSize: 15,
            height: 48,
            marginTop: 5,
            paddingBottom: 8,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 8,
          },
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(LabelInputBlock);
