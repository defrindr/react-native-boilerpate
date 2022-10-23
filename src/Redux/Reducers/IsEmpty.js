export const SsEmpty = value => {
  const type = typeof value;
  if (type === 'string') {
    return value.trim().length === 0;
  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  } else if (type === 'undefined') {
    return true;
  }
  return false;
};

export default SsEmpty;
