// dynamic size for all devices
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;

/**
 * Get size depend on device width (percentage)
 * @param {*} size
 * @returns
 */
const responsiveWidth = size => {
  return (size / 100) * width;
};

/**
 * Get size depend on device height (percentage)
 * @param {*} size
 * @returns
 */
const responsiveHeight = size => {
  return (size / 100) * height;
};

export {scale, verticalScale, responsiveWidth, responsiveHeight};
export default {scale, verticalScale, responsiveWidth, responsiveHeight};
