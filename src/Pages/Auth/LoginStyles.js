const { default: Theme } = require('@styles/Theme');
const { responsiveWidth } = require('@utils/Size');
const { StyleSheet } = require('react-native');

const Styles = themeMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Theme(themeMode).COLOR.background,
    },
    topBox: {
      marginTop: Theme(themeMode).SIZE.xl,
    },
    formContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      color: Theme(themeMode).COLOR.foreground,
      borderColor: Theme(themeMode).COLORS.NEUTRAL.s2,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      borderStyle: "solid",
      width: '100%',
    },
    title: {
      ...Theme(themeMode).TEXT_VARIANT.h4,
      color: Theme(themeMode).COLOR.primary,
    },
  });

export default Styles;
