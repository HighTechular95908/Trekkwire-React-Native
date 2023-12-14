import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SkillsetBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
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
  );
};

export default withTheme(SkillsetBlock);
