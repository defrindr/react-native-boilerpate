import Types from '@redux/Types';

const GeneratePayload = THEME_MODE => {
  return {
    type: Types.UI.CHANGE_THEME,
    payload: {
      IS_FETCHING: false,
      MESSAGE: '',
      THEME_MODE,
    },
  };
};

export const ChangeTheme = mode => {
  return dispatch => {
    dispatch(GeneratePayload(mode));
  };
};

export default ChangeTheme;
