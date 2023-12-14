import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  Image,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const LandingScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer hasBottomSafeArea={false} hasTopSafeArea={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={Images.Man18396041280}
        style={StyleSheet.applyWidth(
          GlobalStyles.ImageBackgroundStyles(theme)['Image Background'],
          dimensions.width
        )}
      >
        {/* Header Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', height: 64, justifyContent: 'flex-end' },
            dimensions.width
          )}
        >
          {/* App Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.peoplebitDarkBlue,
                fontFamily: 'PTSerif_700Bold',
                fontSize: 32,
              },
              dimensions.width
            )}
          >
            {'TrekkWire'}
          </Text>
        </View>
        {/* Content Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexGrow: 0,
              flexShrink: 0,
              height: 270,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 40,
            },
            dimensions.width
          )}
        />
        {/* Footer Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              flex: 1,
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingLeft: 12,
              paddingRight: 12,
            },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.background,
                fontFamily: 'PTSerif_700Bold',
                fontSize: 28,
                lineHeight: 40,
                marginTop: 15,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Tour guides \non \ndemand'}
          </Text>
          {/* GoButton */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignSelf: 'center',
                flex: 1,
                justifyContent: 'center',
                marginBottom: 40,
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  if (Constants['islogin']) {
                    navigation.navigate('BottomTabNavigator', {
                      screen: 'HomeScreen',
                    });
                  } else {
                    navigation.navigate('Auth', { screen: 'LoginScreen' });
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Ob2Button}
                style={StyleSheet.applyWidth(
                  { height: 88, width: 88 },
                  dimensions.width
                )}
              />
            </Touchable>
          </View>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(LandingScreen);
