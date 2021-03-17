// import { combineReducers } from 'redux';
// import { combineReducers } from '@reduxjs/toolkit';

// import authenticationSlice from 'features/auth/authSlice';
// import { persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';

// const authenticationConfig = {
//   key: 'auth',
//   storage: AsyncStorage,
//   blacklist: ['accessToken'],
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(authenticationConfig, authenticationSlice),
// });

// export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/auth/redux/authSlice';
import albumReducer from 'features/albums/redux/albumSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  albums: albumReducer,
});

export default rootReducer;
