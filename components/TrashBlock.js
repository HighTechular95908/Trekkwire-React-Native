import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const TrashBlock = props => {
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
    <Touchable>
      <View>
        <Icon color={theme.colors['Error']} name={'Entypo/trash'} size={24} />
      </View>
    </Touchable>
  );
};

export default withTheme(TrashBlock);
