import Theme from '@styles/Theme';
import {responsiveHeight} from '@utils/Size';

const {StyleSheet} = require('react-native');

const Styles = themeMode =>
  StyleSheet.create({
    container: {
      minHeight: responsiveHeight(100),
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Theme(themeMode).COLOR.background,
    },
    input: {
      color: Theme(themeMode).COLOR.foreground,
      borderColor: Theme(themeMode).COLORS.NEUTRAL.s2,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      borderStyle: 'solid',
      width: '100%',
    },
    inputWrap: {
      flex: 1,
    },
    col: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    padTop: {
      marginTop: Theme(themeMode).SIZE.l,
    },
    title: {
      color: Theme(themeMode).COLOR.foreground,
      fontSize: Theme(themeMode).SIZE.m,
      fontWeight: 'bold',
    },
    subtitle: {
      color: Theme(themeMode).COLOR.foreground,
      fontSize: Theme(themeMode).SIZE.s,
      fontWeight: 'bold',
    },
    formContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Styles;
