import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import AuthLogin from '@pages/Auth/Login';
import AuthRegister from '@pages/Auth/Register';
import HomeDashboard from '@pages/Home/Dashboard';
import InitSplashScreen from '@pages/Init/SplashScreen';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="app.init.splashscreen"
          component={InitSplashScreen}
          headerShown={false}
        />

        <Scene key="app.auth.login" component={AuthLogin} headerShown={false} />

        <Scene
          key="app.auth.register"
          component={AuthRegister}
          headerShown={false}
          initial
        />

        <Scene
          key="app.home.dashboard"
          component={HomeDashboard}
          headerShown={false}
        />
      </Stack>
    </Router>
  );
};

export default Routes;
