import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, useWindowDimensions } from 'react-native';

const ValidCheckTextBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Text
      accessible={true}
      allowFontScaling={true}
      style={StyleSheet.applyWidth(
        GlobalStyles.TextStyles(theme)['validCheckText'],
        dimensions.width
      )}
    >
      {null}
    </Text>
  );
};

export default withTheme(ValidCheckTextBlock);
