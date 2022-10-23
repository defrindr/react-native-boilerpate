import Types from '@redux/Types';
import IsEmpty from '@redux/Reducers/IsEmpty';

// initial state of the auth reducer from redux-persist
const INITIAL_STATE = {
  IS_AUTHENTICATE: false,
  USER: {},
  TOKEN: '',
  REFRESH_TOKEN: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH.LOGIN:
    case Types.AUTH.REGISTER:
      let {USER, TOKEN, REFRESH_TOKEN} = action.payload;
      let IS_AUTHENTICATE =
        !IsEmpty(USER) && !IsEmpty(TOKEN) && !IsEmpty(REFRESH_TOKEN);

      return {...state, IS_AUTHENTICATE, USER, TOKEN, REFRESH_TOKEN};
    case Types.AUTH.LOGOUT:
      return {...state, ...INITIAL_STATE};
    default:
      return state;
  }
}
