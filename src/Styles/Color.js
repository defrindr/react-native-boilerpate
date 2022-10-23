export const NEUTRAL = {
  s1: '#F5F5F5',
  s2: '#E0E0E0',
  s3: '#BDBDBD',
  s4: '#9E9E9E',
  s5: '#757575',
  s6: '#616161',
  s7: '#424242',
  s8: '#212121',
  s9: '#000000',
};

export const PRIMARY = {
  s1: '#E3F2FD',
  s2: '#BBDEFB',
  s3: '#90CAF9',
  s4: '#64B5F6',
  s5: '#42A5F5',
  s6: '#2196F3',
  s7: '#1E88E5',
  s8: '#1976D2',
  s9: '#1565C0',
};

export const SECONDARY = {
  s1: '#E1F5FE',
  s2: '#B3E5FC',
  s3: '#81D4FA',
  s4: '#4FC3F7',
  s5: '#29B6F6',
  s6: '#03A9F4',
  s7: '#039BE5',
  s8: '#0288D1',
  s9: '#0277BD',
};

export const SUCCESS = {
  s1: '#E8F5E9',
  s2: '#C8E6C9',
  s3: '#A5D6A7',
  s4: '#81C784',
  s5: '#66BB6A',
  s6: '#4CAF50',
  s7: '#43A047',
  s8: '#388E3C',
  s9: '#2E7D32',
};

export const WARNING = {
  s1: '#FFFDE7',
  s2: '#FFF9C4',
  s3: '#FFF59D',
  s4: '#FFF176',
  s5: '#FFEE58',
  s6: '#FFEB3B',
  s7: '#FDD835',
  s8: '#FBC02D',
  s9: '#F9A825',
};

export const DANGER = {
  s1: '#FFEBEE',
  s2: '#FFCDD2',
  s3: '#EF9A9A',
  s4: '#E57373',
  s5: '#EF5350',
  s6: '#F44336',
  s7: '#E53935',
  s8: '#D32F2F',
  s9: '#C62828',
};

export const INFO = {
  s1: '#E1F5FE',
  s2: '#B3E5FC',
  s3: '#81D4FA',
  s4: '#4FC3F7',
  s5: '#29B6F6',
  s6: '#03A9F4',
  s7: '#039BE5',
  s8: '#0288D1',
  s9: '#0277BD',
};

export const GRAYSCALE = NEUTRAL;
export const LIGHT = {
  s1: '#FFFFFF',
  s2: '#FAFAFA',
  s3: '#F5F5F5',
  s4: '#EEEEEE',
  s5: '#E0E0E0',
  s6: '#BDBDBD',
  s7: '#9E9E9E',
  s8: '#757575',
  s9: '#616161',
};
export const DARK = {
  s1: '#212121',
  s2: '#424242',
  s3: '#616161',
  s4: '#757575',
  s5: '#9E9E9E',
  s6: '#BDBDBD',
  s7: '#E0E0E0',
  s8: '#F5F5F5',
  s9: '#FAFAFA',
};

export const BASE = {
  background: GRAYSCALE.s1,
  foreground: GRAYSCALE.s8,
  primary: PRIMARY.s6,
  secondary: SECONDARY.s6,
  success: SUCCESS.s6,
  warning: WARNING.s6,
  danger: DANGER.s6,
  info: INFO.s6,
  neutral: NEUTRAL.s6,
};

// App Colors in Dark Mode
export const BASE_DARKMODE = {
  ...BASE,
  background: GRAYSCALE.s9,
  foreground: GRAYSCALE.s1,
};

// random color generator
export const randomColor = () => {
  const colors = Object.values(BASE);
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default {
  NEUTRAL,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
  GRAYSCALE,
  LIGHT,
  DARK,
  randomColor,
  BASE,
  BASE_DARKMODE,
};
