import 'react-native-gesture-handler';
import React from 'react';

import Routes from './src/routes';
import {AuthProvider} from './src/services/Auth/auth';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};

export default App;