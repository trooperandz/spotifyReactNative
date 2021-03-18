import { createSlice } from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setAccessToken, setRefreshToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;
