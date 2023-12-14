import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Divider, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const DividerBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Divider
      color={theme.colors['Divider']}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
          height: 2,
          width: '100%',
        }),
        dimensions.width
      )}
    />
  );
};

export default withTheme(DividerBlock);
