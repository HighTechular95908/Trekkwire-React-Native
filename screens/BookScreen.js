import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as MyToast from '../custom-files/MyToast';
import Booking from '../global-functions/Booking';
import BookingValidation from '../global-functions/BookingValidation';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  DatePicker,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View, useWindowDimensions } from 'react-native';

const BookScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const [date, setDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [hour, setHour] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const [travelImageUrl, setTravelImageUrl] = React.useState('');
  const [travelName, setTravelName] = React.useState('');
  const [travelType, setTravelType] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
    >
      <View
        style={StyleSheet.applyWidth(
          { height: 420, width: '100%' },
          dimensions.width
        )}
      >
        <ImageBackground
          resizeMode={'cover'}
          source={Images.IMG6213}
          style={StyleSheet.applyWidth(
            { height: '100%', justifyContent: 'flex-end', width: '100%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                paddingBottom: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 24,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors.primary,
                  borderRadius: 8,
                  flexDirection: 'row',
                  paddingBottom: 6,
                  paddingLeft: 12,
                  paddingRight: 8,
                  paddingTop: 6,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.surface,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 24,
                    },
                    dimensions.width
                  )}
                >
                  {travelName}
                </Text>
                {/* Text 3 */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.surface,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 16,
                    },
                    dimensions.width
                  )}
                >
                  {'Enjoy your tour for '}
                  {hour}
                  {'     Only '}
                  {price}
                  {'/1h!'}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              paddingBottom: 24,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 24,
            },
            dimensions.width
          )}
        >
          {/* LabelInput */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* LabelInput 5 */}
            <View
              style={StyleSheet.applyWidth({ width: '50%' }, dimensions.width)}
            >
              {/* startDate */}
              <Text accessible={true} allowFontScaling={true}>
                {'Start date'}
              </Text>
              {/* startDate */}
              <DatePicker
                autoDismissKeyboard={true}
                date={startDate}
                label={'Date'}
                leftIconMode={'inset'}
                mode={'date'}
                onDateChange={newStartDateValue => {
                  const date = newStartDateValue;
                  try {
                    undefined;
                  } catch (err) {
                    console.error(err);
                  }
                }}
                type={'solid'}
              />
            </View>

            <View
              style={StyleSheet.applyWidth({ width: '50%' }, dimensions.width)}
            >
              {/* endDate */}
              <Text accessible={true} allowFontScaling={true}>
                {'End date'}
              </Text>
              {/* endDate */}
              <DatePicker
                autoDismissKeyboard={true}
                date={endDate}
                label={'Date'}
                leftIconMode={'inset'}
                mode={'date'}
                onDateChange={newEndDateValue => {
                  const date = newEndDateValue;
                  try {
                    undefined;
                  } catch (err) {
                    console.error(err);
                  }
                }}
                type={'solid'}
              />
            </View>
          </View>
          {/* LabelInput 2 */}
          <View>
            {/* travelimage */}
            <Text accessible={true} allowFontScaling={true}>
              {'Travel Image\n'}
            </Text>
            {/* travel image */}
            <TextInput
              editable={true}
              keyboardType={'default'}
              onChangeText={newTravelImageValue => {
                try {
                  setTravelName(newTravelImageValue);
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
              value={travelName}
            />
          </View>
          {/* LabelInput 7 */}
          <View>
            {/* travelName */}
            <Text accessible={true} allowFontScaling={true}>
              {'Travel name\n'}
            </Text>
            {/* Full name */}
            <TextInput
              editable={true}
              keyboardType={'default'}
              onChangeText={newFullNameValue => {
                try {
                  setTravelName(newFullNameValue);
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
              value={travelName}
            />
          </View>
          {/* LabelInput 3 */}
          <View>
            {/* phone */}
            <Text accessible={true} allowFontScaling={true}>
              {'Phone\n'}
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
          {/* LabelInput 6 */}
          <View>
            {/* travelType */}
            <Text accessible={true} allowFontScaling={true}>
              {'Travel Type\n'}
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
          {/* LabelInput 5 */}
          <View>
            {/* Full name */}
            <Text accessible={true} allowFontScaling={true}>
              {'Scheduled Duration\n'}
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
          {/* primaryButton */}
          <View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Button
                onPress={() => {
                  const handler = async () => {
                    try {
                      const isValid = BookingValidation(
                        undefined,
                        undefined,
                        undefined,
                        undefined
                      );
                      if (isValid) {
                        await Booking(
                          '6577e074401288ddb678ca83',
                          'paris',
                          startDate,
                          endDate,
                          Constants['User']?.id
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
                title={'Book'}
              />
              {/* Button 2 */}
              <Button
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Action Button3'],
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderColor: theme.colors['Trekk7'],
                      color: theme.colors['Error'],
                      marginLeft: 20,
                    }
                  ),
                  dimensions.width
                )}
                title={'Cancel'}
              />
            </View>
          </View>
        </View>
        <Utils.CustomCodeErrorBoundary>
          <MyToast.component />
        </Utils.CustomCodeErrorBoundary>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(BookScreen);
