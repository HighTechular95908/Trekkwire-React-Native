import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Circle, Icon, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const ListStyledTimelineScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
    >
      <DraftbitApi.FetchReviewsGET>
        {({ loading, error, data, refetchReviews }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlatList
              contentContainerStyle={StyleSheet.applyWidth(
                {
                  flex: 1,
                  paddingBottom: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 24,
                },
                dimensions.width
              )}
              data={fetchData}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              listKey={'uGWc41MT'}
              numColumns={1}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { alignItems: 'center', flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Circle bgColor={theme.colors.primary} size={48}>
                          <Icon
                            color={theme.colors.surface}
                            name={'MaterialIcons/star'}
                            size={24}
                          />
                        </Circle>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: theme.colors.divider,
                              flex: 1,
                              width: 4,
                            },
                            dimensions.width
                          )}
                        />
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 5 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors.primary}
                            name={'AntDesign/caretleft'}
                            size={24}
                            style={StyleSheet.applyWidth(
                              { marginRight: -10, marginTop: 12 },
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.primary,
                                  borderTopLeftRadius: 4,
                                  borderTopRightRadius: 4,
                                  flex: 1,
                                  justifyContent: 'center',
                                  paddingBottom: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  paddingTop: 16,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                ellipsizeMode={'tail'}
                                numberOfLines={2}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.surface,
                                    fontFamily: 'System',
                                    fontSize: 16,
                                    fontWeight: '600',
                                    lineHeight: 16,
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.title}
                              </Text>
                            </View>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.surface,
                                  borderBottomLeftRadius: 8,
                                  borderBottomRightRadius: 8,
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors.divider,
                                  borderLeftWidth: 1,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
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
                                    color: theme.colors.medium,
                                    fontFamily: 'System',
                                    fontWeight: '400',
                                    textAlign: 'justify',
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.full_review}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'System',
                                    fontSize: 12,
                                    fontWeight: '400',
                                    marginTop: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Reviewed on '}
                                {listData?.date}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Spacer bottom={16} left={8} right={8} top={16} />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          );
        }}
      </DraftbitApi.FetchReviewsGET>
    </ScreenContainer>
  );
};

export default withTheme(ListStyledTimelineScreen);
