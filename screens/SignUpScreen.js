import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as MyToast from '../custom-files/MyToast';
import SignUp from '../global-functions/SignUp';
import SignUpValidation from '../global-functions/SignUpValidation';
import confirmValidation from '../global-functions/confirmValidation';
import emailValidation from '../global-functions/emailValidation';
import nameValidation from '../global-functions/nameValidation';
import passwordValidation from '../global-functions/passwordValidation';
import phoneValidation from '../global-functions/phoneValidation';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CheckboxRow,
  Icon,
  ScreenContainer,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [email, setEmail] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [isValidConfirm, setIsValidConfirm] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidName, setIsValidName] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [password_r, setPassword_r] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [privacyCheck, setPrivacyCheck] = React.useState(false);

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'flex-start' },
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
          {'Sign Up'}
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

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flex: 0,
            justifyContent: 'flex-start',
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <Utils.CustomCodeErrorBoundary>
          <MyToast.component />
        </Utils.CustomCodeErrorBoundary>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              alignSelf: 'auto',
              flex: 0,
              height: '100%',
              justifyContent: 'flex-start',
              paddingBottom: 10,
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Auth', { screen: 'LoginScreen' });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View>
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    alignSelf: 'center',
                    color: theme.colors['Trekk2'],
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 18,
                  }),
                  dimensions.width
                )}
              >
                {'or log in to your account'}
              </Text>
            </View>
          </Touchable>
          {/* Full name input */}
          <View>
            {/* Full name */}
            <Text accessible={true} allowFontScaling={true}>
              {'Full name *\n'}
            </Text>
            {/* Full nameeetr */}
            <TextInput
              editable={true}
              keyboardType={'default'}
              onChangeText={newFullNameeetrValue => {
                try {
                  setFullName(newFullNameeetrValue);
                  const isValid = nameValidation(fullName);
                  if (isValid) {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_name',
                      value: '',
                    });
                    setIsValidName(true);
                  } else {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_name',
                      value: 'Name is Required',
                    });
                    setIsValidName(false);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Steve Jobs'}
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
              value={fullName}
            />
            {/* validCheckText */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['validCheckText'],
                dimensions.width
              )}
            >
              {Constants['ValidCheckText_name']}
            </Text>
          </View>
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Email input */}
          <View>
            {/* Email */}
            <Text accessible={true} allowFontScaling={true}>
              {'Email *\n'}
            </Text>
            {/* Email */}
            <TextInput
              editable={true}
              keyboardType={'default'}
              onChangeText={newEmailValue => {
                try {
                  setEmail(newEmailValue);
                  const isValid = emailValidation(email);
                  if (isValid) {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_email',
                      value: '',
                    });
                    setIsValidEmail(true);
                  } else {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_email',
                      value: 'Email Not Valid',
                    });
                    setIsValidEmail(false);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'you@example.com'}
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
              value={email}
            />
            {/* validCheckText */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['validCheckText'],
                dimensions.width
              )}
            >
              {Constants['ValidCheckText_email']}
            </Text>
          </View>
          {/* Spacer 2 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Phone input */}
          <View>
            {/* Phone */}
            <Text accessible={true} allowFontScaling={true}>
              {'Phone'}
            </Text>
            {/* Phone */}
            <TextInput
              editable={true}
              keyboardType={'default'}
              onChangeText={newPhoneValue => {
                try {
                  setPhone(newPhoneValue);
                  const isValid = phoneValidation(phone);
                  if (isValid) {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_phone',
                      value: '',
                    });
                    setIsValidPhoneNumber(true);
                  } else {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_phone',
                      value: 'Phone Number Not Valid',
                    });
                    setIsValidPhoneNumber(false);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'555-555-5555'}
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
              value={phone}
            />
            {/* validCheckText */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['validCheckText'],
                dimensions.width
              )}
            >
              {Constants['ValidCheckText_phone']}
            </Text>
          </View>
          {/* Spacer 3 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Password input */}
          <View>
            {/* Password */}
            <Text accessible={true} allowFontScaling={true}>
              {'Password * ( 6 characters minimum )'}
            </Text>
            {/* Password */}
            <TextInput
              editable={true}
              keyboardType={'default'}
              onChangeText={newPasswordValue => {
                try {
                  setPassword(newPasswordValue);
                  const isValid = passwordValidation(password);
                  if (isValid) {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_password',
                      value: '',
                    });
                    setIsValidPassword(true);
                  } else {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_password',
                      value: 'Not Valid',
                    });
                    setIsValidPassword(false);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Password'}
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
              value={password}
            />
            {/* validCheckText */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['validCheckText'],
                dimensions.width
              )}
            >
              {Constants['ValidCheckText_password']}
            </Text>
          </View>
          {/* Spacer 4 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Password input 2 */}
          <View>
            {/* Password */}
            <Text accessible={true} allowFontScaling={true}>
              {'Confirm Password'}
            </Text>
            {/* Password */}
            <TextInput
              editable={true}
              keyboardType={'default'}
              onChangeText={newPasswordValue => {
                try {
                  setPassword_r(newPasswordValue);
                  const isValid = confirmValidation(password, password_r);
                  if (isValid) {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_password_r',
                      value: '',
                    });
                    setIsValidConfirm(true);
                  } else {
                    setGlobalVariableValue({
                      key: 'ValidCheckText_password_r',
                      value: '',
                    });
                    setIsValidConfirm(true);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Password'}
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
              value={password_r}
            />
            {/* validCheckText */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['validCheckText'],
                dimensions.width
              )}
            >
              {Constants['ValidCheckText_password_r']}
            </Text>
          </View>
          <Spacer bottom={8} left={8} right={8} top={8} />
          <View>
            <CheckboxRow
              direction={'row-reverse'}
              label={'I accept terms & policy'}
              onPress={newCheckboxRowValue => {
                try {
                  setPrivacyCheck(newCheckboxRowValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              status={privacyCheck}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Trekk2'],
                  fontFamily: 'Agbalumo_400Regular',
                },
                dimensions.width
              )}
            />
          </View>
          {/* View 2 */}
          <View>
            {/* View 2 */}
            <View>
              <Button
                onPress={() => {
                  const handler = async () => {
                    try {
                      const isValid = SignUpValidation(
                        isValidName,
                        isValidEmail,
                        isValidPhoneNumber,
                        isValidPassword,
                        isValidConfirm,
                        privacyCheck
                      );
                      if (isValid) {
                        await SignUp(
                          setGlobalVariableValue,
                          fullName,
                          email,
                          password,
                          phone
                        );
                      } else {
                      }
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ButtonStyles(theme)['Action Button3'],
                  dimensions.width
                )}
                title={'Sign up'}
              />
            </View>
          </View>
          <Spacer bottom={8} left={8} right={8} top={8} />
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* TouchableButton */}
            <Touchable
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Border Color'],
                    borderLeftWidth: 1,
                    borderRadius: 24,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 60,
                    justifyContent: 'center',
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Google}
                  style={StyleSheet.applyWidth(
                    { height: 30, width: 30 },
                    dimensions.width
                  )}
                />
                <Spacer bottom={8} left={8} right={8} top={8} />
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text1'],
                      {
                        color: theme.colors['Trekk2'],
                        fontFamily: 'ADLaMDisplay_400Regular',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Sign In'}
                </Text>
              </View>
            </Touchable>
            {/* TouchableButton 2 */}
            <Touchable
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Border Color'],
                    borderLeftWidth: 1,
                    borderRadius: 24,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 60,
                    justifyContent: 'center',
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.FB}
                  style={StyleSheet.applyWidth(
                    { height: 30, width: 30 },
                    dimensions.width
                  )}
                />
                <Spacer bottom={8} left={8} right={8} top={8} />
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text1'],
                      {
                        color: theme.colors['Trekk2'],
                        fontFamily: 'ADLaMDisplay_400Regular',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Sign In'}
                </Text>
              </View>
            </Touchable>
          </View>

          <Touchable>
            {/* View 3 */}
            <View>
              {/* Disclaimer */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Secondary'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 13,
                    paddingBottom: 10,
                    paddingTop: 10,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {"Didn't receive confirmation\ninstructions?"}
              </Text>
            </View>
          </Touchable>
        </View>
      </KeyboardAwareScrollView>
      {/* AuthFooter 3 */}
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
                name={'FontAwesome/linkedin-square'}
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
    </ScreenContainer>
  );
};

export default withTheme(SignUpScreen);
