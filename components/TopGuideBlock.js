import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  Shadow,
  Spacer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const TopGuideBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}>
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
                      { alignSelf: 'center', marginLeft: 5, marginRight: 10 },
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
                      { alignSelf: 'center', marginLeft: 5, marginRight: 10 },
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
                      { alignSelf: 'center', marginLeft: 5, marginRight: 10 },
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
  );
};

export default withTheme(TopGuideBlock);
