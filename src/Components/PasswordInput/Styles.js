import Theme from '@styles/Theme';
import {responsiveWidth} from '@utils/Size';
import {StyleSheet} from 'react-native';

const Styles = themeMode =>
  StyleSheet.create({
    label: {
      textAlign: 'left',
      padding: Theme(themeMode).SIZE.xs,
      fontSize: Theme(themeMode).FONT_SIZE.small,
    },
    container: {
      width: '100%',
      padding: Theme(themeMode).SIZE.xs,
    },
    input: {
      width: '85%',
      padding: Theme(themeMode).SIZE.s,
      fontSize: Theme(themeMode).FONT_SIZE.small,
      borderWidth: 0,
    },
    icon: {
      width: '15%',
      textAlign: 'center',
      padding: Theme(themeMode).SIZE.s,
      fontSize: Theme(themeMode).FONT_SIZE.small,
      borderWidth: 0,
    },
    inputContainer: hasError => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: responsiveWidth(10),
      borderRadius: Theme(themeMode).RADIUS.xs,
      borderWidth: 1,
      borderColor:
        hasError > 0
          ? Theme(themeMode).COLOR.danger
          : Theme(themeMode).COLORS.NEUTRAL.s2,
    }),
    error: {
      fontSize: Theme(themeMode).FONT_SIZE.xs,
      color: Theme(themeMode).COLOR.danger,
    },
  });

export default Styles;
