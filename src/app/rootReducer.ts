import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/auth/redux/authSlice';
import albumReducer from 'features/albums/redux/albumSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  albums: albumReducer,
});

export default rootReducer;
