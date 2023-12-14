import * as React from 'react';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { View, Text, ActivityIndicator, AppState } from 'react-native';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import Draftbit from './themes/Draftbit.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [areAssetsCached, setAreAssetsCached] = React.useState(false);

  const [fontsLoaded] = useFonts({
    ADLaMDisplay_400Regular:
      'https://fonts.gstatic.com/s/adlamdisplay/v1/KFOhCnGXkPOLlhx6jD8_b1ZECsHYkYBPY3o.ttf',
    AbrilFatface_400Regular:
      'https://fonts.gstatic.com/s/abrilfatface/v23/zOL64pLDlL1D99S8g8PtiKchm-BsjOLhZBY.ttf',
    Aclonica_400Regular:
      'https://fonts.gstatic.com/s/aclonica/v22/K2FyfZJVlfNNSEBXGb7TCI6oBjLz.ttf',
    Agbalumo_400Regular:
      'https://fonts.gstatic.com/s/agbalumo/v2/55xvey5uMdT2N37KZcMFirl08KDJ.ttf',
    Aladin_400Regular:
      'https://fonts.gstatic.com/s/aladin/v24/ZgNSjPJFPrvJV5f16Sf4pGT2Ng.ttf',
    Inter_300Light:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf',
    Inter_400Regular:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
    Inter_500Medium:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf',
    Inter_600SemiBold:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
    Inter_700Bold:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf',
    PTSerif_700Bold:
      'https://fonts.gstatic.com/s/ptserif/v18/EJRSQgYoZZY2vCFuvAnt65qVXSr3pNNB.ttf',
    Poppins_400Regular:
      'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf',
    Poppins_500Medium:
      'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf',
    Poppins_600SemiBold:
      'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf',
  });
  const [fontsTimedOut, setFontsTimedOut] = React.useState(false);
  const [fontTimer, setFontTimer] = React.useState(null);
  React.useEffect(() => {
    if (fontsLoaded && fontTimer) {
      clearTimeout(fontTimer);
      setFontsTimedOut(false);
    }
    if (!fontsLoaded && !fontTimer) {
      const timer = setTimeout(() => {
        console.warn('Timed out waiting for fonts to load');
        setFontsTimedOut(true);
      }, 10000);
      setFontTimer(timer);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, fontTimer]);

  React.useEffect(() => {
    async function prepare() {
      try {
        await cacheAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAreAssetsCached(true);
      }
    }

    prepare();
  }, []);

  const isReady = areAssetsCached && (fontsLoaded || fontsTimedOut);
  const onLayoutRootView = React.useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={Draftbit}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
