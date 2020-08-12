import 'react-native-gesture-handler'
import React from 'react';

import Routes from './src/routes'
import {AuthProvider} from './src/services/Auth/auth';

const App:  React.FC = () => {
  return (
      <AuthProvider>
         <Routes />
      </AuthProvider>
     )
    
   }

export default App;