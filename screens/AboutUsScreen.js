import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Shadow,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const AboutUsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [optionsMenu, setOptionsMenu] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('home');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Trekk2'],
            height: '100%',
            width: '100%',
          },
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
            {'About Us'}
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

        <ScrollView
          bounces={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* ImageHeader */}
          <View
            style={StyleSheet.applyWidth(
              { justifyContent: 'center' },
              dimensions.width
            )}
          >
            <ImageBackground
              resizeMode={'cover'}
              source={Images.Aboutus}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageBackgroundStyles(theme)['Image Background'],
                  { height: 200 }
                ),
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: '100%', justifyContent: 'center' },
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
                      fontSize: 24,
                    }),
                    dimensions.width
                  )}
                >
                  {'Adventure is out there,\n'}
                </Text>
                {/* Text 3 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      alignSelf: 'center',
                      color: theme.colors['White'],
                      fontFamily: 'ADLaMDisplay_400Regular',
                      fontSize: 24,
                    }),
                    dimensions.width
                  )}
                >
                  {'Trekkwire will help you find it.\n'}
                </Text>
              </View>
            </ImageBackground>
          </View>
          {/* WhatWeDo */}
          <View
            style={StyleSheet.applyWidth(
              {
                paddingBottom: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* View 4 */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'stretch', paddingBottom: 5, paddingTop: 5 },
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
                    fontSize: 18,
                  }),
                  dimensions.width
                )}
              >
                {'What we do'}
              </Text>
            </View>
            {/* Review */}
            <Shadow
              distance={10}
              offsetX={0}
              offsetY={0}
              paintInside={false}
              showShadowCornerBottomEnd={true}
              showShadowCornerBottomStart={true}
              showShadowCornerTopEnd={true}
              showShadowCornerTopStart={true}
              showShadowSideBottom={true}
              showShadowSideEnd={true}
              showShadowSideStart={true}
              showShadowSideTop={true}
              stretch={false}
              style={StyleSheet.applyWidth(
                GlobalStyles.ShadowStyles(theme)['GuideRecap'],
                dimensions.width
              )}
            >
              {/* GuideInfo_view */}
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
                  <Image
                    resizeMode={'cover'}
                    source={Images.Image74}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        { height: 200, width: '100%' }
                      ),
                      dimensions.width
                    )}
                  />
                </View>

                <View>
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
                      "At Trekkwire, we believe that traveling should be easy, fun, and enriching. We are a team of passionate travel enthusiasts who understand the challenges of planning a trip, missing out on travel opportunities when your friends can't join, the wasting of hours in an airport during long layovers and the hassle of finding local connections online. That's why we created our on-demand travel application, to make it easier for everyone to travel and explore more freely."
                    }
                  </Text>
                </View>
              </View>
            </Shadow>
          </View>
          {/* OurMission */}
          <View
            style={StyleSheet.applyWidth(
              {
                paddingBottom: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'stretch',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  paddingBottom: 5,
                  paddingTop: 5,
                },
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
                    fontSize: 18,
                  }),
                  dimensions.width
                )}
              >
                {'Our mission'}
              </Text>
            </View>
            {/* Review */}
            <Shadow
              distance={10}
              offsetX={0}
              offsetY={0}
              paintInside={false}
              showShadowCornerBottomEnd={true}
              showShadowCornerBottomStart={true}
              showShadowCornerTopEnd={true}
              showShadowCornerTopStart={true}
              showShadowSideBottom={true}
              showShadowSideEnd={true}
              showShadowSideStart={true}
              showShadowSideTop={true}
              stretch={false}
              style={StyleSheet.applyWidth(
                GlobalStyles.ShadowStyles(theme)['GuideRecap'],
                dimensions.width
              )}
            >
              {/* GuideInfo_view */}
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
                  <Image
                    resizeMode={'cover'}
                    source={Images.Image73}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        { height: 200, width: '100%' }
                      ),
                      dimensions.width
                    )}
                  />
                </View>

                <View>
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
                      'We strive to help travelers discover authentic and unforgettable experiences by connecting them with passionate local guides. We believe that travel should be more than just visiting popular tourist destinations and checking off items on a list. It should be about immersing oneself in local cultures, trying new things, and creating lifelong memories. By providing a platform for travelers to connect with knowledgeable and enthusiastic local guides, we aim to make travel more meaningful, enjoyable, and memorable for everyone.'
                    }
                  </Text>
                </View>
              </View>
            </Shadow>
          </View>
          {/* Tips */}
          <View
            style={StyleSheet.applyWidth(
              {
                paddingBottom: 50,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'stretch',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  paddingBottom: 5,
                  paddingTop: 5,
                },
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
                    fontSize: 18,
                  }),
                  dimensions.width
                )}
              >
                {'Make the most of your travel'}
              </Text>
            </View>
            {/* Review */}
            <Shadow
              distance={10}
              offsetX={0}
              offsetY={0}
              paintInside={false}
              showShadowCornerBottomEnd={true}
              showShadowCornerBottomStart={true}
              showShadowCornerTopEnd={true}
              showShadowCornerTopStart={true}
              showShadowSideBottom={true}
              showShadowSideEnd={true}
              showShadowSideStart={true}
              showShadowSideTop={true}
              stretch={false}
              style={StyleSheet.applyWidth(
                GlobalStyles.ShadowStyles(theme)['GuideRecap'],
                dimensions.width
              )}
            >
              {/* GuideInfo_view */}
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
                              screen: 'FindAGuideScreen',
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
                    StyleSheet.compose(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      { height: 2, width: '100%' }
                    ),
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
                  <View
                    style={StyleSheet.applyWidth(
                      { width: '80%' },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: theme.colors['Trekk2'],
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 18,
                          }
                        ),
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
                    StyleSheet.compose(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      { height: 2, width: '100%' }
                    ),
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
                  <View
                    style={StyleSheet.applyWidth(
                      { width: '80%' },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: theme.colors['Trekk2'],
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 18,
                          }
                        ),
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
                    StyleSheet.compose(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      { height: 2, width: '100%' }
                    ),
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
                  <View
                    style={StyleSheet.applyWidth(
                      { width: '80%' },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: theme.colors['Trekk2'],
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 18,
                          }
                        ),
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
                    StyleSheet.compose(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      { height: 2, width: '80%' }
                    ),
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
                  <View
                    style={StyleSheet.applyWidth(
                      { width: '80%' },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: theme.colors['Trekk2'],
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 18,
                          }
                        ),
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
            </Shadow>
          </View>
          {/* Footer */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Trekk2'],
                borderColor: theme.colors['White'],
                borderTopWidth: 2,
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
                    name={'AntDesign/twitter'}
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
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AboutUsScreen);
