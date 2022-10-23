import Theme from '@styles/Theme';
import {StyleSheet} from 'react-native';

const styles = themeMode =>
  StyleSheet.create({
    container: (p, m, w, radius, elevation, type) => ({
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: Theme(themeMode).SIZE[p],
      paddingHorizontal: Theme(themeMode).SIZE[p] * 2,
      margin: Theme(themeMode).SIZE[m],
      borderRadius: radius && Theme(themeMode).RADIUS[radius],
      width: w,
      elevation: elevation,
      backgroundColor: Theme(themeMode).COLORS[type].s4,
    }),
    iconContainer: {
      marginRight: Theme(themeMode).SIZE.xs,
    },
    label: (textLevel, bold, fontSize) => ({
      color: Theme(themeMode).COLORS.NEUTRAL[textLevel],
      fontSize: Theme(themeMode).FONT_SIZE[fontSize],
      fontWeight: bold ? 'BOLD' : 'NORMAL',
    }),
  });

export default styles;
