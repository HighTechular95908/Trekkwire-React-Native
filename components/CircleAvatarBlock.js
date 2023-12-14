import React from 'react';
import Images from '../config/Images';
import { Circle, CircleImage, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const CircleAvatarBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Circle bgColor={theme.colors.surface} size={64}>
      <CircleImage size={60} source={Images.Avatar} />
    </Circle>
  );
};

export default withTheme(CircleAvatarBlock);
