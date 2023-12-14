import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SearchBarBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          alignSelf: 'flex-start',
          backgroundColor: theme.colors['Custom Color'],
          borderBottomWidth: 1,
          borderColor: theme.colors['Divider'],
          borderLeftWidth: 1,
          borderRadius: 32,
          borderRightWidth: 1,
          borderTopWidth: 1,
          borderWidth: 2,
          flexDirection: 'row',
          height: 44,
          paddingLeft: 5,
        },
        dimensions.width
      )}
    >
      {/* View 4 */}
      <View style={StyleSheet.applyWidth({ width: '8%' }, dimensions.width)}>
        <Icon
          color={theme.colors['Strong']}
          name={'EvilIcons/search'}
          size={24}
          style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
        />
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { marginRight: 3, width: '30%' },
          dimensions.width
        )}
      >
        <TextInput
          autoCapitalize={'none'}
          onChangeText={newTextInputValue => {
            try {
              setTextInputValue(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Search by city'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              width: '100%',
            },
            dimensions.width
          )}
          value={textInputValue}
        />
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'center',
            borderLeftWidth: 2,
            justifyContent: 'center',
            width: '8%',
          },
          dimensions.width
        )}
      >
        {/* Icon 2 */}
        <Icon
          color={theme.colors['Strong']}
          name={'FontAwesome/user'}
          size={24}
          style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
        />
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          { marginRight: 3, width: '30%' },
          dimensions.width
        )}
      >
        {/* Text Input 2 */}
        <TextInput
          autoCapitalize={'none'}
          onChangeText={newTextInput2Value => {
            try {
              setTextInputValue(newTextInput2Value);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Travelers'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              width: '100%',
            },
            dimensions.width
          )}
          value={textInputValue}
        />
      </View>

      <Touchable
        style={StyleSheet.applyWidth(
          { height: '100%', width: '23%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Trekk2'],
              borderBottomRightRadius: 32,
              borderTopRightRadius: 32,
              height: '100%',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                alignSelf: 'center',
                color: theme.colors['White'],
              }),
              dimensions.width
            )}
          >
            {'Search'}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(SearchBarBlock);
