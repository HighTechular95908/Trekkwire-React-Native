import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, Touchable, withTheme } from '@draftbit/ui';
import { Image, View, useWindowDimensions } from 'react-native';

const LabelPasswordBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
        dimensions.width
      )}
    >
      {/* Pasword Input */}
      <TextInput
        editable={true}
        onChangeText={newPaswordInputValue => {
          try {
            setTextInputValue(newPaswordInputValue);
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'Create a password'}
        placeholderTextColor={theme.colors['Light']}
        secureTextEntry={true}
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            borderColor: theme.colors['Custom Color_4'],
            borderLeftWidth: 1,
            borderRadius: 5,
            borderRightWidth: 1,
            borderTopWidth: 1,
            color: theme.colors['Custom Color_2'],
            fontFamily: 'Inter_400Regular',
            fontSize: 16,
            height: 52,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 8,
            paddingTop: 8,
            width: '100%',
          },
          dimensions.width
        )}
        value={textInputValue}
      />
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 56,
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            width: 48,
            zIndex: 1,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <Image
            resizeMode={'cover'}
            source={Images.Hide}
            style={StyleSheet.applyWidth(
              { height: 24, width: 24 },
              dimensions.width
            )}
          />
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(LabelPasswordBlock);
