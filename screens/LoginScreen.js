import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as MyToast from '../custom-files/MyToast';
import Login from '../global-functions/Login';
import LoginValidation from '../global-functions/LoginValidation';
import emailValidation from '../global-functions/emailValidation';
import passwordValidation from '../global-functions/passwordValidation';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Checkbox,
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      setEmail(Constants['User']?.email);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [email, setEmail] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
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
            alignItems: 'center',
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
            GlobalStyles.TextStyles(theme)['Text1'],
            dimensions.width
          )}
        >
          {'Log In'}
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
          { backgroundColor: 'rgba(0, 0, 0, 0)', paddingBottom: 40 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <Utils.CustomCodeErrorBoundary>
          <MyToast.component />
        </Utils.CustomCodeErrorBoundary>
        {/* Container */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* LabelInput */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 40 }, dimensions.width)}
          >
            {/* Email */}
            <Text accessible={true} allowFontScaling={true}>
              {'Email\n'}
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
                      value: Constants['notValidEmail'],
                    });
                    setIsValidEmail(false);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a Email'}
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
                  paddingLeft: 20,
                  paddingRight: 20,
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
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* LabelInput 2 */}
          <>
            {showPassword ? null : (
              <View
                style={StyleSheet.applyWidth(
                  { justifyContent: 'center' },
                  dimensions.width
                )}
              >
                {/* Password */}
                <Text accessible={true} allowFontScaling={true}>
                  {'Password\n'}
                </Text>
                {/* LabelPassword */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Pasword Input */}
                  <TextInput
                    editable={true}
                    onChangeText={newPaswordInputValue => {
                      try {
                        setPassword(newPaswordInputValue);
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
                            value: Constants['notValidPassword'],
                          });
                          setIsValidPassword(false);
                        }
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    placeholder={'Enter a Password'}
                    placeholderTextColor={theme.colors['Light']}
                    secureTextEntry={true}
                    style={StyleSheet.applyWidth(
                      {
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Light'],
                        borderLeftWidth: 1,
                        borderRadius: 10,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 16,
                        height: 48,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 8,
                        paddingTop: 8,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                    value={password}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        height: 56,
                        justifyContent: 'center',
                        position: 'absolute',
                        right: 0,
                        width: 48,
                        zIndex: 1,
                      },
                      dimensions.width
                    )}
                  >
                    {/* IconCheckbox */}
                    <Checkbox
                      checkedIcon={'FontAwesome/eye-slash'}
                      color={theme.colors['Primary']}
                      onPress={newIconCheckboxValue => {
                        try {
                          setShowPassword(newIconCheckboxValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      size={32}
                      status={showPassword}
                      uncheckedColor={theme.colors['Primary']}
                      uncheckedIcon={'AntDesign/eyeo'}
                    />
                  </View>
                </View>
              </View>
            )}
          </>
          {/* validCheckText 2 */}
          <>
            {showPassword ? null : (
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
            )}
          </>
          {/* LabelInput 3 */}
          <>
            {!showPassword ? null : (
              <View
                style={StyleSheet.applyWidth(
                  { justifyContent: 'center' },
                  dimensions.width
                )}
              >
                {/* Password */}
                <Text accessible={true} allowFontScaling={true}>
                  {'Password\n'}
                </Text>
                {/* LabelPassword */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Pasword Input */}
                  <TextInput
                    editable={true}
                    onChangeText={newPaswordInputValue => {
                      try {
                        setPassword(newPaswordInputValue);
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
                            value: Constants['notValidPassword'],
                          });
                          setIsValidPassword(false);
                        }
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    placeholder={'Enter a Password'}
                    placeholderTextColor={theme.colors['Light']}
                    secureTextEntry={false}
                    style={StyleSheet.applyWidth(
                      {
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Light'],
                        borderLeftWidth: 1,
                        borderRadius: 10,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 16,
                        height: 48,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 8,
                        paddingTop: 8,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                    value={password}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        height: 56,
                        justifyContent: 'center',
                        position: 'absolute',
                        right: 0,
                        width: 48,
                        zIndex: 1,
                      },
                      dimensions.width
                    )}
                  >
                    {/* IconCheckbox */}
                    <Checkbox
                      checkedIcon={'FontAwesome/eye-slash'}
                      color={theme.colors['Primary']}
                      onPress={newIconCheckboxValue => {
                        try {
                          setShowPassword(newIconCheckboxValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      size={32}
                      status={showPassword}
                      uncheckedColor={theme.colors['Primary']}
                      uncheckedIcon={'AntDesign/eyeo'}
                    />
                  </View>
                </View>
              </View>
            )}
          </>
          {/* validCheckText */}
          <>
            {!showPassword ? null : (
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
            )}
          </>
          {/* Login */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 25,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Auth', {
                    screen: 'ForgotPasswordScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Trekk2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Forgot Password?'}
              </Text>
            </Touchable>
          </View>
          {/* Continue with Email */}
          <Button
            onPress={() => {
              const handler = async () => {
                console.log('Continue with Email ON_PRESS Start');
                let error = null;
                try {
                  console.log('Start ON_PRESS:0 CUSTOM_FUNCTION');
                  const isValid = LoginValidation(
                    isValidEmail,
                    isValidPassword
                  );
                  console.log('Complete ON_PRESS:0 CUSTOM_FUNCTION', {
                    isValid,
                  });
                  console.log('Start ON_PRESS:1 IF');
                  if (isValid) {
                    const isSuccess = await Login(
                      navigation,
                      setGlobalVariableValue,
                      email,
                      password
                    );
                    if (isSuccess) {
                      if (isSuccess) {
                        navigation.navigate('BottomTabNavigator', {
                          screen: 'HomeScreen',
                        });
                      }
                    } else {
                    }
                  } else {
                  }
                  console.log('Complete ON_PRESS:1 IF');
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'Continue with Email ON_PRESS Complete',
                  error ? { error } : 'no error'
                );
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Trekk2'],
                borderRadius: 24,
                fontFamily: 'System',
                fontSize: 17,
                fontWeight: '700',
                height: 56,
                marginTop: 35,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Continue with Email'}
          />
          {/* continue with */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 25,
              },
              dimensions.width
            )}
          >
            <Divider
              color={theme.colors['Custom Color_14']}
              style={StyleSheet.applyWidth(
                { height: 1, width: 60 },
                dimensions.width
              )}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Light'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Or continue with'}
            </Text>
            <Divider
              color={theme.colors['Custom Color_14']}
              style={StyleSheet.applyWidth(
                { height: 1, width: 60 },
                dimensions.width
              )}
            />
          </View>
          {/* Google Login */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Trekk2'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color_2'],
                  borderLeftWidth: 1,
                  borderRadius: 24,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'center',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.IconGoogle}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Continue with Google'}
              </Text>
            </View>
          </Touchable>
          {/* Apple Login */}
          <Touchable
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Trekk2'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color_2'],
                  borderLeftWidth: 1,
                  borderRadius: 24,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'center',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.IconApple}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Continue with Apple'}
              </Text>
            </View>
          </Touchable>
          {/* Sign Up */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 45,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  opacity: 0.64,
                },
                dimensions.width
              )}
            >
              {'Don’t have an account? '}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Auth', { screen: 'SignUpScreen' });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Trekk2'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {' Sign Up'}
              </Text>
            </Touchable>
          </View>
        </View>
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

export default withTheme(LoginScreen);
