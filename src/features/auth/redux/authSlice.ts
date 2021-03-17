import { createSlice } from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    refreshToken: '',
    loading: false,
  },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload.refreshToken;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  setLoading,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
