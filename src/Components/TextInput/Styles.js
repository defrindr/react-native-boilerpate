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
    container: (width = null) => ({
      width: width ? responsiveWidth(width) : '100%',
      padding: Theme(themeMode).SIZE.xs,
    }),
    input: hasError => ({
      width: '100%',
      height: responsiveWidth(10),
      borderRadius: Theme(themeMode).RADIUS.xs,
      borderWidth: 1,
      padding: Theme(themeMode).SIZE.s,
      fontSize: Theme(themeMode).FONT_SIZE.small,
      borderColor: hasError
        ? Theme(themeMode).COLOR.danger
        : Theme(themeMode).COLORS.NEUTRAL.s2,
    }),
    error: {
      fontSize: Theme(themeMode).FONT_SIZE.xs,
      color: Theme(themeMode).COLOR.danger,
    },
  });

export default Styles;
