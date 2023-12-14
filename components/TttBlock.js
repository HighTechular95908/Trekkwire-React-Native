import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, Divider, Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const TttBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors['White'],
          borderRadius: 10,
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: 30,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          width: '100%',
        },
        dimensions.width
      )}
    >
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* primaryButton */}
        <View>
          {/* View 2 */}
          <View>
            <Button
              onPress={() => {
                try {
                  navigation.navigate('ScreenStack', {
                    screen: 'ProfileScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Action Button3'],
                dimensions.width
              )}
              title={'Book a guide today'}
            />
          </View>
        </View>
      </View>
      <Divider
        color={theme.colors['Divider']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
            height: 2,
            width: '100%',
          }),
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              width: '20%',
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary']}
            name={'Entypo/location'}
            size={50}
          />
        </View>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ width: '80%' }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Trekk2'],
                fontFamily: 'ADLaMDisplay_400Regular',
                fontSize: 18,
              }),
              dimensions.width
            )}
          >
            {'Expert Locals\n'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              { alignSelf: 'center' },
              dimensions.width
            )}
          >
            {
              'Are you traveling to Chicago for business? New York for a quick visit? Miami Beach? Whatever and wherever it is, our network of locals is excited to help make the most of your time.'
            }
          </Text>
        </View>
      </View>
      {/* Divider 2 */}
      <Divider
        color={theme.colors['Divider']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
            height: 2,
            width: '100%',
          }),
          dimensions.width
        )}
      />
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              width: '20%',
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary']}
            name={'MaterialCommunityIcons/refresh-circle'}
            size={50}
          />
        </View>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ width: '80%' }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Trekk2'],
                fontFamily: 'ADLaMDisplay_400Regular',
                fontSize: 18,
              }),
              dimensions.width
            )}
          >
            {'Easy Bookings\n'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              { alignSelf: 'center' },
              dimensions.width
            )}
          >
            {
              'Are you looking for all the best pizza places, bars, restaurants, or night life? Quickly and easily schedule and meet one of our locals to set you up with the best there is to offer.'
            }
          </Text>
        </View>
      </View>
      {/* Divider 3 */}
      <Divider
        color={theme.colors['Divider']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
            height: 2,
            width: '100%',
          }),
          dimensions.width
        )}
      />
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              width: '20%',
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary']}
            name={'FontAwesome/calendar-plus-o'}
            size={50}
          />
        </View>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ width: '80%' }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Trekk2'],
                fontFamily: 'ADLaMDisplay_400Regular',
                fontSize: 18,
              }),
              dimensions.width
            )}
          >
            {'On Demand\n'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              { alignSelf: 'center' },
              dimensions.width
            )}
          >
            {
              "Even if you just found out about us after you arrive, we have options available on-demand. Turn your long layover or extended weekend into a story you'll never forget."
            }
          </Text>
        </View>
      </View>
      {/* Divider 4 */}
      <Divider
        color={theme.colors['Divider']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
            height: 2,
            width: '80%',
          }),
          dimensions.width
        )}
      />
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              width: '20%',
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary']}
            name={'Ionicons/finger-print-sharp'}
            size={50}
          />
        </View>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ width: '80%' }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Trekk2'],
                fontFamily: 'ADLaMDisplay_400Regular',
                fontSize: 18,
              }),
              dimensions.width
            )}
          >
            {'Unique Experiences\n'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              { alignSelf: 'center' },
              dimensions.width
            )}
          >
            {
              'Trekkwire is different than the typical tour guide experience. Our locals will cater to what you want, meaning that you will get a unique, one of a kind experience.'
            }
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(TttBlock);
