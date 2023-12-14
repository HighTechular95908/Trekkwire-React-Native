import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CheckboxRow,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [checkboxRowValue, setCheckboxRowValue] = React.useState(undefined);
  const [checkboxRowValue2, setCheckboxRowValue2] = React.useState('');

  return (
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
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            flex: 1,
            justifyContent: 'flex-start',
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 30,
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
            {'Full name\n'}
          </Text>
          {/* Full name */}
          <TextInput
            editable={true}
            keyboardType={'default'}
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
          />
        </View>
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
            onChangeText={newEmailValue => {
              try {
                setGlobalVariableValue({
                  key: 'Name',
                  value: newEmailValue,
                });
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
          />
        </View>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Phone input */}
        <View>
          {/* Phone */}
          <Text accessible={true} allowFontScaling={true}>
            {'Phone\n'}
          </Text>
          {/* Phone */}
          <TextInput
            editable={true}
            keyboardType={'default'}
            onChangeText={newPhoneValue => {
              try {
                setGlobalVariableValue({
                  key: 'Name',
                  value: newPhoneValue,
                });
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
          />
        </View>
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Password input */}
        <View>
          {/* Password */}
          <Text accessible={true} allowFontScaling={true}>
            {'Password'}
          </Text>
          {/* Password */}
          <TextInput
            editable={true}
            keyboardType={'default'}
            onChangeText={newPasswordValue => {
              try {
                setGlobalVariableValue({
                  key: 'Name',
                  value: newPasswordValue,
                });
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
          />
        </View>
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

        <View>
          <CheckboxRow
            direction={'row-reverse'}
            label={'I accept terms & policy'}
            onPress={newCheckboxRowValue => {
              const checkboxRowValue = newCheckboxRowValue;
              try {
                setCheckboxRowValue2(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRowValue2}
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text1'], {
                    color: theme.colors['Trekk2'],
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 20,
                  }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text1'], {
                    color: theme.colors['Trekk2'],
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 20,
                  }),
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
  );
};

export default withTheme(SignUpBlock);
