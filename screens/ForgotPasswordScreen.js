import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPasswordScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'] },
        dimensions.width
      )}
    >
      {/* AuthHeader */}
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
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text1'], {
              color: theme.colors['White'],
            }),
            dimensions.width
          )}
        >
          {'Forget Password'}
        </Text>
        {/* Blank */}
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
        />
      </View>
      {/* Disclaimer */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Custom Color_7'],
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
            paddingBottom: 12,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 12,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <Icon
            color={theme.colors['Custom Color_2']}
            name={'MaterialIcons/info'}
            size={24}
          />
        </Touchable>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              lineHeight: 18,
              paddingLeft: 18,
            },
            dimensions.width
          )}
        >
          {
            'We will send the OTP code to your email for \nsecurity in forgetting your password'
          }
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'flex-start',
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 30,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* LabelInput */}
        <View>
          {/* Email */}
          <Text accessible={true} allowFontScaling={true}>
            {'Email'}
          </Text>
          {/* Email */}
          <TextInput
            editable={true}
            keyboardType={'default'}
            placeholder={'Enter your Email'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Light'],
                borderLeftWidth: 1,
                borderRadius: 10,
                borderRightWidth: 1,
                borderTopWidth: 1,
                borderWidth: 1,
                fontFamily: 'Poppins_400Regular',
                fontSize: 15,
                height: 48,
                marginTop: 5,
                paddingBottom: 8,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 8,
              },
              dimensions.width
            )}
          />
        </View>
        {/* Submit */}
        <Button
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Trekk2'],
              borderRadius: 24,
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              height: 56,
              marginBottom: 40,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Send password reset instruction.'}
        />
      </KeyboardAwareScrollView>
      {/* AuthFooter */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors['Trekk2'], height: 50 },
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(ForgotPasswordScreen);
