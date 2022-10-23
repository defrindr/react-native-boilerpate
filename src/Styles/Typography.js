// dynamic font size for all devices
import {scale} from '@utils/Size';

export const FONT_SIZE = {
  h1: scale(32),
  h2: scale(28),
  h3: scale(24),
  h4: scale(20),
  h5: scale(18),
  h6: scale(16),
  default: scale(14),
  large: scale(16),
  small: scale(12),
  tiny: scale(10),
  xs: scale(8),
  s: scale(10),
  sm: scale(12),
  m: scale(14),
  ml: scale(16),
  l: scale(18),
  xl: scale(20),
};

export const FONT_WEIGHT = {
  light: '200',
  normal: '400',
  bold: '700',
};

export const TEXT_VARIANT = {
  h1: {
    fontSize: FONT_SIZE.h1,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: FONT_SIZE.h1 * 1.2,
  },
  h2: {
    fontSize: FONT_SIZE.h2,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: FONT_SIZE.h2 * 1.2,
  },
  h3: {
    fontSize: FONT_SIZE.h3,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: FONT_SIZE.h3 * 1.2,
  },
  h4: {
    fontSize: FONT_SIZE.h4,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: FONT_SIZE.h4 * 1.2,
  },
  h5: {
    fontSize: FONT_SIZE.h5,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: FONT_SIZE.h5 * 1.2,
  },
  h6: {
    fontSize: FONT_SIZE.h6,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: FONT_SIZE.h6 * 1.2,
  },
  default: {
    fontSize: FONT_SIZE.default,
    fontWeight: FONT_WEIGHT.normal,
    lineHeight: FONT_SIZE.default * 1.2,
  },
  large: {
    fontSize: FONT_SIZE.large,
    fontWeight: FONT_WEIGHT.normal,
    lineHeight: FONT_SIZE.large * 1.2,
  },
  small: {
    fontSize: FONT_SIZE.small,
    fontWeight: FONT_WEIGHT.normal,
    lineHeight: FONT_SIZE.small * 1.2,
  },
  tiny: {
    fontSize: FONT_SIZE.tiny,
    fontWeight: FONT_WEIGHT.normal,
    lineHeight: FONT_SIZE.tiny * 1.2,
  },
};

export default {FONT_SIZE, FONT_WEIGHT, TEXT_VARIANT};
