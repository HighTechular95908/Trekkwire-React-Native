import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Shadow, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const ImageCardBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
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
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 200,
                  width: '100%',
                }),
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
  );
};

export default withTheme(ImageCardBlock);
