// dynamic size for all devices
import Sizing from '@utils/Size';

export const SIZE = {
  xs: Sizing.scale(4),
  s: Sizing.scale(8),
  sm: Sizing.scale(12),
  m: Sizing.scale(16),
  ml: Sizing.scale(20),
  l: Sizing.scale(24),
  xl: Sizing.scale(32),
};

export const RADIUS = {
  xs: Sizing.scale(4),
  s: Sizing.scale(8),
  sm: Sizing.scale(12),
  m: Sizing.scale(16),
  ml: Sizing.scale(20),
  l: Sizing.scale(24),
  xl: Sizing.scale(32),
  max: Sizing.scale(100),
};

export default {
  SIZE,
  RADIUS,
};
