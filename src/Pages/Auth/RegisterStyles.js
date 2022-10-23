import {responsiveWidth} from '@utils/Size';

const {StyleSheet} = require('react-native');

const Styles = themeMode =>
  StyleSheet.create({
    card: {
      width: responsiveWidth(95),
    },
  });

export default Styles;
