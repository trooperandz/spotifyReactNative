import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import RootNavigation from 'navigations';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
