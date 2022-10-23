import Color from '@styles/Color';
import Typography from '@styles/Typography';
import Spacing from '@styles/Spacing';
import CONFIG_THEME from '@config/Theme';

export const Theme = theme => {
  let IS_DARKMODE = theme === CONFIG_THEME.DARK;

  return {
    IS_DARKMODE,
    COLOR: IS_DARKMODE ? Color.BASE_DARKMODE : Color.BASE,
    COLORS: Color,
    FONT_SIZE: Typography.FONT_SIZE,
    FONT_WEIGHT: Typography.FONT_WEIGHT,
    TEXT_VARIANT: Typography.TEXT_VARIANT,
    SIZE: Spacing.SIZE,
    RADIUS: Spacing.RADIUS,
  };
};

export default Theme;
