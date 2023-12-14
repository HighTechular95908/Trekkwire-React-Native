import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Image, View, useWindowDimensions } from 'react-native';

const TouchableButtonBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Touchable
      style={StyleSheet.applyWidth({ width: '31%' }, dimensions.width)}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: theme.colors['Border Color'],
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            height: 60,
            justifyContent: 'center',
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Google}
          style={StyleSheet.applyWidth(
            { height: 24, width: 24 },
            dimensions.width
          )}
        />
      </View>
    </Touchable>
  );
};

export default withTheme(TouchableButtonBlock);
