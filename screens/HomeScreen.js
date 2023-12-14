import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import GetAvatar from '../global-functions/GetAvatar';
import SignOut from '../global-functions/SignOut';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Checkbox,
  Circle,
  CircleImage,
  Divider,
  Icon,
  ScreenContainer,
  Shadow,
  Spacer,
  Surface,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const HomeScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        setShowNav(false);
        await GetAvatar(setGlobalVariableValue, Constants['User']?.id);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [showNav, setShowNav] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState(
    "Best City Tour Ever! Our guide was an expert storyteller, making the city's history come alive. Their insider tips on hidden gems and local eateries were priceless. We felt like we saw the city from a local's perspective ..."
  );

  return (
    <ScreenContainer
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { flexDirection: 'column' },
        dimensions.width
      )}
    >
      {/* Content */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Trekk2'],
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 20,
              paddingTop: 50,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flex: 1, flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'contain'}
              source={Images.Trekkwire}
              style={StyleSheet.applyWidth(
                { height: 30, width: 120 },
                dimensions.width
              )}
            />
          </View>
          <Checkbox
            checkedIcon={'AntDesign/indent-left'}
            color={theme.colors['White']}
            onPress={newCheckboxValue => {
              try {
                setShowNav(newCheckboxValue);
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
            status={showNav}
            uncheckedColor={theme.colors['White']}
            uncheckedIcon={'AntDesign/indent-right'}
          />
        </View>

        <ScrollView
          bounces={true}
          contentContainerStyle={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* Drawer */}
          <>
            {!showNav ? null : (
              <Surface
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'stretch',
                    backgroundColor: theme.colors['Primary'],
                    flex: 2,
                    height: '100%',
                    marginLeft: -20,
                    paddingTop: 15,
                    position: 'absolute',
                    top: 0,
                    width: '80%',
                    zIndex: 5,
                  },
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
                      { alignItems: 'center', flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    <Circle bgColor={theme.colors.surface} size={64}>
                      <CircleImage
                        size={60}
                        source={{ uri: `${Constants['imageUri']}` }}
                      />
                    </Circle>

                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, marginLeft: 12 },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.surface,
                            fontFamily: 'System',
                            fontSize: 18,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {Constants['User']?.fullName}
                      </Text>

                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: 4,
                          },
                          dimensions.width
                        )}
                      >
                        <Circle
                          bgColor={theme.colors.error}
                          size={8}
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: theme.colors['App Green'],
                              left: -20,
                              width: 150,
                              zIndex: 1,
                            },
                            dimensions.width
                          )}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['App Green'],
                              fontFamily: 'System',
                              fontWeight: '400',
                              marginLeft: 4,
                            },
                            dimensions.width
                          )}
                        >
                          {'online'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <ScrollView
                  bounces={true}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={true}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, paddingBottom: 16, paddingTop: 0 },
                      dimensions.width
                    )}
                  >
                    {/* Home */}
                    <Touchable
                      onPress={() => {
                        try {
                          setShowNav(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['White']}
                          name={'Feather/home'}
                          size={24}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['White'],
                              fontFamily: 'System',
                              fontSize: 18,
                              fontWeight: '400',
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {'Home'}
                        </Text>
                      </View>
                    </Touchable>
                    {/* About Us */}
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('ScreenStack', {
                            screen: 'AboutUsScreen',
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['White']}
                          name={'Entypo/help-with-circle'}
                          size={24}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['White'],
                              fontFamily: 'System',
                              fontSize: 18,
                              fontWeight: '400',
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {'About Us'}
                        </Text>
                      </View>
                    </Touchable>
                    {/* Find a guide */}
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
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['White']}
                          name={'AntDesign/contacts'}
                          size={24}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['White'],
                              fontFamily: 'System',
                              fontSize: 18,
                              fontWeight: '400',
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {'Find a guide\n'}
                        </Text>
                      </View>
                    </Touchable>
                    {/* Become a guide */}
                    <>
                      {!Constants['isGuide'] ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setGlobalVariableValue({
                                key: 'Tab',
                                value: 2,
                              });
                              navigation.navigate('ScreenStack', {
                                screen: 'ProfileScreen',
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingBottom: 12,
                                paddingLeft: 24,
                                paddingRight: 24,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={theme.colors['White']}
                              name={'MaterialIcons/group-add'}
                              size={24}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['White'],
                                  fontFamily: 'System',
                                  fontSize: 18,
                                  fontWeight: '400',
                                  marginLeft: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {'Become a guide\n'}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Profile */}
                    <Touchable
                      onPress={() => {
                        try {
                          setGlobalVariableValue({
                            key: 'Tab',
                            value: 0,
                          });
                          navigation.navigate('ScreenStack', {
                            screen: 'ProfileScreen',
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['White']}
                          name={'FontAwesome/user-circle'}
                          size={24}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['White'],
                              fontFamily: 'System',
                              fontSize: 18,
                              fontWeight: '400',
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {'Profile\n'}
                        </Text>
                      </View>
                    </Touchable>
                    {/* Career */}
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('ScreenStack', {
                            screen: 'CareersScreen',
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['White']}
                          name={'Feather/share-2'}
                          size={24}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['White'],
                              fontFamily: 'System',
                              fontSize: 18,
                              fontWeight: '400',
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {'Career'}
                        </Text>
                      </View>
                    </Touchable>
                    {/* Logout 2 */}
                    <Touchable
                      onPress={() => {
                        const handler = async () => {
                          try {
                            await SignOut(setGlobalVariableValue);
                            navigation.navigate('Auth', {
                              screen: 'LandingScreen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        };
                        handler();
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['White']}
                          name={'Feather/log-out'}
                          size={24}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['White'],
                              fontFamily: 'System',
                              fontSize: 18,
                              fontWeight: '400',
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {'Sign out'}
                        </Text>
                      </View>
                    </Touchable>
                  </View>
                </ScrollView>
              </Surface>
            )}
          </>
          {/* TopGuideView */}
          <View
            style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
          >
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
                    color: theme.colors['Trekk2'],
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 18,
                  }),
                  dimensions.width
                )}
              >
                {'Top Rated guides'}
              </Text>
            </View>
            {/* TopGuides */}
            <Swiper
              dotActiveColor={theme.colors['Trekk2']}
              dotColor={theme.colors['Medium']}
              dotsTouchable={true}
              from={0}
              loop={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.SwiperStyles(theme)['Swiper'], {
                  height: 380,
                }),
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
                            { fontFamily: 'ADLaMDisplay_400Regular' },
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
                    {/* SkillSet_view */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          paddingBottom: 5,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 5,
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Skill_view */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 4 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 5 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 6 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 7 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 8 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Shadow>
              </SwiperItem>
              {/* Swiper Item 3 */}
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
                            { fontFamily: 'ADLaMDisplay_400Regular' },
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
                    {/* SkillSet_view */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          paddingBottom: 5,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 5,
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Skill_view */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 4 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 5 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 6 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 7 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 8 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Shadow>
              </SwiperItem>
              {/* Swiper Item 4 */}
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
                            { fontFamily: 'ADLaMDisplay_400Regular' },
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
                    {/* SkillSet_view */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          paddingBottom: 5,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 5,
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Skill_view */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 4 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 5 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 6 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 7 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                      {/* Skill_view 8 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['GetFit Orange'],
                            borderRadius: 15,
                            marginBottom: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            marginTop: 2,
                            paddingBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Peoplebit_White'],
                              fontFamily: 'Aladin_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'music'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Shadow>
              </SwiperItem>
            </Swiper>
          </View>
          {/* ImageCard */}
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
                    color: theme.colors['Trekk2'],
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
                    backgroundColor: theme.colors['Trekk9'],
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
                {/* View 3 */}
                <View>
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
                          marginBottom: 20,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Join the Experience'}
                  </Text>
                  {/* item */}
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
                        name={'Entypo/network'}
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
                        {'Browse\n'}
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
                          'profiles of passionate local experts and  find the perfect match for your interests'
                        }
                      </Text>
                    </View>
                  </View>
                  {/* divider */}
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
                  {/* item 2 */}
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
                        name={'Entypo/message'}
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
                        {'Message\n'}
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
                          'your local expert and schedule a convenient time and location  to meet up'
                        }
                      </Text>
                    </View>
                  </View>
                  {/* divider 2 */}
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
                  {/* item 3 */}
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
                        name={'Ionicons/eye-outline'}
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
                        {'Experience\n'}
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
                          'profiles of passionate local experts and  find the perfect match for your interests'
                        }
                      </Text>
                    </View>
                  </View>
                </View>
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
                    source={Images.Group2}
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
                    {'Become a Guide'}
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
                      'Unleash the hidden gems of your city, become a local tour guide and share your passions with others. As a local tour guide, you have the power to showcase your unique insights, cultural treasures, and insider knowledge, shaping the way visitors perceive and remember your city. Join us in redefining tourism!'
                    }
                  </Text>
                  {/* primaryButton */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          paddingBottom: 10,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 10,
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
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
                        title={'Learn more...'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Shadow>
          </View>
          {/* TravellerReviewView */}
          <View
            style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
          >
            {/* View 3 */}
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
                    color: theme.colors['Trekk2'],
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 18,
                  }),
                  dimensions.width
                )}
              >
                {'What Our Users Say'}
              </Text>
            </View>

            <Swiper
              dotActiveColor={theme.colors['Trekk2']}
              dotColor={theme.colors['Medium']}
              dotsTouchable={true}
              loop={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.SwiperStyles(theme)['Swiper'], {
                  height: 260,
                }),
                dimensions.width
              )}
            >
              {/* Review */}
              <SwiperItem
                style={StyleSheet.applyWidth(
                  GlobalStyles.SwiperItemStyles(theme)['SwiperItem'],
                  dimensions.width
                )}
              >
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
                        backgroundColor: theme.colors['Trekk9'],
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
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row' },
                          dimensions.width
                        )}
                      >
                        <CircleImage
                          size={60}
                          source={Images.Ellipse21}
                          style={StyleSheet.applyWidth(
                            { height: 40, width: 40 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              alignSelf: 'center',
                              fontFamily: 'ADLaMDisplay_400Regular',
                              marginLeft: 10,
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
                          {
                            alignContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            height: '100%',
                          },
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
                          '"Best City Tour Ever! Our guide was an expert storyteller, making the city\'s history come alive. Their insider tips on hidden gems and local eateries were priceless. We felt like we saw the city from a local\'s perspective ..."'
                        }
                      </Text>
                    </View>
                  </View>
                </Shadow>
              </SwiperItem>
              {/* Review 2 */}
              <SwiperItem
                style={StyleSheet.applyWidth(
                  GlobalStyles.SwiperItemStyles(theme)['SwiperItem'],
                  dimensions.width
                )}
              >
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
                        backgroundColor: theme.colors['Trekk9'],
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
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row' },
                          dimensions.width
                        )}
                      >
                        <CircleImage
                          size={60}
                          source={Images.Ellipse21}
                          style={StyleSheet.applyWidth(
                            { height: 40, width: 40 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              alignSelf: 'center',
                              fontFamily: 'ADLaMDisplay_400Regular',
                              marginLeft: 10,
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
                          {
                            alignContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            height: '100%',
                          },
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
                          '"Best City Tour Ever! Our guide was an expert storyteller, making the city\'s history come alive. Their insider tips on hidden gems and local eateries were priceless. We felt like we saw the city from a local\'s perspective ..."'
                        }
                      </Text>
                    </View>
                  </View>
                </Shadow>
              </SwiperItem>
              {/* Review 3 */}
              <SwiperItem
                style={StyleSheet.applyWidth(
                  GlobalStyles.SwiperItemStyles(theme)['SwiperItem'],
                  dimensions.width
                )}
              >
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
                        backgroundColor: theme.colors['Trekk9'],
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
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row' },
                          dimensions.width
                        )}
                      >
                        <CircleImage
                          size={60}
                          source={Images.Ellipse21}
                          style={StyleSheet.applyWidth(
                            { height: 40, width: 40 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            {
                              alignSelf: 'center',
                              fontFamily: 'ADLaMDisplay_400Regular',
                              marginLeft: 10,
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
                          {
                            alignContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            height: '100%',
                          },
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
                          '"Best City Tour Ever! Our guide was an expert storyteller, making the city\'s history come alive. Their insider tips on hidden gems and local eateries were priceless. We felt like we saw the city from a local\'s perspective ..."'
                        }
                      </Text>
                    </View>
                  </View>
                </Shadow>
              </SwiperItem>
            </Swiper>
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
