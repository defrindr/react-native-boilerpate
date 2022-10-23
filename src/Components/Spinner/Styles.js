const {default: Theme} = require('@styles/Theme');
const {StyleSheet} = require('react-native');

const Styles = themeMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Theme(themeMode).COLOR.background + 'CE',
    },
    text: {
      fontSize: Theme().SIZE.sm,
      marginTop: Theme().SIZE.m,
      color: Theme(themeMode).COLOR.foreground,
    },
  });

export default Styles;
