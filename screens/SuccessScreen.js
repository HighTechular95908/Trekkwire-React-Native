import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const SuccessScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      navigation.navigate('Auth', { screen: 'LoginScreen' });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Primary'], justifyContent: 'center' },
        dimensions.width
      )}
    >
      <Touchable
        activeOpacity={0.8}
        disabledOpacity={0.8}
        onPress={() => {
          try {
            navigation.navigate('Auth', { screen: 'LoginScreen' });
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          { height: '100%', width: '100%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'center' },
            dimensions.width
          )}
        >
          {/* Logo */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.MedDelivered}
              style={StyleSheet.applyWidth(
                { height: 100, marginBottom: 30, width: 100 },
                dimensions.width
              )}
            />
          </View>
          {/* msg */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                lineHeight: 25,
                opacity: 0.95,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Successfully Registered! '}
          </Text>
        </View>
      </Touchable>
    </ScreenContainer>
  );
};

export default withTheme(SuccessScreen);
