import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapView } from '@draftbit/maps';
import {
  Icon,
  ScreenContainer,
  Shadow,
  Spacer,
  Swiper,
  SwiperItem,
  TabView,
  TabViewItem,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const FindAGuideScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [selectedTag, setSelectedTag] = React.useState('All');
  const [textInputValue, setTextInputValue] = React.useState('');

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
          {'Find'}
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
      {/* TopGuide */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: 'rgba(0, 0, 0, 0)', width: '100%' },
          dimensions.width
        )}
      >
        {/* TopGuides */}
        <Swiper
          dotActiveColor={theme.colors['Trekk2']}
          dotColor={theme.colors['Medium']}
          dotsTouchable={true}
          from={0}
          loop={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.SwiperStyles(theme)['Swiper'],
            dimensions.width
          )}
          vertical={false}
        >
          {/* Swiper Item 2 */}
          <SwiperItem
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwiperItemStyles(theme)['SwiperItem'],
                {
                  alignItems: 'stretch',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  justifyContent: 'flex-start',
                }
              ),
              dimensions.width
            )}
          >
            {/* GuideRecap */}
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
              {/* REPLACE ME */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    alignSelf: 'flex-start',
                    backgroundColor: theme.colors['White'],
                    borderColor: theme.colors.light,
                    borderRadius: 10,
                    borderStyle: 'dashed',
                    flex: 0,
                    justifyContent: 'space-between',
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Avatar */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.IMG6208}
                    style={StyleSheet.applyWidth(
                      { borderRadius: 20, height: 200, width: '100%' },
                      dimensions.width
                    )}
                  />
                </View>
                <Spacer bottom={0} left={8} right={8} top={4} />
                {/* GuideInfo_view */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: -30,
                      paddingLeft: 20,
                      paddingRight: 20,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  {/* GuideName_view */}
                  <View>
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['White'],
                          fontFamily: 'ADLaMDisplay_400Regular',
                        },
                        dimensions.width
                      )}
                    >
                      {'Erica, 29'}
                    </Text>
                  </View>
                  {/* Rating_view */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* RatingIcon */}
                    <Icon
                      color={theme.colors['Social Orange']}
                      name={'AntDesign/star'}
                      size={24}
                      style={StyleSheet.applyWidth(
                        { backgroundColor: 'rgba(0, 0, 0, 0)' },
                        dimensions.width
                      )}
                    />
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'center',
                          color: theme.colors['Social Orange'],
                          fontSize: 18,
                          marginLeft: 5,
                          marginRight: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {'4.8'}
                    </Text>
                  </View>
                </View>
                <Spacer bottom={0} left={8} right={8} top={4} />
              </View>
            </Shadow>
          </SwiperItem>
        </Swiper>
      </View>

      <TabView
        activeColor={theme.colors.primary}
        indicatorColor={theme.colors.primary}
        keyboardDismissMode={'auto'}
        pressColor={theme.colors.primary}
        swipeEnabled={true}
        tabBarPosition={'top'}
        tabsBackgroundColor={theme.colors.background}
      >
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
            dimensions.width
          )}
          title={'All'}
        >
          <ScrollView
            bounces={true}
            contentContainerStyle={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                marginTop: 10,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
              },
              dimensions.width
            )}
            showsVerticalScrollIndicator={true}
          >
            {/* Search Bar */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  backgroundColor: theme.colors['Custom Color'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 32,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderWidth: 2,
                  flexDirection: 'row',
                  height: 44,
                  paddingLeft: 5,
                },
                dimensions.width
              )}
            >
              {/* View 4 */}
              <View
                style={StyleSheet.applyWidth({ width: '8%' }, dimensions.width)}
              >
                <Icon
                  color={theme.colors['Strong']}
                  name={'EvilIcons/search'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                />
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  { marginRight: 3, width: '30%' },
                  dimensions.width
                )}
              >
                <TextInput
                  autoCapitalize={'none'}
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Search by city'}
                  placeholderTextColor={theme.colors['Light']}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'flex-start',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderLeftWidth: 2,
                    justifyContent: 'center',
                    width: '8%',
                  },
                  dimensions.width
                )}
              >
                {/* Icon 2 */}
                <Icon
                  color={theme.colors['Strong']}
                  name={'FontAwesome/user'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    { opacity: 0.5 },
                    dimensions.width
                  )}
                />
              </View>
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  { marginRight: 3, width: '30%' },
                  dimensions.width
                )}
              >
                {/* Text Input 2 */}
                <TextInput
                  autoCapitalize={'none'}
                  onChangeText={newTextInput2Value => {
                    try {
                      setTextInputValue(newTextInput2Value);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Travelers'}
                  placeholderTextColor={theme.colors['Light']}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>

              <Touchable
                style={StyleSheet.applyWidth(
                  { height: '100%', width: '23%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Trekk2'],
                      borderBottomRightRadius: 32,
                      borderTopRightRadius: 32,
                      height: '100%',
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { alignSelf: 'center', color: theme.colors['White'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Search'}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* Doctors List */}
            <DraftbitExampleApi.FetchDoctorsListGET count={6}>
              {({ loading, error, data, refetchDoctorsList }) => {
                const doctorsListData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <FlashList
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    data={doctorsListData}
                    estimatedItemSize={50}
                    keyExtractor={flashListData =>
                      flashListData?.id ||
                      flashListData?.uuid ||
                      JSON.stringify(flashListData)
                    }
                    listKey={'EHZKTZlb'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const flashListData = item;
                      return (
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
                            { marginTop: 20 },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors['Trekk9'],
                                borderRadius: 12,
                                flexDirection: 'row',
                                height: 104,
                                paddingLeft: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Image
                              resizeMode={'cover'}
                              source={{ uri: `${flashListData?.avatar}` }}
                              style={StyleSheet.applyWidth(
                                { borderRadius: 4, height: 80, width: 80 },
                                dimensions.width
                              )}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                { marginLeft: 15 },
                                dimensions.width
                              )}
                            >
                              {/* Name */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 16,
                                  },
                                  dimensions.width
                                )}
                              >
                                {props.route?.params?.fullName ?? null}
                              </Text>
                              {/* Speciality */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_300Light',
                                    marginTop: 5,
                                    opacity: 0.7,
                                  },
                                  dimensions.width
                                )}
                              >
                                {props.route?.params?.tag ?? null}
                              </Text>

                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginTop: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  color={theme.colors['Custom Color_5']}
                                  name={'FontAwesome/star'}
                                  size={20}
                                />
                                {/* Rating */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_300Light',
                                      fontSize: 12,
                                      marginLeft: 5,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {props.route?.params?.rating ?? null}
                                </Text>
                                {/* Review Count */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'  •  '}
                                  {props.route?.params?.reviewCoutnt ?? null}
                                  {'Reviews'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </Touchable>
                      );
                    }}
                  />
                );
              }}
            </DraftbitExampleApi.FetchDoctorsListGET>
          </ScrollView>
        </TabViewItem>
        {/* Tab View Item 2 */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
            dimensions.width
          )}
          title={'Map'}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                height: 400,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <MapView
              apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
              autoClusterMarkersDistanceMeters={10000}
              customMapStyle={'Beautiful West Coast Villa'}
              latitude={37.40241}
              loadingEnabled={true}
              longitude={-122.12125}
              moveOnMarkerPress={true}
              rotateEnabled={true}
              scrollEnabled={true}
              showsPointsOfInterest={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.MapViewStyles(theme)['Map View'],
                dimensions.width
              )}
              zoom={8}
              zoomEnabled={true}
            />
          </View>
        </TabViewItem>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(FindAGuideScreen);
