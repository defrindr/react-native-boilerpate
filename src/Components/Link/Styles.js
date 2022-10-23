import Theme from '@styles/Theme';
import {StyleSheet} from 'react-native';

const styles = themeMode =>
  StyleSheet.create({
    link: {
      flexDirection: 'row',
      alignItems: 'center',
      color: Theme(themeMode).COLOR.PRIMARY,
      fontSize: Theme(themeMode).FONT_SIZE.MEDIUM,
      fontWeight: Theme(themeMode).FONT_WEIGHT.BOLD,
      textDecorationLine: 'underline',
    },
    label: size => ({
      margin: Theme(themeMode).SIZE.xs,
      fontSize: Theme(themeMode).FONT_SIZE[size],
      fontWeight: Theme(themeMode).FONT_WEIGHT.bold,
      color: Theme(themeMode).COLOR.primary,
    }),
  });

export default styles;
