import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ButtonStyles = theme =>
  StyleSheet.create({
    'Action Button1': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: theme.colors['Trekk2'],
      borderRadius: 64,
      borderWidth: 2,
      fontFamily: 'AbrilFatface_400Regular',
      fontSize: 18,
      letterSpacing: 1,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
    'Action Button2': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: theme.colors['Trekk2'],
      borderRadius: 64,
      borderWidth: 2,
      fontFamily: 'AbrilFatface_400Regular',
      fontSize: 18,
      letterSpacing: 1,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
    'Action Button3': {
      backgroundColor: theme.colors['Trekk2'],
      borderColor: theme.colors['Trekk2'],
      borderRadius: 64,
      borderWidth: 2,
      color: theme.colors['White'],
      fontFamily: 'AbrilFatface_400Regular',
      fontSize: 18,
      letterSpacing: 1,
      marginBottom: 10,
      marginTop: 10,
    },
    'Action Button4': {
      backgroundColor: theme.colors['Custom Color_31'],
      borderColor: theme.colors['Trekk2'],
      borderRadius: 64,
      borderWidth: 2,
      color: theme.colors['White'],
      fontFamily: 'AbrilFatface_400Regular',
      fontSize: 14,
      letterSpacing: 1,
      marginBottom: 10,
      marginTop: 10,
    },
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { color: theme.colors.strong },
    Text1: {
      color: theme.colors['Trekk1'],
      fontFamily: 'Agbalumo_400Regular',
      fontSize: 32,
    },
    Text2: {
      color: theme.colors['Trekk1'],
      fontFamily: 'Agbalumo_400Regular',
      fontSize: 32,
    },
    validCheckText: { color: theme.colors['Error'] },
  });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { height: 100, width: 100 } });

export const ImageStyles = theme =>
  StyleSheet.create({
    IconImage: { height: 30, width: 30 },
    'IconImage 2': { height: 30, width: 30 },
  });

export const BlurViewStyles = theme =>
  StyleSheet.create({
    'Blur View': { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { flex: 1 } });

export const ShadowStyles = theme =>
  StyleSheet.create({
    GuideRecap: { borderRadius: 10, width: '100%' },
    'GuideRecap 2': { borderRadius: 10 },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
    },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderRadius: 10,
      height: 250,
      opacity: 1,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 0,
      width: '100%',
    },
  });

export const SwiperItemStyles = theme =>
  StyleSheet.create({
    SwiperItem: {
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { flex: 1 } });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });

export const TableStyles = theme => StyleSheet.create({ Table: { flex: 1 } });

export const TableCellStyles = theme =>
  StyleSheet.create({ 'Table Cell': { flex: 1, flexDirection: 'row' } });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { height: 1 } });

export const MapViewStyles = theme =>
  StyleSheet.create({ 'Map View': { flex: 1, height: '100%', width: '100%' } });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({ 'Swipeable Item': { overflow: 'hidden' } });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });
