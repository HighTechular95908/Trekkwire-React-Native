import * as React from 'react';
import {
  I18nManager,
  Platform,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AboutUsScreen from './screens/AboutUsScreen';
import AddNewProfileScreen from './screens/AddNewProfileScreen';
import BlankScreen from './screens/BlankScreen';
import BookScreen from './screens/BookScreen';
import CareersScreen from './screens/CareersScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import FindAGuideScreen from './screens/FindAGuideScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import ListStyledTimelineScreen from './screens/ListStyledTimelineScreen';
import LoginScreen from './screens/LoginScreen';
import PaymentConfirmationScreen from './screens/PaymentConfirmationScreen';
import PaymentGatewayScreen from './screens/PaymentGatewayScreen';
import ProfileScreen from './screens/ProfileScreen';
import PublicProfileScreen from './screens/PublicProfileScreen';
import SearchScreen from './screens/SearchScreen';
import SignUpScreen from './screens/SignUpScreen';
import StockListScreen from './screens/StockListScreen';
import SuccessScreen from './screens/SuccessScreen';
import TextInputsMaterialishScreen from './screens/TextInputsMaterialishScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Auth() {
  return (
    <Stack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
        }}
      />
      <Stack.Screen
        name="AddNewProfileScreen"
        component={AddNewProfileScreen}
        options={{
          title: 'Add New Profile',
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
        }}
      />
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          title: 'Landing',
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        headerTitleAllowFontScaling: true,
        tabBarActiveBackgroundColor: theme.colors['Trekk2'],
        tabBarActiveTintColor: theme.colors['Custom Color_3'],
        tabBarInactiveBackgroundColor: theme.colors['Trekk2'],
        tabBarInactiveTintColor: theme.colors['Peoplebit_White'],
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: theme.typography.custom21,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors['Trekk2'],
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? color : color}
            />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="EvilIcons/location"
              size={25}
              color={focused ? color : color}
            />
          ),
          title: 'Search',
        }}
      />
    </Tab.Navigator>
  );
}

function ScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{
          title: 'Success',
        }}
      />
      <Stack.Screen
        name="BookScreen"
        component={BookScreen}
        options={{
          title: 'Book',
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="PaymentGatewayScreen"
        component={PaymentGatewayScreen}
        options={{
          title: 'Payment Gateway',
        }}
      />
      <Stack.Screen
        name="CareersScreen"
        component={CareersScreen}
        options={{
          title: 'Careers',
        }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          title: 'About Us',
        }}
      />
      <Stack.Screen
        name="PaymentConfirmationScreen"
        component={PaymentConfirmationScreen}
        options={{
          title: 'Payment Confirmation',
        }}
      />
      <Stack.Screen
        name="FindAGuideScreen"
        component={FindAGuideScreen}
        options={{
          title: 'Find a Guide',
        }}
      />
      <Stack.Screen
        name="PublicProfileScreen"
        component={PublicProfileScreen}
        options={{
          title: 'PublicProfile',
        }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="BlankScreen"
          component={BlankScreen}
          options={{
            title: 'Blank',
          }}
        />
        <Stack.Screen
          name="DiscoverScreen"
          component={DiscoverScreen}
          options={{
            title: 'Discover',
          }}
        />
        <Stack.Screen
          name="StockListScreen"
          component={StockListScreen}
          options={{
            title: 'Stock List',
          }}
        />
        <Stack.Screen
          name="TextInputsMaterialishScreen"
          component={TextInputsMaterialishScreen}
          options={{
            title: 'Text Inputs - Materialish',
          }}
        />
        <Stack.Screen
          name="ListStyledTimelineScreen"
          component={ListStyledTimelineScreen}
          options={{
            title: 'List - Styled Timeline',
          }}
        />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="ScreenStack" component={ScreenStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
