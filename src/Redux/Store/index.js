// redux store
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '@redux/Reducers';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
