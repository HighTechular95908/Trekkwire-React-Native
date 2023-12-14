import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as UploadImagePicker from '../custom-files/UploadImagePicker';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, useWindowDimensions } from 'react-native';

const BlankScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const myFunctionName = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.
    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const [Skills, setSkills] = React.useState(['en', 'fran']);
  const [pickerValue, setPickerValue] = React.useState('');
  const [stepperValue, setStepperValue] = React.useState('');
  const [testItem, setTestItem] = React.useState(['English', 'France']);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Text
        accessible={true}
        allowFontScaling={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.TextStyles(theme)['Text'],
          dimensions.width
        )}
      >
        {'SelectedUserEmail:'}
        {Constants['email']}
      </Text>
      <Utils.CustomCodeErrorBoundary>
        <UploadImagePicker.component />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
