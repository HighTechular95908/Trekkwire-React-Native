import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const ToastrBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color_7'],
          borderRadius: 10,
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
          paddingBottom: 12,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 12,
        },
        dimensions.width
      )}
    >
      <Touchable>
        <Icon
          color={theme.colors['Custom Color_2']}
          name={'MaterialIcons/info'}
          size={24}
        />
      </Touchable>

      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom Color_2'],
            fontFamily: 'Inter_400Regular',
            fontSize: 12,
            lineHeight: 18,
            paddingLeft: 18,
          },
          dimensions.width
        )}
      >
        {
          'We will send the OTP code to your email for \nsecurity in forgetting your password'
        }
      </Text>
    </View>
  );
};

export default withTheme(ToastrBlock);
