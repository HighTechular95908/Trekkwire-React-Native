import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const BackBtnBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'flex-start',
          backgroundColor: theme.colors['Trekk2'],
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
        },
        dimensions.width
      )}
    >
      {/* Back */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            width: 48,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            color={theme.colors['Trekk1']}
            name={'Ionicons/arrow-back-circle-outline'}
            size={30}
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(0, 0, 0, 0)' },
              dimensions.width
            )}
          />
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(BackBtnBlock);
