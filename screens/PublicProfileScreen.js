import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Badges from '../custom-files/Badges';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Shadow,
  Spacer,
  Swiper,
  SwiperItem,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PublicProfileScreen = props => {
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
      setSkills(Constants['skills']);
      setLangs(Constants['langs']);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [Langs, setLangs] = React.useState([]);
  const [Skills, setSkills] = React.useState([]);
  const [showEdit, setShowEdit] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(true);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingTop: 20 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* GuideRecap */}
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
          {/* GuideImageView */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignSelf: 'center',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 20,
                width: '100%',
              },
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
                    source={{ uri: `${Constants['imageUri']}` }}
                    style={StyleSheet.applyWidth(
                      { borderRadius: 20, height: 250, width: '100%' },
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
                      {Constants['User']?.fullName}
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
                        { alignSelf: 'center', marginLeft: 5, marginRight: 10 },
                        dimensions.width
                      )}
                    >
                      {Constants['Guide']?.rating}
                      {'4.9'}
                    </Text>
                  </View>
                </View>
                <Spacer bottom={0} left={8} right={8} top={4} />
              </View>
            </Shadow>
          </View>
          {/* EditBtnView */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                alignSelf: 'auto',
                flexDirection: 'row-reverse',
                justifyContent: 'flex-start',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* touchableIcon */}
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
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 40,
                    justifyContent: 'center',
                    width: 40,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Trekk2']}
                  name={'Feather/edit'}
                  size={40}
                />
              </View>
            </Touchable>
          </View>
          {/* ProfileView */}
          <>
            {!showProfile ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    alignSelf: 'auto',
                    backgroundColor: theme.colors['Trekk9'],
                    borderRadius: 32,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 20,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* aboutMeView */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row', width: '100%' },
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
                      name={'Entypo/info'}
                      size={50}
                    />
                  </View>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        width: '80%',
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
                          {
                            color: theme.colors['Trekk2'],
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 18,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'About Me\n'}
                    </Text>

                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Text 2 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          { alignSelf: 'auto' },
                          dimensions.width
                        )}
                      >
                        {"I'm "}
                      </Text>

                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text'],
                          dimensions.width
                        )}
                      >
                        {Constants['User']?.fullName}
                      </Text>
                    </View>
                    {/* Text 2 */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text'],
                        dimensions.width
                      )}
                    >
                      {'Welcome to my profile'}
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
                {/* langView */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row', width: '100%' },
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
                      name={'Entypo/language'}
                      size={50}
                    />
                  </View>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        width: '80%',
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
                          {
                            color: theme.colors['Trekk2'],
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 18,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Languages'}
                    </Text>
                    {/* skillset */}
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
                      <Utils.CustomCodeErrorBoundary>
                        <Badges.component
                          items={Langs}
                          color="rgb(254, 151, 15)"
                        />
                      </Utils.CustomCodeErrorBoundary>
                    </View>
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
                {/* activiewsView */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row', width: '100%' },
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
                      name={'MaterialCommunityIcons/ski'}
                      size={50}
                    />
                  </View>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        width: '80%',
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
                          {
                            color: theme.colors['Trekk2'],
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 18,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Activities'}
                    </Text>
                    {/* skillset */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          paddingBottom: 5,
                          paddingTop: 5,
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      <Utils.CustomCodeErrorBoundary>
                        <Badges.component
                          items={Skills}
                          color="rgb(254, 151, 15)"
                        />
                      </Utils.CustomCodeErrorBoundary>
                    </View>
                  </View>
                </View>
                {/* Divider 4 */}
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
              </View>
            )}
          </>
        </View>
        {/* Tours */}
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* Heading */}
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
              {'Available Tours'}
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
                height: 350,
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
                  {/* placeImage */}
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
                      source={Images.IMG6213}
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
                    <View>
                      {/* Rating_view */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row', width: '100%' },
                          dimensions.width
                        )}
                      >
                        {/* durationIcon */}
                        <Icon
                          color={theme.colors['Social Orange']}
                          name={'Ionicons/md-timer'}
                          size={24}
                          style={StyleSheet.applyWidth(
                            { backgroundColor: 'rgba(0, 0, 0, 0)' },
                            dimensions.width
                          )}
                        />
                        {/* duration */}
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
                          {'1 hours'}
                        </Text>
                      </View>
                      {/* GuideName_view */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row', width: '100%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            { fontFamily: 'ADLaMDisplay_400Regular' },
                            dimensions.width
                          )}
                        >
                          {'Cost:'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text'],
                            dimensions.width
                          )}
                        >
                          {'$10'}
                        </Text>
                      </View>
                    </View>
                    {/* View 2 */}
                    <View>
                      {/* primaryButton */}
                      <View>
                        {/* View 2 */}
                        <View>
                          {/* bookBtn */}
                          <Button
                            onPress={() => {
                              try {
                                navigation.navigate('ScreenStack', {
                                  screen: 'BookScreen',
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ButtonStyles(theme)[
                                  'Action Button3'
                                ],
                                { paddingLeft: 20, paddingRight: 20 }
                              ),
                              dimensions.width
                            )}
                            title={'Book'}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <Spacer bottom={0} left={8} right={8} top={4} />
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
                  {/* placeImage */}
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
                      source={Images.IMG6213}
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
                    <View>
                      {/* Rating_view */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row', width: '100%' },
                          dimensions.width
                        )}
                      >
                        {/* durationIcon */}
                        <Icon
                          color={theme.colors['Social Orange']}
                          name={'Ionicons/md-timer'}
                          size={24}
                          style={StyleSheet.applyWidth(
                            { backgroundColor: 'rgba(0, 0, 0, 0)' },
                            dimensions.width
                          )}
                        />
                        {/* duration */}
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
                          {'1 hours'}
                        </Text>
                      </View>
                      {/* GuideName_view */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row', width: '100%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            { fontFamily: 'ADLaMDisplay_400Regular' },
                            dimensions.width
                          )}
                        >
                          {'Cost:'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text'],
                            dimensions.width
                          )}
                        >
                          {'$10'}
                        </Text>
                      </View>
                    </View>
                    {/* View 2 */}
                    <View>
                      {/* primaryButton */}
                      <View>
                        {/* View 2 */}
                        <View>
                          {/* bookBtn */}
                          <Button
                            onPress={() => {
                              try {
                                navigation.navigate('ScreenStack', {
                                  screen: 'BookScreen',
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ButtonStyles(theme)[
                                  'Action Button3'
                                ],
                                { paddingLeft: 20, paddingRight: 20 }
                              ),
                              dimensions.width
                            )}
                            title={'Book'}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <Spacer bottom={0} left={8} right={8} top={4} />
                </View>
              </Shadow>
            </SwiperItem>
          </Swiper>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PublicProfileScreen);
