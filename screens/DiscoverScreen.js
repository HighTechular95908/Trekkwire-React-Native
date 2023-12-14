import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const DiscoverScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [Interests, setInterests] = React.useState([
    'Festivals',
    'Travel',
    'Plant-based',
    'Movies',
    'Road Trips',
  ]);
  const [UserDetailsModal, setUserDetailsModal] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Image */}
      <ImageBackground
        resizeMode={'cover'}
        source={Images.Doctor}
        style={StyleSheet.applyWidth(
          { height: '100%', justifyContent: 'flex-end', width: '100%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <LinearGradient
            color1={theme.colors['Strong']}
            color2={'rgba(0, 0, 0, 0)'}
            endX={0}
            endY={0}
            startY={100}
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: '100%',
                justifyContent: 'space-between',
                paddingBottom: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  justifyContent: 'flex-end',
                  paddingBottom: 20,
                  paddingLeft: 30,
                  paddingTop: 20,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_4'],
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 22,
                  },
                  dimensions.width
                )}
              >
                {'Kyara Moana, 21'}
              </Text>
              {/* About */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_4'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 13,
                    marginTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'Fashion designer Texas University\nMiami Beach, Florida'}
              </Text>
              {/* Interests */}
              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 8 },
                  dimensions.width
                )}
              >
                <FlatList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'row', flexWrap: 'wrap' },
                    dimensions.width
                  )}
                  data={Interests}
                  horizontal={true}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'cmysTKtq'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderColor: theme.colors['Custom Color_4'],
                            borderLeftWidth: 1,
                            borderRadius: 24,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            height: 25,
                            justifyContent: 'center',
                            marginRight: 12,
                            marginTop: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Custom Color_4'],
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {listData}
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
            {/* Actions */}
            <View
              style={StyleSheet.applyWidth(
                {
                  justifyContent: 'flex-end',
                  paddingBottom: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              {/* Like */}
              <View>
                {/* like */}
                <Touchable>
                  <Image
                    resizeMode={'cover'}
                    source={Images.Like}
                    style={StyleSheet.applyWidth(
                      { height: 48, width: 48 },
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
              {/* superlike */}
              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 20 },
                  dimensions.width
                )}
              >
                <Touchable>
                  <Image
                    resizeMode={'cover'}
                    source={Images.Superlike}
                    style={StyleSheet.applyWidth(
                      { height: 48, width: 48 },
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
              {/* dislike */}
              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 20 },
                  dimensions.width
                )}
              >
                <Touchable>
                  <Image
                    resizeMode={'cover'}
                    source={Images.Dislike}
                    style={StyleSheet.applyWidth(
                      { height: 48, width: 48 },
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
              {/* Info */}
              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 20 },
                  dimensions.width
                )}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setUserDetailsModal(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.Info}
                    style={StyleSheet.applyWidth(
                      { height: 48, width: 48 },
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
      <>
        {!UserDetailsModal ? null : (
          <Modal animationType={'slide'} transparent={true}>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.5,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, justifyContent: 'flex-end' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom Color_4'],
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    paddingBottom: 50,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 20,
                  },
                  dimensions.width
                )}
              >
                {/* Close */}
                <View
                  style={StyleSheet.applyWidth(
                    { position: 'absolute', right: 24, top: -24 },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setUserDetailsModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={Images.Down}
                      style={StyleSheet.applyWidth(
                        { height: 48, width: 48 },
                        dimensions.width
                      )}
                    />
                  </Touchable>
                </View>
                {/* Name */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginTop: 12 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 22,
                        paddingBottom: 8,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Kyara Moana, 21'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_6'],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 13,
                      },
                      dimensions.width
                    )}
                  >
                    {'Fashion designer Texas University\nMiami Beach, Florida'}
                  </Text>
                </View>
                {/* About */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginTop: 12 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 15,
                        paddingBottom: 8,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'About'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_6'],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 13,
                      },
                      dimensions.width
                    )}
                  >
                    {
                      'Hello I am Kyara Moana fashion designer from\nTexas University and i am living in Florida.'
                    }
                  </Text>
                </View>
                {/* Interests */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginTop: 12 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 15,
                        paddingBottom: 5,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Interested'}
                  </Text>
                  <FlatList
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1, flexDirection: 'row', flexWrap: 'wrap' },
                      dimensions.width
                    )}
                    data={Interests}
                    horizontal={true}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    listKey={'vEkbscly'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Custom Color_6'],
                              borderLeftWidth: 1,
                              borderRadius: 24,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              height: 25,
                              justifyContent: 'center',
                              marginRight: 12,
                              marginTop: 12,
                              paddingLeft: 20,
                              paddingRight: 20,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors['Custom Color_6'],
                                fontFamily: 'Poppins_400Regular',
                                fontSize: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {listData}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
                {/* Location */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginTop: 12 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 15,
                        paddingBottom: 8,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Location'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_6'],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 13,
                      },
                      dimensions.width
                    )}
                  >
                    {'Miami Beach, Florida'}
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(DiscoverScreen);
