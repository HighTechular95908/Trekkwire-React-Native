import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const TouchableIconBlock = props => {
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
        <Icon name={'FontAwesome/photo'} size={24} />
      </View>
    </Touchable>
  );
};

export default withTheme(TouchableIconBlock);
