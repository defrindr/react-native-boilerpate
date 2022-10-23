import Theme from '@styles/Theme';
import { StyleSheet } from 'react-native';

const styles = themeMode =>
  StyleSheet.create({
    container: (p, m, radius, w) => ({
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme(themeMode).COLORS.LIGHT.s1,
      padding: Theme(themeMode).SIZE[p],
      margin: Theme(themeMode).SIZE[m],
      borderRadius: Theme(themeMode).RADIUS[radius],
      width: w
    }),
    shadow: {
      shadowColor: Theme(themeMode).COLOR.background,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
  });

export default styles;
