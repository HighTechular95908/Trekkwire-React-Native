import React from 'react';
import { Checkbox, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const IconCheckboxBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [showNav, setShowNav] = React.useState(false);

  return (
    <Checkbox
      checkedIcon={'AntDesign/indent-left'}
      color={theme.colors['White']}
      onPress={newCheckboxValue => {
        try {
          setShowNav(newCheckboxValue);
        } catch (err) {
          console.error(err);
        }
      }}
      size={32}
      status={showNav}
      uncheckedColor={theme.colors['White']}
      uncheckedIcon={'AntDesign/indent-right'}
    />
  );
};

export default withTheme(IconCheckboxBlock);
