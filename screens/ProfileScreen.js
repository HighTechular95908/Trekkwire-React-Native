import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as MyToast from '../custom-files/MyToast';
import GuideProfileCreate from '../global-functions/GuideProfileCreate';
import GuideProfileUpdate from '../global-functions/GuideProfileUpdate';
import PasswordUpdate from '../global-functions/PasswordUpdate';
import Update from '../global-functions/Update';
import UploadImage from '../global-functions/UploadImage';
import confirmValidation from '../global-functions/confirmValidation';
import emailValidation from '../global-functions/emailValidation';
import nameValidation from '../global-functions/nameValidation';
import passwordValidation from '../global-functions/passwordValidation';
import phoneValidation from '../global-functions/phoneValidation';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  CheckboxRow,
  Circle,
  CircleImage,
  Icon,
  MultiSelectPicker,
  ScreenContainer,
  Spacer,
  Switch,
  TabView,
  TabViewItem,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const myFunctionName = (Variables, setGlobalVariableValue) => {
    console.log(Variables.showPlusAccount);
    if (Variables.showPlusAccount == true) {
      setGlobalVariableValue({
        key: 'showPlusAccount',
        value: false,
      });
      console.log(Variables.showPlusAccount);
    } else {
      setGlobalVariableValue({
        key: 'showPlusAccount',
        value: true,
      });
      console.log(Variables.showPlusAccount);
    }
    console.log(Variables.showPlusAccount);
  };

  const testFunciton = Variables => {
    console.log(Variables.testVar);
  };

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      setFullName(Constants['User']?.fullName);
      setEmail(Constants['User']?.email);
      setPhone(Constants['User']?.phone);
      undefined;
      setFacebook(Constants['Guide']?.facebook);
      setYoutube(Constants['Guide']?.youtube);
      setLinkedin(Constants['Guide']?.linkedin);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [asGuide, setAsGuide] = React.useState(false);
  const [asTraveler, setAsTraveler] = React.useState(true);
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [languages, setLanguages] = React.useState([]);
  const [linkedin, setLinkedin] = React.useState('');
  const [password_cur, setPassword_cur] = React.useState('');
  const [password_new, setPassword_new] = React.useState('');
  const [password_new_r, setPassword_new_r] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const [selectedLanguage, setSelectedLanguage] = React.useState([]);
  const [selectedSkill, setSelectedSkill] = React.useState([]);
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [showEditPassword, setShowEditPassword] = React.useState(false);
  const [skills, setSkills] = React.useState(['en', 'fn', 'ja']);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [temp, setTemp] = React.useState('');
  const [youtube, setYoutube] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
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
          {'Profile'}
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

      <TabView
        activeColor={theme.colors.primary}
        indicatorColor={theme.colors.primary}
        initialTabIndex={Constants['Tab']}
        keyboardDismissMode={'auto'}
        pressColor={theme.colors.primary}
        style={StyleSheet.applyWidth(
          { height: '100%', width: '100%' },
          dimensions.width
        )}
        swipeEnabled={true}
        tabBarPosition={'top'}
      >
        {/* Profile */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
              { height: '100%', width: '100%' }
            ),
            dimensions.width
          )}
          title={'Profile'}
        >
          <Utils.CustomCodeErrorBoundary>
            <MyToast.component />
          </Utils.CustomCodeErrorBoundary>
          {/* SignUp */}
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
            {/* UploadView */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                },
                dimensions.width
              )}
            >
              {/* AvatarUpload */}
              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      const pickedImage = await openImagePickerUtil({
                        mediaTypes: 'All',
                        allowsEditing: false,
                        quality: 0.2,
                      });

                      setGlobalVariableValue({
                        key: 'imageUri',
                        value: pickedImage,
                      });
                      await UploadImage(
                        setGlobalVariableValue,
                        pickedImage,
                        Constants['User']?.id
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                <View>
                  <Circle
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.CircleStyles(theme)['Circle'],
                        {
                          backgroundColor: theme.colors['Trekk2'],
                          borderColor: theme.colors['Trekk2'],
                          borderWidth: 1,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <CircleImage
                      size={180}
                      source={{ uri: `${Constants['imageUri']}` }}
                      style={StyleSheet.applyWidth(
                        { height: 100, width: 100 },
                        dimensions.width
                      )}
                    />
                  </Circle>
                  <Icon
                    color={theme.colors['App Green']}
                    name={'MaterialIcons/camera-alt'}
                    size={42}
                    style={StyleSheet.applyWidth(
                      { bottom: -5, position: 'absolute', right: -10 },
                      dimensions.width
                    )}
                  />
                </View>
              </Touchable>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'stretch',
                  flex: 0,
                  height: '100%',
                  justifyContent: 'flex-start',
                  paddingBottom: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              {/* Full Name */}
              <View>
                {/* FullName */}
                <Text accessible={true} allowFontScaling={true}>
                  {'Full Name *'}
                </Text>
                {/* FullName */}
                <TextInput
                  editable={true}
                  keyboardType={'default'}
                  onChangeText={newFullNameValue => {
                    try {
                      setFullName(newFullNameValue);
                      const isValid = nameValidation(fullName);
                      if (isValid) {
                        setGlobalVariableValue({
                          key: 'isValidName',
                          value: true,
                        });
                        setGlobalVariableValue({
                          key: 'ValidCheckText_name',
                          value: '',
                        });
                      } else {
                        setGlobalVariableValue({
                          key: 'isValidName',
                          value: false,
                        });
                        setGlobalVariableValue({
                          key: 'ValidCheckText_name',
                          value: Constants['notValidName'],
                        });
                      }
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter your fullname'}
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
                {/* isValid text */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Error'],
                    }),
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
                          key: 'isValidEmail',
                          value: true,
                        });
                        setGlobalVariableValue({
                          key: 'ValidCheckText_email',
                          value: '',
                        });
                      } else {
                        setGlobalVariableValue({
                          key: 'isValidEmail',
                          value: false,
                        });
                        setGlobalVariableValue({
                          key: 'ValidCheckText_email',
                          value: Constants['notValidEmail'],
                        });
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
                  {'Phone *'}
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
                          key: 'isValidPhoneNumber',
                          value: true,
                        });
                        setGlobalVariableValue({
                          key: 'ValidCheckText_phone',
                          value: '',
                        });
                      } else {
                        setGlobalVariableValue({
                          key: 'isValidPhoneNumber',
                          value: false,
                        });
                        setGlobalVariableValue({
                          key: 'ValidCheckText_phone',
                          value: Constants['notValidPhone'],
                        });
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
              {/* View 2 */}
              <View>
                {/* View 2 */}
                <View>
                  <Button
                    onPress={() => {
                      const handler = async () => {
                        try {
                          await Update(
                            Variables,
                            setGlobalVariableValue,
                            fullName,
                            email,
                            phone,
                            Constants['User']?.id,
                            Constants['User']?.email
                          );
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
                    title={'Update'}
                  />
                </View>
              </View>

              <View>
                <CheckboxRow
                  direction={'row-reverse'}
                  label={'Edit Password?'}
                  onPress={newCheckboxRowValue => {
                    try {
                      setShowEditPassword(newCheckboxRowValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  status={showEditPassword}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
                    dimensions.width
                  )}
                />
              </View>
              {/* EditPasswordView */}
              <>
                {!showEditPassword ? null : (
                  <View>
                    {/* Password input */}
                    <View>
                      {/* Password */}
                      <Text accessible={true} allowFontScaling={true}>
                        {password_cur}
                      </Text>
                      {/* Password 3 */}
                      <Text accessible={true} allowFontScaling={true}>
                        {password_new}
                      </Text>
                      {/* Password 2 */}
                      <Text accessible={true} allowFontScaling={true}>
                        {password_new_r}
                      </Text>
                    </View>
                    {/* Password input 4 */}
                    <View>
                      {/* Password */}
                      <Text accessible={true} allowFontScaling={true}>
                        {'Current Password'}
                      </Text>
                      {/* Password */}
                      <TextInput
                        editable={true}
                        keyboardType={'default'}
                        onChangeText={newPasswordValue => {
                          try {
                            setPassword_cur(newPasswordValue);
                            const isValid = passwordValidation(password_cur);
                            if (isValid) {
                              setGlobalVariableValue({
                                key: 'ValidCheckText_pass_cur',
                                value: '',
                              });
                              setGlobalVariableValue({
                                key: 'isValidPassword_cur',
                                value: true,
                              });
                            } else {
                              setGlobalVariableValue({
                                key: 'ValidCheckText_pass_cur',
                                value: Constants['notValidPass_cur'],
                              });
                              setGlobalVariableValue({
                                key: 'isValidPassword_cur',
                                value: false,
                              });
                            }
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'current password'}
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
                        value={password_cur}
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
                        {Constants['ValidCheckText_pass_cur']}
                      </Text>
                    </View>
                    {/* Password input 2 */}
                    <View>
                      {/* Password */}
                      <Text accessible={true} allowFontScaling={true}>
                        {'New Password'}
                      </Text>
                      {/* Password */}
                      <TextInput
                        editable={true}
                        keyboardType={'default'}
                        onChangeText={newPasswordValue => {
                          try {
                            setPassword_new(newPasswordValue);
                            const isValid = passwordValidation(password_new);
                            if (isValid) {
                              setGlobalVariableValue({
                                key: 'ValidCheckText_pass_new',
                                value: '',
                              });
                              setGlobalVariableValue({
                                key: 'isValidPassword_new',
                                value: true,
                              });
                            } else {
                              setGlobalVariableValue({
                                key: 'ValidCheckText_pass_new',
                                value: Constants['notValidPass_new'],
                              });
                              setGlobalVariableValue({
                                key: 'isValidPassword_new',
                                value: false,
                              });
                            }
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'new password'}
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
                        value={password_new}
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
                        {Constants['ValidCheckText_pass_new']}
                      </Text>
                    </View>
                    {/* Password input 3 */}
                    <View>
                      {/* Password */}
                      <Text accessible={true} allowFontScaling={true}>
                        {'Confirm New Password'}
                      </Text>
                      {/* Password */}
                      <TextInput
                        editable={true}
                        keyboardType={'default'}
                        onChangeText={newPasswordValue => {
                          try {
                            setPassword_new_r(newPasswordValue);
                            const isValid = confirmValidation(
                              password_new,
                              password_new_r
                            );
                            if (isValid) {
                              setGlobalVariableValue({
                                key: 'ValidCheckText_password_r',
                                value: '',
                              });
                              setGlobalVariableValue({
                                key: 'isValidConfirm',
                                value: true,
                              });
                            } else {
                              setGlobalVariableValue({
                                key: 'ValidCheckText_password_r',
                                value: '',
                              });
                              setGlobalVariableValue({
                                key: 'isValidConfirm',
                                value: true,
                              });
                            }
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'confirm new password'}
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
                        value={password_new_r}
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
                      <Spacer bottom={8} left={8} right={8} top={8} />
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          { textAlign: 'right' },
                          dimensions.width
                        )}
                      >
                        {'(6 characters minimum)'}
                      </Text>

                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row-reverse' },
                          dimensions.width
                        )}
                      >
                        {/* Button 2 */}
                        <Button
                          onPress={() => {
                            const handler = async () => {
                              try {
                                await PasswordUpdate(
                                  password_cur,
                                  password_new,
                                  password_new_r,
                                  Constants['User']?.id,
                                  Constants['isValidPassword_cur'],
                                  Constants['isValidPassword_new'],
                                  Constants['isValidConfirm']
                                );
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          }}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ButtonStyles(theme)[
                                'Action Button3'
                              ],
                              { textAlign: 'auto', width: '50%' }
                            ),
                            dimensions.width
                          )}
                          title={'Update'}
                        />
                      </View>
                    </View>
                  </View>
                )}
              </>
              <Spacer bottom={8} left={8} right={8} top={8} />
            </View>
          </KeyboardAwareScrollView>
        </TabViewItem>
        {/* Accounts */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
              { paddingLeft: 10, paddingRight: 10, paddingTop: 30 }
            ),
            dimensions.width
          )}
          title={'Accounts'}
        >
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row-reverse',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            {/* TouchableButton */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await GuideProfileUpdate(
                      setGlobalVariableValue,
                      Constants['User']?.id
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth({ width: '20%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Trekk2'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Border Color'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 40,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['White']}
                  name={'FontAwesome/edit'}
                  size={30}
                />
              </View>
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'auto',
                  backgroundColor: [
                    {
                      minWidth: Breakpoints.Mobile,
                      value: theme.colors['Light'],
                    },
                    {
                      minWidth: Breakpoints.Mobile,
                      value: Constants['travelerColor'],
                    },
                  ],
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  opacity: 1,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              {/* CircleAvatar 2 */}
              <Circle
                bgColor={theme.colors.surface}
                size={64}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['White'],
                    borderColor: theme.colors['Light'],
                    borderWidth: 1,
                    flexDirection: 'row',
                  },
                  dimensions.width
                )}
              >
                <CircleImage
                  size={60}
                  source={{ uri: `${Constants['imageUri']}` }}
                />
              </Circle>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    alignSelf: 'center',
                    color: theme.colors['Trekk2'],
                    fontFamily: 'Aclonica_400Regular',
                    fontSize: 20,
                    marginLeft: 20,
                  }),
                  dimensions.width
                )}
              >
                {'Traveler'}
              </Text>
              <Switch
                activeThumbColor={theme.colors['Trekk2']}
                inactiveThumbColor={theme.colors['Trekk2']}
                onValueChange={newSwitchValue => {
                  try {
                    setAsTraveler(newSwitchValue);
                    if (newSwitchValue) {
                      setAsGuide(false);
                      setGlobalVariableValue({
                        key: 'guideColor',
                        value: '#FFFFFFFF',
                      });
                      setGlobalVariableValue({
                        key: 'travelerColor',
                        value: '#A5ADB7FF',
                      });
                    } else {
                      setAsGuide(true);
                      setGlobalVariableValue({
                        key: 'guideColor',
                        value: '#A5ADB7FF',
                      });
                      setGlobalVariableValue({
                        key: 'travelerColor',
                        value: '#FFFFFFFF',
                      });
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { height: 30, width: 60 },
                  dimensions.width
                )}
                value={asTraveler}
              />
              <Touchable>
                <View>
                  <Icon
                    color={theme.colors['Error']}
                    name={'Entypo/trash'}
                    size={24}
                  />
                </View>
              </Touchable>
            </View>
            <>
              {!Constants['isGuide'] ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'auto',
                      backgroundColor: [
                        {
                          minWidth: Breakpoints.Mobile,
                          value: theme.colors['White'],
                        },
                        {
                          minWidth: Breakpoints.Mobile,
                          value: Constants['guideColor'],
                        },
                      ],
                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* CircleAvatar 2 */}
                  <Circle
                    bgColor={theme.colors.surface}
                    size={64}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['White'],
                        borderColor: theme.colors['Light'],
                        flexDirection: 'row',
                      },
                      dimensions.width
                    )}
                  >
                    <CircleImage
                      size={60}
                      source={{ uri: `${Constants['imageUri']}` }}
                    />
                  </Circle>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'center',
                          color: theme.colors['Trekk2'],
                          fontFamily: 'Aclonica_400Regular',
                          fontSize: 20,
                          marginLeft: 20,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'  Guide   '}
                  </Text>
                  {/* Switch 2 */}
                  <Switch
                    activeThumbColor={theme.colors['Trekk2']}
                    inactiveThumbColor={theme.colors['Trekk2']}
                    onValueChange={newSwitch2Value => {
                      try {
                        setAsGuide(newSwitch2Value);
                        if (newSwitch2Value) {
                          setAsTraveler(false);
                          setGlobalVariableValue({
                            key: 'travelerColor',
                            value: '#FFFFFF',
                          });
                          setGlobalVariableValue({
                            key: 'guideColor',
                            value: '#A5ADB7FF',
                          });
                        } else {
                          setAsTraveler(true);
                          setGlobalVariableValue({
                            key: 'travelerColor',
                            value: '#A5ADB7FF',
                          });
                          setGlobalVariableValue({
                            key: 'guideColor',
                            value: '#FFFFFFFF',
                          });
                        }
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { height: 30, width: 60 },
                      dimensions.width
                    )}
                    value={asGuide}
                  />
                  {/* Trash */}
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'isGuide',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View>
                      <Icon
                        color={theme.colors['Error']}
                        name={'Entypo/trash'}
                        size={24}
                      />
                    </View>
                  </Touchable>
                </View>
              )}
            </>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'center',
                  alignSelf: 'auto',
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                },
                dimensions.width
              )}
            >
              {/* TouchableButton 2 */}
              <>
                {Constants['isGuide'] ? null : (
                  <Touchable
                    onPress={() => {
                      const handler = async () => {
                        try {
                          await GuideProfileCreate(
                            setGlobalVariableValue,
                            Constants['User']?.id
                          );
                          setGlobalVariableValue({
                            key: 'isGuide',
                            value: true,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
                    }}
                    style={StyleSheet.applyWidth(
                      { width: '33%' },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['Trekk2'],
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Border Color'],
                          borderLeftWidth: 1,
                          borderRadius: 20,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          flexDirection: 'column',
                          height: 40,
                          justifyContent: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['White']}
                        name={'AntDesign/addusergroup'}
                        size={30}
                      />
                    </View>
                  </Touchable>
                )}
              </>
            </View>
          </View>
          <Utils.CustomCodeErrorBoundary>
            <MyToast.component />
          </Utils.CustomCodeErrorBoundary>
        </TabViewItem>
        {/* As a Guide */}
        <>
          {!Constants['isGuide'] ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                  { height: '100%', width: '100%' }
                ),
                dimensions.width
              )}
              title={'As a Guide'}
            >
              {/* SignUp */}
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
                {/* UploadView */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 20,
                    },
                    dimensions.width
                  )}
                >
                  <View>
                    <Circle
                      style={StyleSheet.applyWidth(
                        GlobalStyles.CircleStyles(theme)['Circle'],
                        dimensions.width
                      )}
                    >
                      <CircleImage
                        size={180}
                        source={{ uri: `${Constants['imageUri']}` }}
                        style={StyleSheet.applyWidth(
                          { height: 100, width: 100 },
                          dimensions.width
                        )}
                      />
                    </Circle>
                  </View>
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'stretch',
                      flex: 0,
                      justifyContent: 'flex-start',
                      paddingBottom: 10,
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Spacer bottom={8} left={8} right={8} top={8} />
                  {/* Email input */}
                  <View>
                    {/* Email */}
                    <Text accessible={true} allowFontScaling={true}>
                      {'Email\n'}
                    </Text>
                    {/* Email */}
                    <TextInput
                      editable={true}
                      keyboardType={'default'}
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
                    />
                  </View>
                  {/* Spacer 2 */}
                  <Spacer bottom={8} left={8} right={8} top={8} />
                  {/* View 2 */}
                  <View>
                    {/* View 2 */}
                    <View>
                      <Button
                        onPress={() => {
                          try {
                            navigation.navigate('ScreenStack');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ButtonStyles(theme)['Action Button3'],
                          dimensions.width
                        )}
                        title={'Connect with Stripe'}
                      />
                    </View>
                  </View>
                  <Spacer bottom={8} left={8} right={8} top={8} />
                  {/* GuideInfo */}
                  <View>
                    {/* tab */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingLeft: 16,
                          paddingRight: 16,
                          paddingTop: 16,
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Skill */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '30%' },
                          dimensions.width
                        )}
                      >
                        {/* Active */}
                        <>
                          {!(selectedTab === 'tab1') ? null : (
                            <Button
                              icon={'Ionicons/call-outline'}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['Trekk2'],
                                  borderRadius: 6,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 13,
                                  textAlign: 'center',
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                              title={'Skill'}
                            />
                          )}
                        </>
                        {/* Inactive */}
                        <>
                          {selectedTab === 'tab1' ? null : (
                            <Button
                              icon={'Ionicons/call-outline'}
                              onPress={() => {
                                try {
                                  setSelectedTab('tab1');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.viewBG,
                                  borderRadius: 6,
                                  color: theme.colors.medium,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 13,
                                  textAlign: 'center',
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                              title={'Skill'}
                            />
                          )}
                        </>
                      </View>
                      {/* Lang */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '30%' },
                          dimensions.width
                        )}
                      >
                        {/* Active */}
                        <>
                          {!(selectedTab === 'tab2') ? null : (
                            <Button
                              icon={
                                'MaterialCommunityIcons/message-processing-outline'
                              }
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['Trekk2'],
                                  borderRadius: 6,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 13,
                                  textAlign: 'center',
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                              title={'Langs'}
                            />
                          )}
                        </>
                        {/* Inactive */}
                        <>
                          {selectedTab === 'tab2' ? null : (
                            <Button
                              icon={
                                'MaterialCommunityIcons/message-processing-outline'
                              }
                              onPress={() => {
                                try {
                                  setSelectedTab('tab2');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.viewBG,
                                  borderRadius: 6,
                                  color: theme.colors.medium,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 13,
                                  textAlign: 'center',
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                              title={'Langs'}
                            />
                          )}
                        </>
                      </View>
                      {/* Social */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '30%' },
                          dimensions.width
                        )}
                      >
                        {/* Active */}
                        <>
                          {!(selectedTab === 'tab3') ? null : (
                            <Button
                              icon={
                                'MaterialCommunityIcons/email-check-outline'
                              }
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['Trekk2'],
                                  borderRadius: 6,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 13,
                                  textAlign: 'center',
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                              title={'Social'}
                            />
                          )}
                        </>
                        {/* Inactive */}
                        <>
                          {selectedTab === 'tab3' ? null : (
                            <Button
                              icon={
                                'MaterialCommunityIcons/email-check-outline'
                              }
                              onPress={() => {
                                try {
                                  setSelectedTab('tab3');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.viewBG,
                                  borderRadius: 6,
                                  color: theme.colors.medium,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 13,
                                  textAlign: 'center',
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                              title={'Social'}
                            />
                          )}
                        </>
                      </View>
                    </View>
                    {/* skillInfo */}
                    <>
                      {!(selectedTab === 'tab1') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              paddingBottom: 20,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 20,
                              zIndex: 99,
                            },
                            dimensions.width
                          )}
                        >
                          <MultiSelectPicker
                            autoDismissKeyboard={true}
                            dropDownBackgroundColor={theme.colors['Trekk2']}
                            dropDownBorderColor={theme.colors['Trekk2']}
                            dropDownBorderRadius={8}
                            dropDownBorderWidth={1}
                            dropDownTextColor={theme.colors['White']}
                            iconColor={theme.colors['Trekk2']}
                            iconSize={24}
                            leftIconMode={'inset'}
                            leftIconName={'MaterialCommunityIcons/ski'}
                            onValueChange={newMultiSelectPickerValue => {
                              try {
                                setGlobalVariableValue({
                                  key: 'selectedSkills',
                                  value: newMultiSelectPickerValue,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            options={Constants['skills']}
                            placeholder={'Select Activity'}
                            rightIconName={'AntDesign/down'}
                            selectedIconColor={theme.colors['Trekk2']}
                            selectedIconName={'AntDesign/checkcircleo'}
                            selectedIconSize={20}
                            style={StyleSheet.applyWidth(
                              {
                                borderRadius: 10,
                                color: theme.colors['Trekk2'],
                                fontSize: 14,
                              },
                              dimensions.width
                            )}
                            type={'underline'}
                            value={Constants['selectedSkills']}
                          />
                        </View>
                      )}
                    </>
                    {/* language */}
                    <>
                      {!(selectedTab === 'tab2') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              paddingBottom: 20,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 20,
                            },
                            dimensions.width
                          )}
                        >
                          <MultiSelectPicker
                            autoDismissKeyboard={true}
                            dropDownBackgroundColor={theme.colors['Trekk2']}
                            dropDownBorderColor={theme.colors['Trekk2']}
                            dropDownBorderRadius={8}
                            dropDownBorderWidth={1}
                            dropDownTextColor={theme.colors['White']}
                            iconColor={theme.colors['Trekk2']}
                            iconSize={24}
                            leftIconMode={'inset'}
                            leftIconName={'Entypo/language'}
                            onValueChange={newMultiSelectPickerValue => {
                              const pickerValue = newMultiSelectPickerValue;
                              try {
                                setSelectedLanguage(newMultiSelectPickerValue);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            options={languages}
                            placeholder={'Select Spoken Language'}
                            rightIconName={'AntDesign/down'}
                            selectedIconColor={theme.colors['Trekk2']}
                            selectedIconName={'AntDesign/checkcircleo'}
                            selectedIconSize={20}
                            style={StyleSheet.applyWidth(
                              {
                                borderRadius: 10,
                                color: theme.colors['Trekk2'],
                                marginBottom: 150,
                              },
                              dimensions.width
                            )}
                            type={'underline'}
                            value={selectedLanguage}
                          />
                        </View>
                      )}
                    </>
                    {/* socialInfo */}
                    <>
                      {!(selectedTab === 'tab3') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              paddingBottom: 20,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 20,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Field */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors.background,
                                borderBottomWidth: 2,
                                borderColor: theme.colors.primary,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                                paddingBottom: 8,
                                paddingLeft: 14,
                                paddingRight: 16,
                                paddingTop: 8,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Label */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.medium,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {'FaceBook'}
                            </Text>
                            {/* facebook */}
                            <TextInput
                              autoComplete={'email'}
                              keyboardAppearance={'default'}
                              keyboardType={'email-address'}
                              onChangeText={newFacebookValue => {
                                try {
                                  setFacebook(newFacebookValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              placeholder={
                                'https://www.facebook.com/yourprofile'
                              }
                              placeholderTextColor={theme.colors['Light']}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'System',
                                  fontSize: 16,
                                  fontWeight: '400',
                                  marginTop: 6,
                                  paddingBottom: 3,
                                  paddingLeft: 3,
                                  paddingRight: 3,
                                  paddingTop: 3,
                                },
                                dimensions.width
                              )}
                              underlineColorAndroid={theme.colors['Trekk8']}
                              value={facebook}
                            />
                          </View>
                          {/* Field 3 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors.background,
                                borderBottomWidth: 2,
                                borderColor: theme.colors.primary,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                                paddingBottom: 8,
                                paddingLeft: 14,
                                paddingRight: 16,
                                paddingTop: 8,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Label */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.medium,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {'Youtube'}
                            </Text>
                            {/* youtube */}
                            <TextInput
                              autoComplete={'email'}
                              keyboardAppearance={'default'}
                              keyboardType={'email-address'}
                              onChangeText={newYoutubeValue => {
                                try {
                                  setYoutube(newYoutubeValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              placeholder={'https://youtube.com/yourprofile'}
                              placeholderTextColor={theme.colors['Light']}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'System',
                                  fontSize: 16,
                                  fontWeight: '400',
                                  marginTop: 6,
                                  paddingBottom: 3,
                                  paddingLeft: 3,
                                  paddingRight: 3,
                                  paddingTop: 3,
                                },
                                dimensions.width
                              )}
                              underlineColorAndroid={theme.colors['Trekk8']}
                              value={youtube}
                            />
                          </View>
                          {/* Field 2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors.background,
                                borderBottomWidth: 2,
                                borderColor: theme.colors.primary,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                                paddingBottom: 8,
                                paddingLeft: 14,
                                paddingRight: 16,
                                paddingTop: 8,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Label */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.medium,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {'Linkedin'}
                            </Text>
                            {/* linkedin */}
                            <TextInput
                              autoComplete={'email'}
                              keyboardAppearance={'default'}
                              keyboardType={'email-address'}
                              onChangeText={newLinkedinValue => {
                                try {
                                  setLinkedin(newLinkedinValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              placeholder={
                                'https://www.facebook.com/yourprofile'
                              }
                              placeholderTextColor={theme.colors['Light']}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'System',
                                  fontSize: 16,
                                  fontWeight: '400',
                                  marginTop: 6,
                                  paddingBottom: 3,
                                  paddingLeft: 3,
                                  paddingRight: 3,
                                  paddingTop: 3,
                                },
                                dimensions.width
                              )}
                              underlineColorAndroid={theme.colors['Trekk8']}
                              value={linkedin}
                            />
                          </View>
                        </View>
                      )}
                    </>
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingBottom: 20,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 20,
                        },
                        dimensions.width
                      )}
                    >
                      {/* TouchableButton */}
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { width: '31%' },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Custom Color_9'],
                              borderLeftWidth: 1,
                              borderRadius: 12,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              height: 60,
                              justifyContent: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['Custom Color_24']}
                            name={'FontAwesome/refresh'}
                            size={40}
                          />
                        </View>
                      </Touchable>
                      {/* TouchableButton 3 */}
                      <Touchable
                        onPress={() => {
                          const handler = async () => {
                            try {
                              await GuideProfileUpdate(
                                setGlobalVariableValue,
                                undefined
                              );
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        }}
                        style={StyleSheet.applyWidth(
                          { width: '31%' },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Custom Color_8'],
                              borderLeftWidth: 1,
                              borderRadius: 12,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              height: 60,
                              justifyContent: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['Custom Color_8']}
                            name={'FontAwesome/save'}
                            size={40}
                          />
                        </View>
                      </Touchable>
                      {/* TouchableButton 2 */}
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ScreenStack', {
                              screen: 'PublicProfileScreen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { width: '31%' },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 12,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              height: 60,
                              justifyContent: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['Secondary']}
                            name={'MaterialIcons/preview'}
                            size={50}
                          />
                        </View>
                      </Touchable>
                    </View>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </TabViewItem>
          )}
        </>
      </TabView>
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

export default withTheme(ProfileScreen);
