import {Actions} from 'react-native-router-flux';
import Config from '@config';
import Request from '@utils/Request';
import Types from '@redux/Types';
import SetLoading from '../Ui/SetLoading';
import Toast from '@utils/Toast';

const LOGIN_SUCCESS_HOOK = response => {
  // do something after login success
  // like redirect to home page
  Actions.replace('app.home.dashboard');
};

const LOGIN_FAILED_HOOK = response => {
  // do something after login failed
  // like show error message
  Toast.show('Terjadi kesalahan', response.message);
};

const GeneratePayload = (USER = {}, TOKEN = '', REFRESH_TOKEN = '') => {
  return {
    type: Types.AUTH.LOGIN,
    payload: {USER, TOKEN, REFRESH_TOKEN},
  };
};

const ActionLogin = data => {
  return async dispatch => {
    try {
      dispatch(SetLoading(true)); // show loading

      // wait 5s to simulate login process
      await new Promise(resolve => setTimeout(resolve, 5000));
      const response = await Request.FPost(Config.URL.API.AUTH.LOGIN, data); // send Request to server

      if (response.success) {
        // save token to storage
        const {user, token, refresh_token} = response.data;

        dispatch(GeneratePayload(user, token, refresh_token));

        // hook
        LOGIN_SUCCESS_HOOK(response);
      } else {
        dispatch(GeneratePayload());

        // show error message
        LOGIN_FAILED_HOOK(response);
      }
    } catch (error) {
      dispatch(GeneratePayload());
    } finally {
      // loading 2000ms
      setTimeout(() => {
        dispatch(SetLoading(false));
      }, 2000);
    }
  };
};

export default ActionLogin;
