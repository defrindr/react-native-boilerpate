import Theme from '@styles/Theme';
import {StyleSheet} from 'react-native';

const Styles = themeMode =>
  StyleSheet.create({
    container: (p, m) => ({
      width: '100%',
      alignItems: 'space-between',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: Theme(themeMode).COLORS.LIGHT.s1,
      padding: Theme(themeMode).SIZE[p],
      margin: Theme(themeMode).SIZE[m],
    }),
    titleContainer: {
      width: '100%',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    text: fs => ({
      width: '80%',
      color: Theme(themeMode).COLOR.primary,
      fontSize: Theme(themeMode).FONT_SIZE[fs],
      fontWeight: Theme(themeMode).FONT_WEIGHT.bold,
    }),
  });

export default Styles;
