import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const TouchableTextBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <Touchable
      onPress={() => {
        try {
          navigation.navigate('Auth', { screen: 'LoginScreen' });
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <View>
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'center',
              color: theme.colors['Trekk2'],
              fontFamily: 'ADLaMDisplay_400Regular',
              fontSize: 18,
            }),
            dimensions.width
          )}
        >
          {'or log in to your account'}
        </Text>
      </View>
    </Touchable>
  );
};

export default withTheme(TouchableTextBlock);
