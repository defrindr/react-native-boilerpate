import Config from '@config/index';
import Types from '@redux/Types';
import I18n from '@utils/I18n';

const LOADING_MESSAGE = I18n.t('ui.loading');

const GeneratePayload = (IS_FETCHING, MESSAGE) => {
  return {
    type: Types.UI.SET_LOADING,
    payload: {
      IS_FETCHING,
      MESSAGE,
      THEME_MODE: Config.THEME.DEFAULT,
    },
  };
};

const SetLoading = (IS_FETCHING, MESSAGE = LOADING_MESSAGE) => {
  return dispatch => {
    dispatch(GeneratePayload(IS_FETCHING, MESSAGE));
  };
};

export default SetLoading;
