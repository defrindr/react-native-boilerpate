import {Appearance} from 'react-native';
import Types from '@redux/Types';
import i18n from '@utils/I18n';
import Config from '@config/index';

const INITIAL_STATE = {
  IS_FETCHING: false,
  MESSAGE: i18n.t('ui.loading'),
  THEME_MODE: Appearance.getColorScheme() || Config.THEME.DEFAULT,
};

export default function Ui(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  const {IS_FETCHING, MESSAGE, THEME_MODE} = payload ?? INITIAL_STATE;

  switch (type) {
    case Types.UI.SET_LOADING:
      return {...state, IS_FETCHING, MESSAGE};
    case Types.UI.CHANGE_THEME:
      return {...state, THEME_MODE};
    default:
      return state;
  }
}
