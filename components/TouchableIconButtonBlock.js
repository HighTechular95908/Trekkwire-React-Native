import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const TouchableIconButtonBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const myFunctionName = (Variables, setGlobalVariableValue) => {
    console.log(Variables.showPlusAccount);
    if (Variables.showPlusAccount == true) {
      setGlobalVariableValue({
        key: 'showPlusAccount',
        value: false,
      });
      console.log(Variables.showPlusAccount);
    } else {
      setGlobalVariableValue({
        key: 'showPlusAccount',
        value: true,
      });
      console.log(Variables.showPlusAccount);
    }
    console.log(Variables.showPlusAccount);
  };

  const testFunciton = Variables => {
    console.log(Variables.testVar);
  };

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

export default withTheme(TouchableIconButtonBlock);
