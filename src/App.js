/**
 * Boilerplate code for React Native
 * @AUTHOR Defri Indra M
 * @EMAIL defrindr@gmail.com
 **/

import React, {useCallback, useEffect} from 'react';
import type {Node} from 'react';
import Routes from '@routes';

import ReduxStore, {persistor} from '@redux/Store';
import {Provider, useDispatch} from 'react-redux';
import {Appearance} from 'react-native';
import ActionChangeTheme from '@redux/Actions/Ui/ChangeTheme';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => Node = () => {
  const dispatch = useDispatch();

  const themeChangeListener = useCallback(() => {
    dispatch(ActionChangeTheme(Appearance.getColorScheme()));
  }, [dispatch]);

  useEffect(() => {
    Appearance.addChangeListener(themeChangeListener);
  }, [themeChangeListener]);

  return <Routes />;
};

const AppWrapper: () => Node = () => {
  return (
    <Provider store={ReduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
