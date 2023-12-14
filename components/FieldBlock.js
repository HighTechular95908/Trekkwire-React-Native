import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FieldBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const myFunctionName = (Variables, setGlobalVariableValue) => {
    console.log(Variables.showPlusAccount);
    if (Variables.showPlusAccount == true) {
      setGlobalVariableValue({
        key: 'showPlusAccount',
        value: false,
      });
      console.log(Variables.showPlusAccount);
    } else {
      setGlobalVariableValue({
        key: 'showPlusAccount',
        value: true,
      });
      console.log(Variables.showPlusAccount);
    }
    console.log(Variables.showPlusAccount);
  };

  const testFunciton = Variables => {
    console.log(Variables.testVar);
  };

  const [facebook, setFacebook] = React.useState('');

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.background,
          borderBottomWidth: 2,
          borderColor: theme.colors.primary,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          paddingBottom: 8,
          paddingLeft: 14,
          paddingRight: 16,
          paddingTop: 8,
        },
        dimensions.width
      )}
    >
      {/* Label */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.medium,
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '600',
          },
          dimensions.width
        )}
      >
        {'FaceBook'}
      </Text>
      {/* facebook */}
      <TextInput
        autoComplete={'email'}
        keyboardAppearance={'default'}
        keyboardType={'email-address'}
        onChangeText={newFacebookValue => {
          try {
            setFacebook(newFacebookValue);
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'https://www.facebook.com/yourprofile'}
        placeholderTextColor={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'System',
            fontSize: 16,
            fontWeight: '400',
            marginTop: 6,
            paddingBottom: 3,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 3,
          },
          dimensions.width
        )}
        underlineColorAndroid={theme.colors['Trekk8']}
        value={facebook}
      />
    </View>
  );
};

export default withTheme(FieldBlock);
