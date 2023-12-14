import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Image, View, useWindowDimensions } from 'react-native';

const GoButtonBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { flex: 1, justifyContent: 'center', marginBottom: 40, marginTop: 20 },
        dimensions.width
      )}
    >
      <Touchable>
        <Image
          resizeMode={'cover'}
          source={Images.Ob2Button}
          style={StyleSheet.applyWidth(
            { height: 88, width: 88 },
            dimensions.width
          )}
        />
      </Touchable>
    </View>
  );
};

export default withTheme(GoButtonBlock);
