import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Spacer, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FooterBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Trekk2'],
          flexDirection: 'row',
          height: 50,
          justifyContent: 'space-between',
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { justifyContent: 'center', paddingLeft: 10, paddingRight: 10 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'center',
              color: theme.colors['White'],
              fontFamily: 'ADLaMDisplay_400Regular',
              fontSize: 28,
            }),
            dimensions.width
          )}
        >
          {'Trekkwire'}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* TouchableButton */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderRadius: 12,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['White']}
              name={'MaterialIcons/facebook'}
              size={40}
              style={StyleSheet.applyWidth(
                { backgroundColor: 'rgba(0, 0, 0, 0)' },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* TouchableButton 2 */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderRadius: 12,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['White']}
              name={'FontAwesome/instagram'}
              size={40}
              style={StyleSheet.applyWidth(
                { backgroundColor: 'rgba(0, 0, 0, 0)' },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* TouchableButton 3 */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderRadius: 12,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['White']}
              name={'AntDesign/twitter'}
              size={40}
              style={StyleSheet.applyWidth(
                { backgroundColor: 'rgba(0, 0, 0, 0)' },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(FooterBlock);
