import Theme from '@styles/Theme';
import {StyleSheet} from 'react-native';

const Styles = themeMode =>
  StyleSheet.create({
    profileImgContainer: r => ({
      marginLeft: Theme(themeMode).SIZE.m,
      width: r,
      height: r,
      borderRadius: r,
    }),
    profileImg: r => ({
      borderRadius: r,
      width: r,
      height: r,
    }),
  });

export default Styles;
