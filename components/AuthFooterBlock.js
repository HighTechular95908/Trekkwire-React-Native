import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const AuthFooterBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Trekk2'], height: 50 },
        dimensions.width
      )}
    />
  );
};

export default withTheme(AuthFooterBlock);
