import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const PrimaryButtonBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View>
      {/* View 2 */}
      <View>
        <Button
          onPress={() => {
            try {
              navigation.navigate('ScreenStack', { screen: 'ProfileScreen' });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Action Button3'],
            dimensions.width
          )}
          title={'Sign up'}
        />
      </View>
    </View>
  );
};

export default withTheme(PrimaryButtonBlock);
