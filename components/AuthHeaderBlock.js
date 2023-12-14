import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const AuthHeaderBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'flex-start',
          backgroundColor: theme.colors['Trekk2'],
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
        },
        dimensions.width
      )}
    >
      {/* Back */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            width: 48,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            color={theme.colors['Trekk1']}
            name={'Ionicons/arrow-back-circle-outline'}
            size={30}
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(0, 0, 0, 0)' },
              dimensions.width
            )}
          />
        </Touchable>
      </View>
      {/* Screen Heading */}
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text1'], {
            color: theme.colors['White'],
          }),
          dimensions.width
        )}
      >
        {'Sign Up'}
      </Text>
      {/* Blank */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            width: 48,
          },
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(AuthHeaderBlock);
