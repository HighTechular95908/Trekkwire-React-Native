import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const TextInputsMaterialishScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.surface },
        dimensions.width
      )}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            paddingBottom: 36,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 24,
          },
          dimensions.width
        )}
        extraScrollHeight={72}
      >
        {/* Simple */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Email'}
            </Text>
            <TextInput
              keyboardType={'email-address'}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(textInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'you@domain.tld'}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                  marginTop: 6,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Simple with Help Text */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Email'}
            </Text>
            <TextInput
              keyboardType={'email-address'}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(textInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'you@domain.tld'}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                  marginTop: 6,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Help */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.medium,
                fontFamily: 'System',
                fontSize: 12,
                fontWeight: '400',
                marginLeft: 14,
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'Enter the email you use for work'}
          </Text>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Left Icon */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Price'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.medium}
                name={'FontAwesome/dollar'}
                size={20}
                style={StyleSheet.applyWidth({ minWidth: 0 }, dimensions.width)}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginLeft: 4 },
                  dimensions.width
                )}
              >
                <TextInput
                  keyboardType={'decimal-pad'}
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'19.99'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>
            </View>
          </View>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Right Icon */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Account ID'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <TextInput
                  keyboardType={'numbers-and-punctuation'}
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'7214-998-5419'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>
              <IconButton
                color={theme.colors.medium}
                icon={'MaterialIcons/help-outline'}
                size={24}
                style={StyleSheet.applyWidth(
                  { marginLeft: 8 },
                  dimensions.width
                )}
              />
            </View>
          </View>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Left Icon and Right Text */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Price'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.medium}
                name={'FontAwesome/dollar'}
                size={20}
                style={StyleSheet.applyWidth({ minWidth: 0 }, dimensions.width)}
              />
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <TextInput
                  keyboardType={'decimal-pad'}
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'99.99'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                      marginLeft: 4,
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontSize: 14,
                    fontWeight: '300',
                    marginLeft: 8,
                  },
                  dimensions.width
                )}
              >
                {'USD'}
              </Text>
            </View>
          </View>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Left Panel */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                overflow: 'hidden',
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Website'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
                dimensions.width
              )}
            >
              <View>
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.medium,
                      fontFamily: 'System',
                      fontSize: 14,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                >
                  {'https://'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginLeft: 4 },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter a value...'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>
            </View>
          </View>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Right Panel */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Username'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <TextInput
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'username'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    justifyContent: 'center',
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
                    },
                    dimensions.width
                  )}
                >
                  {'@domain.tld'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Error with Right Icon */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.error,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.error,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Email'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <TextInput
                  keyboardType={'email-address'}
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'you@domain.tld'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.error,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>
              <IconButton
                color={theme.colors.error}
                icon={'MaterialIcons/error-outline'}
                size={24}
                style={StyleSheet.applyWidth(
                  { marginLeft: 8 },
                  dimensions.width
                )}
              />
            </View>
          </View>
          {/* Error message */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.error,
                fontFamily: 'System',
                fontSize: 12,
                fontWeight: '400',
                marginLeft: 14,
                marginTop: 2,
              },
              dimensions.width
            )}
          >
            {'Please provide your email address'}
          </Text>
        </View>
        <Spacer bottom={12} left={8} right={8} top={12} />
        {/* Success with Right Icon */}
        <View>
          {/* Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 2,
                borderColor: theme.colors.success,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingBottom: 8,
                paddingLeft: 14,
                paddingRight: 16,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.success,
                  fontFamily: 'System',
                  fontSize: 12,
                  fontWeight: '600',
                },
                dimensions.width
              )}
            >
              {'Email'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <TextInput
                  keyboardType={'number-pad'}
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'you@domain.tld'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.success,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>
              <IconButton
                color={theme.colors.success}
                icon={'MaterialIcons/check-circle-outline'}
                size={24}
                style={StyleSheet.applyWidth(
                  { marginLeft: 8 },
                  dimensions.width
                )}
              />
            </View>
          </View>
          {/* Success Message */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.success,
                fontFamily: 'System',
                fontSize: 12,
                fontWeight: '400',
                marginLeft: 14,
                marginTop: 2,
              },
              dimensions.width
            )}
          >
            {'Your email address is valid'}
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(TextInputsMaterialishScreen);
