import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import { CircleImage, Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const AvatarUploadBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Touchable
      onPress={() => {
        const handler = async () => {
          try {
            await openCameraUtil({
              mediaTypes: 'Images',
              allowsEditing: false,
              cameraType: 'back',
              videoMaxDuration: undefined,
              quality: 0.2,
            });
          } catch (err) {
            console.error(err);
          }
        };
        handler();
      }}
    >
      <View>
        <CircleImage size={180} source={Images.Avatar} />
        <Icon
          color={theme.colors.primary}
          name={'MaterialIcons/camera-alt'}
          size={42}
          style={StyleSheet.applyWidth(
            { bottom: 0, position: 'absolute', right: 0 },
            dimensions.width
          )}
        />
      </View>
    </Touchable>
  );
};

export default withTheme(AvatarUploadBlock);
