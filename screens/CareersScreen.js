import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const CareersScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: [
            { minWidth: Breakpoints.Mobile, value: theme.colors['Primary'] },
            { minWidth: Breakpoints.Mobile, value: Constants['deviceVar'] },
          ],
        },
        dimensions.width
      )}
    >
      {/* AuthHeader */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            backgroundColor: 'rgba(0, 0, 0, 0)',
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
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 60,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.SearchPeopleNearby}
          style={StyleSheet.applyWidth(
            { height: 300, width: 300 },
            dimensions.width
          )}
        />
        {/* Searching people nearby... */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ScreenStack', {
                screen: 'FindAGuideScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginTop: 50 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 8,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                },
                dimensions.width
              )}
            >
              {'Searching people nearby...'}
            </Text>
            <Icon
              color={theme.colors['Custom Color']}
              name={'AntDesign/arrowright'}
              size={24}
              style={StyleSheet.applyWidth(
                { marginLeft: 10 },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CareersScreen);
