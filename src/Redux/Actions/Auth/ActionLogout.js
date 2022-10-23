import AsyncStorage from '@react-native-async-storage/async-storage';
import {Actions} from 'react-native-router-flux';
import Types from '@redux/Types';
import Config from '@config/index';

const GeneratePayload = (USER = {}, TOKEN = '', REFRESH_TOKEN = '') => {
  return {
    type: Types.AUTH.LOGOUT,
    payload: {USER, TOKEN, REFRESH_TOKEN},
  };
};

const ActionLogout = () => {
  return async dispatch => {
    await AsyncStorage.removeItem(Config.STORAGE.AUTH);
    dispatch(GeneratePayload());

    Actions.replace('app.auth.login');
  };
};

export default ActionLogout;
