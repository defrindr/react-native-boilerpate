// redux reducers
import {combineReducers} from 'redux';

import AuthReducer from './Auth';
import UiReducer from './Ui';

import persistReducer from 'redux-persist/lib/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer),
  ui: UiReducer,
});
