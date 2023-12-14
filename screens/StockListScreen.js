import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { DatePicker, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const StockListScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* Dates View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Start Date */}
        <View
          style={StyleSheet.applyWidth(
            { paddingRight: 10, width: '50%' },
            dimensions.width
          )}
        >
          <DatePicker
            date={datePickerValue}
            format={'dd-mm-yyyy'}
            label={'From Date'}
            leftIconMode={'inset'}
            mode={'date'}
            onDateChange={newDatePickerValue => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            rightIconName={'AntDesign/calendar'}
            type={'solid'}
          />
        </View>
        {/* End Date */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 10, width: '50%' },
            dimensions.width
          )}
        >
          <DatePicker
            date={datePickerValue}
            format={'dd-mm-yyyy'}
            label={'To Date'}
            leftIconMode={'inset'}
            mode={'date'}
            onDateChange={newDatePickerValue => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            rightIconName={'AntDesign/calendar'}
            style={StyleSheet.applyWidth(
              { color: theme.colors.textPlaceholder },
              dimensions.width
            )}
            type={'solid'}
          />
        </View>
      </View>
      {/* Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Product */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginTop: 16 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 14,
                  paddingLeft: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'product'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'smart watch'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.textPlaceholder,
                  fontSize: 13,
                  marginTop: 2,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'fashion'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'men for shoes'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.textPlaceholder,
                  fontSize: 13,
                  marginTop: 2,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'fashion'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'smart watch'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.textPlaceholder,
                  fontSize: 13,
                  marginTop: 2,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'fashion'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'smart watch'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontSize: 13,
                  marginTop: 2,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'fashion'}
            </Text>
          </View>
        </View>
        {/* Code */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, width: '22%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 14,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Code/IME'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'123456'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'DJ1234'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'DJ16543'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'345687'}
            </Text>
          </View>
        </View>
        {/* Qty */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, width: '22%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 14,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'QTY'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'24 Pcs'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'27 Pcs'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'2 Dozen'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'2 Pcs'}
            </Text>
          </View>
        </View>
        {/* Balance */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, width: '22%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 14,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Balance'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'$3975'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'$175'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'$375'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'$375'}
            </Text>
          </View>
        </View>
      </View>
      {/* Total */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderColor: theme.colors.textPlaceholder,
            borderTopWidth: 1,
            flexDirection: 'row',
            height: 60,
            justifyContent: 'space-between',
            marginBottom: 10,
            marginTop: 16,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'total:'}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
            },
            dimensions.width
          )}
        >
          {null}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              textAlign: 'right',
            },
            dimensions.width
          )}
        >
          {'$850'}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
            },
            dimensions.width
          )}
        >
          {'$850'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(StockListScreen);
