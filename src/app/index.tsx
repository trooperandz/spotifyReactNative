import React from 'react';
import { Provider } from 'react-redux';

// import { store, persistor } from './store';
import store from './store';

// import LoginScreen from 'features/auth/screens/Login';
import RootNavigation from 'navigations';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
